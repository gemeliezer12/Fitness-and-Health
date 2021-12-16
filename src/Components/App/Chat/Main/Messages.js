import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useUser } from "../../../Contexts/UserContext"

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
                <div className="row" style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "6px"
                }}>
                    <div className="img-32 img">
                        <img src={`../../../../images/profile.png`} alt="" />
                    </div>
                    <div style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <div className="flex space-between">
                            <div className="row gap-6">
                            </div>
                        </div>
                        <p>
                            {message.message.message}
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Messages
