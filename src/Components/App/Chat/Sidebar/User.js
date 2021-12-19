import { useNavigate } from "react-router-dom"
import { firebase } from "../../../../firebase"
import { useUser } from "../../../Contexts/UserContext"

const db = firebase.firestore()

const User = ({user, id}) => {
    const { selfUser } = useUser()
    const navigate = useNavigate()

    const onClick = async () => {
        const directConversations = (await db.collection("direct_conversations").where("users_id", "array-contains", selfUser.id).get()).docs

        let directConversationExist = false
        
        for (let i = 0; i < directConversations.length; i++) {
            const directConversation = directConversations[i].data()
            const directConversationId = directConversations[i].id
            for (let i = 0; i < directConversation.users_id.length; i++) {
                console.log(directConversation.users_id[i], id)
                if (directConversation.users_id[i] === id) directConversationExist = directConversationId
            }
        }

        if (!directConversationExist) {
            const createdDirectConversation = await db.collection("direct_conversations").add({
                users_id: [selfUser.id, id]
            })
            navigate(`/app/chat/${createdDirectConversation.id}`)
        }
        else {
            navigate(`/app/chat/${directConversationExist.id}`)
        }

        console.log(directConversationExist)
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
