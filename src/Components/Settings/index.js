import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../Contexts/UserContext"
import SettingHeader from "./SettingHeader"

import Options from "./Options"

import MyAccount from "./Settings/MyAccount/"
import UserProfile from "./Settings/UserProfile/"
import Appearance from "./Settings/Appearance"

const Index = () => {
    const [currentSetting, setCurrentSetting] = useState("")
    const { selfUser } = useUser()
    const [windowSize, setWindowSize] = useState()
    const navigate = useNavigate()

    const CurrentSetting = () => {
        switch (currentSetting) {
            case "my-account":
                return (
                    <>
                        <SettingHeader settingTitle="My Account" setCurrentSetting={setCurrentSetting}/>
                        <MyAccount setCurrentSetting={setCurrentSetting}/>
                    </>
                )
                break
            case "user-profile":
                return( 
                    <>
                        <SettingHeader settingTitle="User Profile" setCurrentSetting={setCurrentSetting}/>
                        <UserProfile setCurrentSetting={setCurrentSetting}/>
                    </>
                )
                break
            case "appearance":
                return (
                    <>
                        <SettingHeader settingTitle="My Account" setCurrentSetting={setCurrentSetting}/>
                        <Appearance setCurrentSetting={setCurrentSetting}/>
                    </>
                )
            default:
                return ""
        }
    }

    useEffect(() => {
        window.innerWidth > 599 && setCurrentSetting("my-account")
    }, [])

    useEffect(() => {
        const handleSize = () => {
            setWindowSize({width: window.innerWidth, window: window.innerHeight})
        }        

        window.addEventListener("resize", handleSize)
        
        return () => {
            window.removeEventListener("resize", handleSize)
        }
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
                    {currentSetting ? <CurrentSetting/> : <SettingHeader settingTitle="Settings"/>}
                </div> 
            </div>
        </div>
    )
}

export default Index
