import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useUser } from "../../../Contexts/UserContext"
import Message from "./Message"

const Messages = () => {
    const { selfUserDirectConversationsData } = useUser()
    const { currentDirectConversationId } = useParams()

    const getCurrentMessages = () => {
        for (let i = 0; i < selfUserDirectConversationsData.length; i++) {
            if (selfUserDirectConversationsData[i].id === currentDirectConversationId) return selfUserDirectConversationsData[i]
        }
    }

    const currentDirectConversation = getCurrentMessages()

    return (
        <>
            {currentDirectConversation.messages && currentDirectConversation.messages.map((message) =>
                <Message message={message.message} key={message.id}/>
            )}
        </>
    )
}

export default Messages
