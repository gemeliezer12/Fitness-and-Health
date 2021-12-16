import { useEffect, useState } from "react"

import { firebase } from "../../../firebase"
import { useUser } from "../UserContext"
const db = firebase.firestore()

const DirectMessages = ({directConversation, id}) => {
    const { setSelfUserDirectMessages } = useUser()
    const [directMessages, setDirectMessages] = useState()
    
    const getDirectMessages = async () => {
        
        db.collection("direct_messages").where("directConversation", "==", id).onSnapshot((res) => {
            const directMessages = res.docs

            // if (directMessages.length > 0) {
                for (let i = 0; i < directMessages.length; i++) {
                    const directMessage = directMessages[i]
                    console.log(
                        db.collection("users").doc(directMessage.id)
                    );
                }
            // }
        })
    }

    useEffect(() => {
        getDirectMessages()
    }, [])

    return (
        ""
    )
}

export default DirectMessages
