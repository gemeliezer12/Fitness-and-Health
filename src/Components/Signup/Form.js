import { useState, useEffect } from "react"
import { firebase } from "../../firebase"

import Input from "../Assets/Input"

const date = new Date()
const db = firebase.firestore()

const Form = () => {
    const [email, setEmail] = useState({name: "email", label: "Email", type: "email", value: "", isValid: false, isRequired: true})
    const [username, setUsername] = useState({name: "username", label: "Username", type: "text", value: "", isValid: false, isRequired: true})
    const [password, setPassword] = useState({name: "password", label: "Password", type: "password", value: "", isValid: false, isRequired: true})
    const [passwordRepeat, setPasswordRepeat] = useState({name: "passwordRepeat", label: "Repeat Password", type: "password", value: "", isValid: false, isRequired: true})

    const signInWithEmailPassword = async (e) => {
        e.preventDefault()
        if(!allInputIsValid()) return
        
        try {
            const res = await new firebase.auth().createUserWithEmailAndPassword( email.value, password.value)

            try {
                db.collection("users").doc(res.user.uid).set({
                    username: username.value
                })
            }
            catch (err) {
                console.log(err)
            }
        }
        catch (err) {
            console.log(err)
        }

    }

    const onChange = (e) => {
        switch (e.name) {
            case "email":
                setEmail({...email, value: e.value, isValid: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.value)})
                break
            case "password":
                setPassword({...password, value: e.value, isValid: e.value.length >= 8})
                break
            case "passwordRepeat":
                setPasswordRepeat({...passwordRepeat, value: e.value, isValid: e.value === password.value})
                break
            case "username":
                setUsername({...username, value: e.value, isValid: e.value.length >= 1})
                break
        }
    }

    const allInputIsValid = () => {
        return email.isValid && password.isValid && passwordRepeat.isValid && username.isValid
    }

    console.log(username)

    return (
        <form onSubmit={(e) => signInWithEmailPassword(e)} onChange={(e) => onChange(e.target)} className="column padding-top-20">
            <Input input={email}/>
            <Input input={username}/>
            <Input input={password}/>
            <Input input={passwordRepeat}/>
            <button className="solid-btn margin-top-20" style={{
                backgroundColor: "var(--indigo)",
                borderRadius: "200px"
            }}>
                <p>Sign in</p>
            </button>
        </form>
    )
}

export default Form