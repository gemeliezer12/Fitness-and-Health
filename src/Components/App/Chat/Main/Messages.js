import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useUser } from "../../../Contexts/UserContext"

const Messages = () => {
    const { currentUserMessages } = useUser()
    const { userId } = useParams()

    const getCurrentMessages = () => {
        if(currentUserMessages) return currentUserMessages.filter((message) => message.message.sender_user_id === userId || message.message.sent_user_id)
    }

    useEffect(() => {
        getCurrentMessages()
    }, [])

    return (
        <>
            <div style={{
                height: "100%"
            }}>
                {currentUserMessages && getCurrentMessages().map((message) => 
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
                                    <p>{message.user.username}</p>
                                </div>
                            </div>
                            <p>
                                {message.message.value}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Messages
