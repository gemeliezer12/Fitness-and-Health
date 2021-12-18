import { firebase } from "../../../../firebase"
import { useUser } from "../../../Contexts/UserContext"

const db = firebase.firestore()

const User = ({user, id}) => {
    const { selfUser } = useUser()

    const onClick = async () => {
        const directConversationCheck = await db.collection("direct_conversations").where("users_id", "array-contains", selfUser.id && id).get()
        
        if (directConversationCheck.empty === true) {
            const createdDirectConversation = await db.collection("direct_conversations").add({
                users_id: [selfUser.id, id]
            })

            console.log(createdDirectConversation)
        }
    }

    return (
        <div className="row space-between padding-x-6 padding-y-4" onClick={() => onClick()}>
            <div className="row gap-6 align-center">
                <div className="img-32 img">
                    <img src="../../../../images/profile.png" alt=""/>
                </div>
                <p>
                    {user.username}
                </p>
            </div>
        </div>
    )
}

export default User
