import { useEffect, useState } from "react"

import { firebase } from "../../../firebase"
import { useUser } from "../UserContext"
const db = firebase.firestore()

const DirectMessages = ({directConversation, id}) => {
    const { selfUserDirectConversations, setSelfUserDirectConversationsData, selfUserDirectConversationsData, users, selfUser } = useUser()
    const [directMessages, setDirectMessages] = useState()
    const [directConversationUsers, setDirectConversationUsers] = useState()

    const getDirectMessages = async () => {
        
        db.collection("direct_messages").where("direct_conversation_id", "==", id).orderBy("date_created", "asc").onSnapshot( async (res) => {
            const directMessages = res.docs
            const results = []


            for (let i = 0; i < directMessages.length; i++) {
                const directMessage = directMessages[i].data()
                const id = directMessages[i].id
                
                const user = users.filter((user) => user.id === directMessage.user_id)[0].user

                results.push({
                    message: directMessage,
                    id: id,
                    user: user
                })
            }
            setDirectMessages(results)
        })
    }

    const getDirectConversationUsers = () => {
        const results = []

        for (let i = 0; i < directConversation.users_id.length; i++) {
            results.push(users.filter((e) => e.id === directConversation.users_id[i])[0])
        }

        setDirectConversationUsers(results)
    }

    useEffect(() => {
        // console.log(selfUser.user.direct_conversations_id.ma)
        directMessages && directConversationUsers && setSelfUserDirectConversationsData(
            selfUserDirectConversations.map((selfUserDirectConversation, index) => {
                if (selfUserDirectConversation.id === id){
                    return (
                        {
                            // ...selfUserDirectConversation,
                            directConversation: directConversation,
                            id: id,
                            users: directConversationUsers,
                            messages: directMessages
                        }
                    )
                }
                else {
                    if (selfUserDirectConversationsData && selfUserDirectConversationsData[index]) return selfUserDirectConversationsData[index]
                    else return selfUserDirectConversation
                }
            }),
            "ADS"
        )
        console.log(
            selfUserDirectConversations.map((selfUserDirectConversation, index) => {
                if (selfUserDirectConversation.id === id){
                    return (
                        {
                            ...selfUserDirectConversation,
                            users: directConversationUsers,
                            messages: directMessages
                        }
                    )
                }
                else {
                    if (selfUserDirectConversationsData && selfUserDirectConversationsData[index]) {
                        return (selfUserDirectConversationsData[index])
                    }
                    else {
                        return (selfUserDirectConversation)
                    }
                }
            })
        )
    }, [directMessages, directConversationUsers, selfUserDirectConversations.length])

    useEffect(() => {
        return getDirectMessages()
    }, [])

    useEffect(() => {
        return getDirectConversationUsers()
    }, [])

    return (
        ""
    )
}

export default DirectMessages
