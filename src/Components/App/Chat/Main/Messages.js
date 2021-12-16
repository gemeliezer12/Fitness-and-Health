import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useUser } from "../../../Contexts/UserContext"

const Messages = () => {
    const { selfUserDirectConversationsData } = useUser()
    const { currentDirectConversationId } = useParams()

    const [currentDirectMessages, setCurrentDirectMessages] = useState()

    const getCurrentMessages = () => {
        setCurrentDirectMessages(selfUserDirectConversationsData.filter((selfUserDirectConversation) => selfUserDirectConversation.id === currentDirectConversationId)[0].messages)
    }

    useEffect(() => {
        getCurrentMessages()
    }, [currentDirectConversationId, selfUserDirectConversationsData])

    return (
        <>
            {currentDirectMessages && currentDirectMessages.map((message) =>
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
                                {/* <p>{message.user.username}</p> */}
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
