import { useEffect, useState } from "react"

import { firebase } from "../../../firebase"
import { useUser } from "../UserContext"
const db = firebase.firestore()

const Conversation = ({id}) => {
    const { users, setSelfUserDirectConversationsData, selfUser, selfUserDirectConversationsData, setCurrentDirectConversation, currentDirectConversationId } = useUser()

    const [directConversation, setDirectConversation] = useState()
    const [directConversationUsers, setDirectConversationUsers] = useState()
    const [directMessages, setDirectMessages] = useState()
    const [directConversationData, setDirectConversationData] = useState()

    const getDirectConversation = () => {
        db.collection("direct_conversations").doc(id).onSnapshot((res) => {
            setDirectConversation({
                direct_conversation: res.data(),
                id: res.id
            })
        })

    }

    const getDirectConversationUsers = () => {
        const results = []

        for (let i = 0; i < users.length; i++) {
            users[i].user.direct_conversations_id.includes(id) && results.push(users[i])

            console.log(users[i].user.direct_conversations_id)
            console.log(users[i].user.direct_conversations_id.includes(id), users[i].user.direct_conversations_id)
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
        getDirectConversation()
    }, [])


    useEffect(() => {
        getDirectConversationUsers()
    }, [])
    
    useEffect(() => {
        getDirectConversationMessages()
    }, [])
    
    useEffect(() => {
        directConversation && directMessages && directConversationUsers && setDirectConversationData({
            ...directConversation,
            direct_messages: directMessages,
            users: directConversationUsers
        })
        directConversation && directMessages && directConversationUsers && console.log({
            ...directConversation,
            direct_messages: directMessages,
            users: directConversationUsers
        })
    }, [directConversation, directMessages, directConversationUsers])

    useEffect(() => {
        directConversationData && setSelfUserDirectConversationsData(
            selfUser.user.direct_conversations_id.map((e, index) => {
                    if (e === id) return directConversationData
                    if (selfUserDirectConversationsData && selfUserDirectConversationsData[index]) return selfUserDirectConversationsData[index]
                }
            )
        )
    }, [directConversationData, selfUser.user.direct_conversations_id])

    useEffect(() => {
        currentDirectConversationId === id && setCurrentDirectConversation(directConversationData)
    }, [directConversationData, currentDirectConversationId])

    return ""
}

export default Conversation
