import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { firebase } from "../../../../firebase"
import { useUser } from "../../../Contexts/UserContext"

const db = firebase.firestore()

const User = ({id, directMessage}) => {
    const {selfUserFriends, selfUser} = useUser()
    
    useEffect(() => {
        // console.log(directMessage.users_id.filter((user_id) => console.log(user_id))

        console.log(directMessage.users_id.filter((userId) => userId !== selfUser.id)[0])
    }, [])

    return (
        <Link to={`/app/chat/${id}`} className="lvC9OT67bA">
            {/* <div className="row gap-6" style={{
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
                    }}>{user.username}</p>
                </div>
            </div> */}
        </Link>
    )
}

export default User
