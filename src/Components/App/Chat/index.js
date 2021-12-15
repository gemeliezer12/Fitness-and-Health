import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

import { firebase } from "../../../firebase"
import { useUser } from "../../Contexts/UserContext"
import TextareaAutosize from "react-textarea-autosize"
import Sidebar from "./Sidebar/"
import Main from "./Main/"
const db = firebase.firestore()

const Index = () => {
    const { selfUser, setSelfUserFriends } = useUser()

    const getFriendsOfUser = async () => {
        const friend = []

        for (let i = 0; i < selfUser.user.friends.length; i++) {
            const id = selfUser.user.friends[i]
            const user = await db.collection("users").doc(id).get()
            
            user.data().friends.includes(selfUser.id) && friend.push({user: user.data(), id: user.id})
        }

        console.log(friend);

        setSelfUserFriends(friend)
    }

    useEffect(() => {
        selfUser && getFriendsOfUser()
    }, [])
    
    console.log(selfUser);
    if (!selfUser) return ""
    return (
        <>
            <Sidebar/>
            <Main/>
        </>
    )
}

export default Index
