import Sidebar from "./Sidebar/"
import { useState, useEffect } from "react"
import { useUser } from "../Contexts/UserContext"
import User from "./Sidebar/User"
import TextareaAutosize from "react-textarea-autosize"
import { Routes, Routem, useParams } from "react-router-dom"
import { firebase } from "../../firebase"

const db = firebase.firestore()


const Index = () => {
    const { selfUser } = useUser()
    const {userId} = useParams()
    const date = new Date()

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
        await db.collection("messages").add(
            {
                sender_user_id: selfUser.id,
                sent_user_id: userId,
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

    
    if (!selfUser) return ""

    console.log(message)
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100vw",
                height: "100vh"
            }}>
                <Sidebar/>
                <div style={{
                    width: "215px",
                    minWidth: "215px",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "var(--bg-color-2)"
                }}>
                    <div style={{
                        height: "50px",
                        minHeight: "50px",
                        padding: "10px"
                    }}>
                        <input className="height-100pc width-100pc padding-x-6 padding-y-4 border-radius-4 fs-14" type="text" placeholder="Search for a Trainer" style={{
                            backgroundColor: "var(--bg-color-1)",
                        }}/>
                    </div>
                    <div className="column padding-x-10" style={{
                        height: "100%",
                        borderTop: "1px solid var(--base-002)"
                    }}>
                        {selfUser.user.friends.map((friend) => (
                            <User id={friend}/>
                        ))}
                    </div>
                    <div style={{
                        height: "50px",
                        minHeight: "50px"
                    }}>
                    </div>
                </div>
                <div style={{
                    width: "100%",
                    backgroundColor: "var(--bg-color-3)",
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "hidden"
                }}>
                    <div style={{
                        height: "50px",
                        minHeight: "50px"
                    }}>
                        
                    </div>
                    <div style={{
                        height: "100%",
                    }}>
                    </div>
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
                </div>
                <div style={{
                    width: "215px",
                    minWidth: "215px",
                    backgroundColor: "var(--bg-color-2)"
                }}>
                </div>
            </div>
        </>
    )
}

export default Index
