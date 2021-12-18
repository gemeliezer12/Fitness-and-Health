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
    const navigate = useNavigate()
    const [windowSize, setWindowSize] = useState()

    const CurrentSetting = () => {
        switch (currentSetting) {
            case "my-account":
                return (
                    <MyAccount setCurrentSetting={setCurrentSetting}/>
                )
                break
            case "user-profile":
                return( 
                    <UserProfile setCurrentSetting={setCurrentSetting}/>
                )
                break
            case "appearance":
                return (
                    <Appearance setCurrentSetting={setCurrentSetting}/>
                )
            default:
                return ""
        }
    }

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }, [])

    selfUser === null && navigate("/")

    if (!windowSize) return ""

    if (windowSize.width >= 600) return (
        <div style={{
            overflow: "hidden",
            width: "100vw",
            height: "100vh"
        }}>
            <div style={{
                display: "flex",
                height: "100%"
            }}>
                <div className="column" style={{
                    width: "300px",
                    minWidth: "300px",
                }}>
                    <div className="padding-x-10 padding-top-40 VF7wvnxFpr" style={{
                        width: "285px",
                        minWidth: "285px",
                        overflowY: "auto",
                        alignSelf: "end"
                    }}>
                        <Options currentSetting={currentSetting} setCurrentSetting={setCurrentSetting}/>
                    </div>
                </div>
                <div className="padding-top-40 padding-x-32" style={{
                    backgroundColor: "var(--bg-color-3)",
                    overflowY: "auto",
                    width: "100%"
                }}>
                    {currentSetting ? <CurrentSetting/> : <SettingHeader settingTitle="Settings"/>}
                </div> 
            </div>
        </div>
    )

    else return (
        <div style={{
            overflow: "hidden",
            width: "100vw",
            height: "100vh"
        }}>
            <div className={`${currentSetting ? "J1Pq6FHKmT" : ""}`} style={{
                display: "flex",
                height: "100%",
            }}>
                <div className="column" style={{
                    width: "100vw",
                    minWidth: "100vw",
                }}>
                    {/* <div className="VF7wvnxFpr" style={{
                        width: "100%",
                        minWidth: "100%",
                        overflowY: "auto",
                    }}> */}
                        <div className="row space-between" style={{
                            height: "50px",
                            minHeight: "60px",
                            background: "var(--bg-color-2)"
                        }}>
                            <div className="row gap-15 padding-x-15 align-center">
                                <p className="ff-title fs-20">
                                    Settings
                                </p>
                            </div>
                        </div>
                        <Options currentSetting={currentSetting} setCurrentSetting={setCurrentSetting}/>
                    {/* </div> */}
                </div>
                <div className="flex" style={{
                    backgroundColor: "var(--bg-color-3)",
                    overflowY: "auto",
                    width: "100vw",
                    minWidth: "100vw",
                    overflowX: "hidden"
                }}>
                    {currentSetting ? <CurrentSetting/> : <SettingHeader settingTitle="Settings"/>}
                </div> 
            </div>
        </div>
    )

    // return (
    //     <div style={{
    //         overflow: "hidden",
    //         width: "100vw",
    //         height: "100vh"
    //     }}>
    //         <div style={{
    //             display: "flex",
    //             height: "100%"
    //         }}>
    //             <div className="column" style={{
    //                 width: "300px",
    //                 minWidth: "300px",
    //             }}>
    //                 <div className="padding-x-10 padding-top-40 VF7wvnxFpr" style={{
    //                     width: "285px",
    //                     minWidth: "285px",
    //                     overflowY: "auto",
    //                     alignSelf: "end"
    //                 }}>
    //                     <Options currentSetting={currentSetting} setCurrentSetting={setCurrentSetting}/>
    //                 </div>
    //             </div>
    //             <div className="padding-top-40 padding-x-32" style={{
    //                 backgroundColor: "var(--bg-color-3)",
    //                 overflowY: "auto",
    //                 width: "100%"
    //             }}>
    //                 {currentSetting ? <CurrentSetting/> : <SettingHeader settingTitle="Settings"/>}
    //             </div> 
    //         </div>
    //     </div>
    // )
}

export default Index
