import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useUser } from "../../../Contexts/UserContext"
import { firebase } from "../../../../firebase"

import Form from "./Form"
import Messages from "./Messages"
const db = firebase.firestore()

const Index = () => {
    const { selfUserDirectConversationsData } = useUser()

    return (
        <>
            <div style={{
                height: "50px",
                minHeight: "50px"
            }}> 
            </div>
            <div style={{
                height: "100%"
            }}>

                { selfUserDirectConversationsData && <Messages/>}
            </div>
            <Form/>
        </>
    )
}

export default Index
