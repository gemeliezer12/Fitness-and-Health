import { useEffect, useState } from "react"

import { firebase } from "../../../firebase"
import { useUser } from "../UserContext"
const db = firebase.firestore()

const DirectMessages = ({directConversation, id}) => {
    const { selfUserDirectConversations, setSelfUserDirectConversationsData, selfUserDirectConversationsData, users } = useUser()
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
        directMessages && directConversationUsers && setSelfUserDirectConversationsData(
            selfUserDirectConversations.map((selfUserDirectConversation, index) => {
                console.log(selfUserDirectConversation.id, id)
                if (selfUserDirectConversation.id === id){
                    console.log(
                        {
                            ...selfUserDirectConversation,
                            users: directConversationUsers,
                            messages: directMessages
                        }
                    )
                }
                else {
                    if (selfUserDirectConversationsData && selfUserDirectConversationsData[index]) console.log(selfUserDirectConversationsData[index])
                    else console.log(selfUserDirectConversation)
                }
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
                    if (selfUserDirectConversationsData && selfUserDirectConversationsData[index]) return selfUserDirectConversationsData[index]
                    else return selfUserDirectConversation
                }
            })
        )
    }, [directMessages, directConversationUsers, selfUserDirectConversations.length])

    useEffect(() => {
        return getDirectMessages(), getDirectConversationUsers()
    }, [])

    return (
        ""
    )
}

export default DirectMessages
