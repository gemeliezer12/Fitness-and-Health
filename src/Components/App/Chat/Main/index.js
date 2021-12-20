import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useUser } from "../../../Contexts/UserContext"
import { firebase } from "../../../../firebase"

import Form from "./Form"
import Messages from "./Messages"
const db = firebase.firestore()

const Index = () => {
    const { selfUser, selfUserDirectConversationsData, currentDirectConversation, setCurrentDirectConversationId } = useUser()
    const {currentDirectConversationId} = useParams()

    useEffect(() => {
        setCurrentDirectConversationId(currentDirectConversationId)
    }, [currentDirectConversationId])
    
    return (
        <>
            <div style={{
                height: "50px",
                minHeight: "50px"
            }}> 
            </div>
            <div className="padding-x-15 padding-y-10" style={{
                height: "100%"
            }}>

                { currentDirectConversation && <Messages messages={currentDirectConversation.direct_messages}/>}
            </div>
            {currentDirectConversation && <Form currentDirectConversation={currentDirectConversation}/>}
        </>
    )
}

export default Index
