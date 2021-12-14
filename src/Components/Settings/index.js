import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../Contexts/UserContext"

import Options from "./Options"

import MyAccount from "./Settings/MyAccount/"
import UserProfile from "./Settings/UserProfile/"

const Index = () => {
    const [currentSetting, setCurrentSetting] = useState("")
    const { selfUser } = useUser()
    const navigate = useNavigate()

    const CurrentSetting = () => {
        switch (currentSetting) {
            case "my-account":
                return <MyAccount setCurrentSetting={setCurrentSetting}/>
                break
            case "user-profile":
                return <UserProfile setCurrentSetting={setCurrentSetting}/>
                break
            default:
                break
        }
    }

    useEffect(() => {
        window.innerWidth > 599 && setCurrentSetting("my-account")
    }, [])

    selfUser === null && navigate("/")

    return (
        <div style={{
            overflow: "hidden",
            width: "100vw",
            height: "100vh"
        }}>
            <div className={`zfURiv2hFW${currentSetting ? " jdpGeNx7Ai" : ""}`}>
                <div className="column padding-x-10 padding-top-40 VF7wvnxFpr" style={{
                    width: "215px",
                    justifySelf: "end",
                    overflowY: "auto"
                }}>
                    <Options currentSetting={currentSetting} setCurrentSetting={setCurrentSetting}/>
                </div>
                <div className="padding-top-40 padding-x-32" style={{
                    backgroundColor: "var(--bg-color-3)",
                    overflowY: "auto",
                }}>
                    {currentSetting && <CurrentSetting/>}
                </div> 
            </div>
        </div>
    )
}

export default Index
