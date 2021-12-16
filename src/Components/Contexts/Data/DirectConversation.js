import { useEffect, useState } from "react"

import { firebase } from "../../../firebase"
import { useUser } from "../UserContext"
const db = firebase.firestore()

const DirectMessages = ({directConversation, id}) => {
    const { setSelfUserDirectMessages, selfUserDirectConversations, setselfUserDirectConversations, setSelfUserDirectConversationsData, selfUserDirectConversationsData } = useUser()
    const [directMessages, setDirectMessages] = useState()
    const [users, setUsers] = useState()

    const getDirectMessages = async () => {
        
        db.collection("direct_messages").where("direct_conversation_id", "==", id).onSnapshot( async (res) => {
            const directMessages = res.docs
            const results = []

            for (let i = 0; i < directMessages.length; i++) {
                const directMessage = directMessages[i].data()
                const id = directMessages[i].id
                results.push({
                    message: directMessage,
                    id: id
                })
            }

            setDirectMessages(results)
        })
    }

    const getUsers = async () => {
        const results = []

        for (let i = 0; i < directConversation.users_id.length; i++) {
            const userId = directConversation.users_id[i]
            const res = await db.collection("users").doc(userId).get()
            const user = res.data()
            const id = res.id

            results.push({
                user: user,
                id: id
            })
        }

        setUsers(results)
    }

    useEffect(() => {
        setSelfUserDirectConversationsData(
            selfUserDirectConversations.map((selfUserDirectConversation, index) => {
                if (selfUserDirectConversation.id === id) return (
                    {
                        ...selfUserDirectConversation,
                        users: users,
                        messages: directMessages
                    }
                )
                else {
                    if(selfUserDirectConversationsData) return selfUserDirectConversationsData[index]
                    else return selfUserDirectConversation
                }
            })
        )
    }, [directMessages, users, selfUserDirectConversations])

    useEffect(() => {
        return getDirectMessages(), getUsers()
    }, [])

    return (
        ""
    )
}

export default DirectMessages
