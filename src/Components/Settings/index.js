import { useState } from "react"

import Options from "./Options"

import MyAccount from "./Settings/MyAccount/"
import UserProfile from "./Settings/UserProfile/"

const Index = () => {
    const [currentSettings, setCurrentSettings] = useState("my-account")

    const CurrentSettings = () => {
        switch (currentSettings) {
            case "my-account":
                return <MyAccount setCurrentSettings={setCurrentSettings}/>
                break
            case "user-profile":
                return <UserProfile setCurrentSettings={setCurrentSettings}/>
                break
            default:
                break
        }
    }

    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            maxWidth: "1200px",
            display: "grid",
            gridTemplateColumns: "230px 1fr",
            margin: "auto"
        }}>
            <div className="column padding-x-10 padding-top-40" style={{
                width: "215px",
                justifySelf: "end",
                overflowY: "auto"
            }}>
                <Options currentSettings={currentSettings} setCurrentSettings={setCurrentSettings}/>
            </div>
            <div className="padding-top-40 padding-x-32" style={{
                backgroundColor: "var(--bg-color-3)",
                overflowY: "auto",
            }}>
                <CurrentSettings/>
            </div> 
        </div>
    )
}

export default Index
