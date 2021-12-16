import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useUser } from "../../../Contexts/UserContext"
import { firebase } from "../../../../firebase"

import Form from "./Form"
import Messages from "./Messages"
const db = firebase.firestore()

const Index = () => {

    return (
        <>
            <div style={{
                width: "100%",
                backgroundColor: "var(--bg-color-3)",
                display: "flex",
                flexDirection: "column",
                overflowY: "hidden"
            }}>
                <div style={{
                    height: "50px",
                    minHeight: "50px"
                }}>
                    
                </div>
                <Messages/>
                <Form/>
            </div>
        </>
    )
}

export default Index
