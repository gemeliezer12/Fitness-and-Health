import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useUser } from "../../../Contexts/UserContext"
import { firebase } from "../../../../firebase"

import Form from "./Form"
import Messages from "./Messages"
import DirectMessages from "./DirectMessages"
const db = firebase.firestore()

const Index = () => {
    const { selfUser, setSelfUserFriends, currentUserMessages, setCurrentUserMessages } = useUser()
    const {userId} = useParams()

    const getFriendsOfUser = async () => {
        const friend = []

        for (let i = 0; i < selfUser.user.friends.length; i++) {
            const id = selfUser.user.friends[i]
            const user = await db.collection("users").doc(id).get()
            
            user.data().friends.includes(selfUser.id) && friend.push({user: user.data(), id: user.id})
        }

        setSelfUserFriends(friend)
    }

    useEffect(() => {
        getFriendsOfUser()
    }, [])

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
            <DirectMessages/>
        </>
    )
}

export default Index
