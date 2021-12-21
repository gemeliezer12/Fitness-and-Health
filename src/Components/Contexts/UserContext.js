import { useState, useEffect, createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"

import DirectConversation from "./Data/DirectConversation"

import { firebase } from "../../firebase"
import { useAuth } from "./AuthContext"
const db = firebase.firestore()
const auth = firebase.auth()

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const { selfUser } = useAuth()

    const [selfUserFriends, setSelfUserFriends] = useState([])
    const [selfUserFriendRequests, setSelfUserFriendRequests] = useState([])
    const [selfUserFriendRequesting, setSelfUserFriendRequesting] = useState([])
    const [selfUserDirectConversationsData, setSelfUserDirectConversationsData] = useState([])
    const [users, setUsers] = useState()
    const [currentDirectConversation, setCurrentDirectConversation] = useState()
    const [currentDirectConversationId, setCurrentDirectConversationId] = useState()
    const [directMessages, setDirectMessages] = useState()
    const navigate = useNavigate()

    const signOut = () => {
        auth.signOut()
        navigate("/")
    }

    const getUsers = async () => {
        db.collection("users").onSnapshot((res) => {
            const users = res.docs
            const results = []
            for (let i = 0; i < users.length; i++) {
                results.push({
                    user: users[i].data(),
                    id: users[i].id
                })
            }
            setUsers(results)
        })
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

        if (selfUser.user.friends) for (let i = 0; i < selfUser.user.friends.length; i++) {
            const user = selfUser.user.friends[i]
            const f = await db.collection("users").doc(user).get()

            f.exists && !f.data().friends.includes(selfUser.id) && friendRequesting.push({
                user: f.data(),
                id: f.id
            })
        }

        setSelfUserFriendRequests(friendRequests)
        setSelfUserFriendRequesting(friendRequesting)
        setSelfUserFriends(friends)
    }

    useEffect(() => {
        if (selfUser) {
            friendsHandler()
        }
    }, [selfUser])

    useEffect(()=> {
        getUsers()
    }, [])

    useEffect(() => {
        selfUser && selfUser.user.direct_conversations_id.length === 0 && setSelfUserDirectConversationsData([])
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
        selfUserDirectConversationsData,
        setSelfUserDirectConversationsData,
        users,
        setUsers,
        currentDirectConversation,
        setCurrentDirectConversation,
        currentDirectConversationId,
        setCurrentDirectConversationId
    }

    return (
        <UserContext.Provider value={value}>
            {selfUser && selfUser.user.direct_conversations_id && users && selfUser.user.direct_conversations_id.map((id) => <DirectConversation key={id} id={id}/>)}
            {children}
        </UserContext.Provider>
    )
}