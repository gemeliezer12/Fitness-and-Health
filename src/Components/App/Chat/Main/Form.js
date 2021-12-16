
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useUser } from "../../../Contexts/UserContext"
import { firebase } from "../../../../firebase"
import TextareaAutosize from "react-textarea-autosize"

const db = firebase.firestore()

const Form = () => {
    const { selfUser, setSelfUserFriends } = useUser()
    const date = new Date()
    const {userId} = useParams()

    const onlySpaces = (str) => {
        return str.trim().length === 0;
    }
    
    const [message, setmessage] = useState({name: "message", value: "", isValid: false, label: "#Message", isRequired: true})

    const onChange = (e) => {
        switch (e.name) {
            case "message":
                setmessage({...message, value: e.value, isValid: e.value !== "" && !onlySpaces(e.value)})
                break
            default:
                break
        }
    }

    const allInputIsValid = () => {
        return message.isValid
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!allInputIsValid()) return

        setmessage({...message, value: "", isValid: false})
        await db.collection("direct_messages").doc(userId).collection("messages").add(
            {
                user_id: selfUser.id,
                value: message.value,
                date_created: date.getTime()
            }
        )
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13 && e.shiftKey === false) {
            onSubmit(e)
        }
    }


    return (
        <div className="column padding-x-15">
            <form onSubmit={(e) => {
                e.preventDefault()
                onSubmit()
            }} onChange={(e) => onChange(e.target)} className="row space-between padding-x-15 gap-6" style={{
                backgroundColor: "var(--bg-color-4)",
                borderRadius: "4px",
            }}>
                <div className="icon-40-absolute y">
                    <i className="fas fa-plus-circle"></i>
                </div>
                <TextareaAutosize name={message.name} maxRows={20} style={{
                    width: "100%",
                    alignSelf: "center"
                }} placeholder={`Send a message to @${selfUser.user.username}`} onKeyDown={(e) => onKeyDown(e)} value={message.value}/>
                <div className="icon-40-absolute y">
                    <i className="fas fa-paper-plane"></i>
                </div>
            </form>
            <div style={{
                minHeight: "20px",
                height: "20px"
            }}>

            </div>
        </div>
    )
}

export default Form
