import { useState, useEffect, createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { firebase } from "../../firebase"
import DirectMessages from "./Data/DirectMessages"

const db = firebase.firestore()
const auth = firebase.auth()

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    
    const [selfUser, setSelfUser] = useState()
    const [selfUserFriends, setSelfUserFriends] = useState()
    const [selfUserFriendRequests, setSelfUserFriendRequests] = useState()
    const [selfUserFriendRequesting, setSelfUserFriendRequesting] = useState()
    const [selfUserdirectConversations, setSelfUserdirectConversations] = useState()
    const navigate = useNavigate()
    const [currentUserMessages, setCurrentUserMessages] = useState()
    const [selfUserDirectMessages, setSelfUserDirectMessages] = useState()

    const getSelfUser = async (userId) => {
        db.collection("users").doc(userId).onSnapshot((user) => {
            setSelfUser({ user: user.data(), id: user.id})
        })
    }

    const signOut = () => {
        auth.signOut()
        navigate("/")
    }

    const friendsHandler = async () => {
        const friends = []
        const friendRequesting = []
        const friendRequests = []

        const f = (await db.collection("users").where("friends", "array-contains", selfUser.id).get()).docs

        for (let i = 0; i < f.length; i++) {
            const user = f[i]

            selfUser.user.friends.includes(user.id) ?
            friends.push({
                user: user.data(),
                id: user.id
            })
            :
            friendRequests.push({
                user: user.data(),
                id: user.id
            })
        }

        for (let i = 0; i < selfUser.user.friends.length; i++) {
            const user = selfUser.user.friends[i]
            const f = await db.collection("users").doc(user).get()

            !f.data().friends.includes(selfUser.id) && friendRequesting.push({
                user: f.data(),
                id: f.id
            })
        }

        setSelfUserFriendRequests(friendRequests)
        setSelfUserFriendRequesting(friendRequesting)
        setSelfUserFriends(friends)
    }

    const getSelfUserDirectConverasations = async () => {
        const results = []

        const directConversations = (await db.collection("direct_conversation").where("users_id", "array-contains", selfUser.id).get()).docs

        for (let i = 0; i < directConversations.length; i++) {
            const directConversation = directConversations[i]

            results.push({
                direct_conversation: directConversation.data(),
                id: directConversation.id
            })
        }

        setSelfUserdirectConversations(results)
    }

    useEffect(() => {
        auth.onAuthStateChanged( async (user) => {
            if (user) {
                getSelfUser(user.uid)
            }
            else {
                setSelfUser(null)
            }
        })
    }, [])

    useEffect(() => {
        if (selfUser) {
            friendsHandler()
            getSelfUserDirectConverasations()
        }
    }, [selfUser])

    const value = {
        selfUser,
        signOut,
        selfUserFriends,
        setSelfUserFriends,
        selfUserFriendRequests,
        setSelfUserFriendRequests,
        selfUserFriendRequesting,
        setSelfUserFriendRequesting,
        currentUserMessages,
        setCurrentUserMessages,
        selfUserDirectMessages,
        setSelfUserDirectMessages
    }
    return (
        <UserContext.Provider value={value}>
            {selfUserdirectConversations && selfUserdirectConversations.map(directConversation =>
                <DirectMessages directConversation={directConversation.direct_conversation} id={directConversation.id} key={directConversation.id}/>
            )}
            {children}
        </UserContext.Provider>
    )
}