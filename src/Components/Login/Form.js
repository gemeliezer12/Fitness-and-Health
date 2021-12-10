import { useState } from "react"
import Input from "../Assets/Input"

const Form = () => {
    const [email, setEmail] = useState({name: "email", label: "Email", type: "email", value: "", isValid: false, isRequired: true})
    const [password, setPassword] = useState({name: "password", label: "Password", type: "password", value: "", isValid: false, isRequired: true})

    const onChange = (e) => {
        switch (e.name) {
            case "email":
                setEmail({...email, value: e.value})
                break
            case "password":
                setPassword({...password, value: e.value})
                break
        }
    }

    return (
        <form onChange={(e) => onChange(e.target)} className="column padding-top-20">
            <Input input={email}/>
            <Input input={password}/>
            <div className="solid-btn margin-top-20" style={{
                backgroundColor: "var(--indigo)",
                borderRadius: "200px"
            }}>
                <p>Sign in</p>
            </div>
        </form>
    )
}

export default Form
