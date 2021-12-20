import { Link, useNavigate, useParams } from "react-router-dom"
import { firebase } from "../../../../firebase"
import { useUser } from "../../../Contexts/UserContext"

const db = firebase.firestore()

const DirectConversation = ({id, directConversation, users, messages}) => {
    const navigate = useNavigate()
    const { currentDirectConversationId } = useParams()
    const { selfUser } = useUser()

    const removeConversation = () => {
        const newDirectConversationsId = []

        for (let i = 0; i < selfUser.user.direct_conversations_id.length; i++) {
            const direct_conversations_id = selfUser.user.direct_conversations_id[i]
            direct_conversations_id !== id && newDirectConversationsId.push(direct_conversations_id)
        }

        db.collection("users").doc(selfUser.id).set({
            ...selfUser.user,
            direct_conversations_id: newDirectConversationsId
        }).then(() => navigate("/app/chat"))
    }

    return (
        <Link to={`/app/chat/${id}`} className={`lvC9OT67bA ${currentDirectConversationId === id ? " selected" : ""}`}>
            <div className="row gap-6" style={{
                whiteSpace: "nowrap",
                overflow: "hidden"
            }}>
                <div style={{
                    height: "32px",
                    position: "relative"
                }}>
                    <div className="img-32 img pos-relative">
                        <img src="../../../../images/profile.png" alt="" />
                    </div>
                    <div className="pos-absolute padding-all-2 border-radius-50pc" style={{
                        right: "0",
                        bottom: "0",
                        backgroundColor: "var(--bg-color-2)",
                        marginRight: "-2px",
                        marginBottom: "-2px"
                    }}>
                        <div className="badge-10" style={{
                            backgroundColor: "var(--green)"
                        }}></div>
                    </div>
                </div>
                <div className="column justify-center fs-14">
                    <p style={{
                        color: "var(--text-color-2)",
                    }}>{users && users.filter((user) => user.id !== selfUser.id)[0].user.username}</p>
                </div>
            </div>
            <div className="align-center row gap-6" onClick={() => removeConversation()}>
                <div className="img-26 icon cursor-pointer">
                    <i className="fa fa-times"></i>
                </div>
            </div>
        </Link>
    )
}

export default DirectConversation