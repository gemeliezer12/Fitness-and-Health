import { useEffect, useState } from "react"

import {firebase} from "../../../../firebase"

const db =firebase.firestore()

const Message = ({e, id}) => {
    const [messages, setMessages] = useState()

    console.log(id);

    const getMessages = async () => {
        await db.collection("direct_messages").doc(id).collection("messages").onSnapshot(async (messages) => {
            messages = messages.docs

            for (let i = 0; i < messages.length; i++) {
                const message = messages[i];
                
                console.log(
                    // await db.collection("users").doc
                );
            }
        })
    }

    useEffect(() => {
        getMessages()
    }, [])

    return (
        ""
    )
}

export default Message
