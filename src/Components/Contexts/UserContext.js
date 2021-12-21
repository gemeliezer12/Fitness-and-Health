import { useState, useEffect, createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { firebase } from "../../firebase"
import DirectConversation from "./Data/DirectConversation"

const db = firebase.firestore()
const auth = firebase.auth()

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    
    const [selfUser, setSelfUser] = useState()
    const [selfUserFriends, setSelfUserFriends] = useState([])
    const [selfUserFriendRequests, setSelfUserFriendRequests] = useState([])
    const [selfUserFriendRequesting, setSelfUserFriendRequesting] = useState([])
    const [selfUserDirectConversations, setselfUserDirectConversations] = useState([])
    const [selfUserDirectConversationsData, setSelfUserDirectConversationsData] = useState([])
    const [users, setUsers] = useState([])
    const [currentDirectConversation, setCurrentDirectConversation] = useState()
    const [currentDirectConversationId, setCurrentDirectConversationId] = useState()
    const navigate = useNavigate()

    const getSelfUser = async (userId) => {
        db.collection("users").doc(userId).onSnapshot((user) => {
            setSelfUser({ user: user.data(), id: user.id})
        })
    }

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

    const getSelfUserDirectConverasations = async () => {
        db.collection("direct_conversations").where("users_id", "array-contains", selfUser.id).onSnapshot((res) => {
            res = res.docs
            const results = []

            for (let i = 0; i < res.length; i++) {
                const directConversation = res[i].data()
                const id = res[i].id
               
                results.push({
                    direct_conversation: directConversation,
                    id: id
                })
            }
            
            setselfUserDirectConversations(results)
        })
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
        selfUserDirectConversations,
        setselfUserDirectConversations,
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
            {selfUser && users && selfUser.user.direct_conversations_id.map((id) => <DirectConversation key={id} id={id}/>)}
            {children}
        </UserContext.Provider>
    )
}