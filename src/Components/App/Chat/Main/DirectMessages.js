import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { firebase } from "../../../../firebase"
import { useUser } from "../../../Contexts/UserContext"
import Message from "../Data/Message"

const db = firebase.firestore()

const DirectMessages = () => {
    const { selfUser, setCurrentUserMessages, currentUserMessages, setSelfUserDirectMessages, selfUserDirectMessages } = useUser()

    const { userId } = useParams()

    const getMessages = async () => {
        const results = []

        const directMessages = (await db.collection("direct_messages").where("users_id", "array-contains", selfUser.id).get()).docs

        for (let i = 0; i < directMessages.length; i++) {
            const directMessage = directMessages[i]
            const user = directMessage.data().users_id.filter(user => user !== selfUser.id)[0]

            console.log(
                
            );

            results.push({
                direct_message: directMessage.data(),
                id: directMessage.id
            })
        }

        setSelfUserDirectMessages(results)
    }

    useEffect(() => {
        getMessages()
    }, [])

    if (!selfUserDirectMessages) return ""

    return (
        selfUserDirectMessages.map((e) => 
            <Message e={e.direct_message} id={e.id}/>
        )
    )
}

export default DirectMessages
