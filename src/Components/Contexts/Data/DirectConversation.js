import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { firebase } from "../../../firebase"
import { useAuth } from "../AuthContext"
import { useUser } from "../UserContext"
const db = firebase.firestore()

const Conversation = ({id}) => {
    const { users, setSelfUserDirectConversationsData, selfUserDirectConversationsData, setCurrentDirectConversation, currentDirectConversationId } = useUser()
    const { selfUser } = useAuth()

    const [directConversation, setDirectConversation] = useState()
    const [directConversationUsers, setDirectConversationUsers] = useState()
    const [directMessages, setDirectMessages] = useState()
    const [directConversationData, setDirectConversationData] = useState()
    const [directConversationUser, setDirectConversationUser] = useState()
    const [directConversationIsLoading, setDirectConversationIsLoading] = useState(true)

    const getDirectConversation = () => {
        db.collection("direct_conversations").doc(id).onSnapshot((res) => {
            setDirectConversation({
                direct_conversation: res.data(),
                id: res.id
            })
            setDirectConversationIsLoading(false)
        })
    }

    const getDirectConversationUsers = () => {
        const results = []

        for (let i = 0; i < users.length; i++) {
            users[i].user.direct_conversations_id.includes(id) && results.push(users[i])
        }
    
        setDirectConversationUsers(results)
    }

    const getDirectConversationMessages = async () => {
        db.collection("direct_messages").where("direct_conversation_id", "==", id).onSnapshot((res) => {
            const directMessages = res.docs
            const results = []

            for (let i = 0; i < directMessages.length; i++) {
                results.push({
                    direct_message: directMessages[i].data(),
                    id: directMessages[i].id,
                    user: users.filter((user) => user.id === directMessages[i].data().user_id)[0].user
                })
            }

            setDirectMessages(results)
        })
    }

    useEffect(() => {
        return getDirectConversation()
    }, [])


    useEffect(() => {
        if (!directConversationIsLoading) return getDirectConversationUsers()
    }, [directConversationIsLoading])
    
    useEffect(() => {
        return getDirectConversationMessages()
    }, [])
    
    // Direct Conversation Data
    useEffect(() => {
        directConversation && directMessages && directConversationUsers && setDirectConversationData({
            ...directConversation,
            direct_messages: directMessages,
            users: directConversationUsers
        })
    }, [directConversation, directMessages, directConversationUsers])

    // Direct Conversations Data
    useEffect(() => {
        directConversationData && setSelfUserDirectConversationsData(
            selfUser.user.direct_conversations_id.map((e, index) => {
                    if (e === id) return directConversationData
                    if (selfUserDirectConversationsData && selfUserDirectConversationsData[index]) return selfUserDirectConversationsData[index]
                }
            )
        )
    }, [directConversationData, selfUser.user.direct_conversations_id])

    // Direct Conversations Data
    useEffect(() => {
        currentDirectConversationId === id && setCurrentDirectConversation(directConversationData)
    }, [directConversationData, currentDirectConversationId])

    return null
}

export default Conversation