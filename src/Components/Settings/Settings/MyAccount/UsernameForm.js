import { useEffect, useState } from "react/cjs/react.development"
import Input from "../../../Assets/Input"
import { useUser } from "../../../Contexts/UserContext"

import { firebase } from "../../../../firebase"

const db = firebase.firestore()

const UsernameForm = () => {
    
    const { selfUser } = useUser()
    const [username, setUsername] = useState({name: "username", value: undefined, type: "text", label: "Username", isValid: undefined, isRequired: true})

    const user = selfUser.user
    const id = selfUser.id
    
    const onChange = (e) => {
        switch (e.name) {
            case "username":
                setUsername({...username, value: e.value, isValid: e.value.length > 1})
            default:
                break
        }   
    }

    const onSubmit = async () => {
        console.log(
            await db.collection("users").doc(id).set({
                ...user,
                username: username.value
            })
        )
    }

    useEffect(() => {
        setUsername({...username, name: "username", value: user.username, isValid: user.username.length > 1})
    }, [selfUser])
    
    return (
        <form className="align-center justify-center" style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "rgba(0, 0, 0, 0.2)"
        }} onChange={(e) => onChange(e.target)} onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
        }}>
            <div className="column padding-all-15 gap-20" style={{
                backgroundColor: "var(--bg-color-2)",
                borderRadius: "10px"
            }}>
                <div className="text-center ff-title color-inherit fs-20">
                    <p>Change your Username</p>
                </div>
                <div className="text-center">
                    <p>Enter your new username and your existing password</p>
                </div>
                <Input input={username}/>
            </div>
        </form>
    )
}

export default UsernameForm
