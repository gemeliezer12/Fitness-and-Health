import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useUser } from "../../../Contexts/UserContext"
import Form from "./Form"
import UsernameForm from "./UsernameForm"
import SettingHeader from "../../SettingHeader"

const Index = ({setCurrentSetting, windowSize}) => {

    const { selfUser } = useUser()
    const navigate = useNavigate()
    
    const [currentForm, setCurrentForm] = useState()

    if (!selfUser) return ""

    const user = selfUser.user
    const id = selfUser.id

    const CurrentForm = () => {
        console.log(currentForm);
        switch (currentForm) {
            case "usernameForm":
                return <UsernameForm setCurrentForm={setCurrentForm} windowSize={windowSize}/>
            default:
                return "" 
        }
    }


    
    if (windowSize.width >=600) return (
        <>
        <div className="column">
            <SettingHeader settingTitle="My Account" setCurrentSetting={setCurrentSetting}/>
                <div className="column border-radius-10" style={{
                    backgroundColor: "var(--bg-color-1)",
                    overflowX: "hidden"
                }}>
                    <div style={{
                        aspectRatio: "32/9",
                        backgroundColor: "rgb(80,20,71)",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                    }}></div>
                    <div className="padding-x-15 padding-bottom-15">
                        <div>
                            <div className="row margin-top-10 gap-10" style={{
                                height: "40px",
                            }}>
                                <div style={{
                                    alignSelf: "end",
                                }}>
                                    <div className="align-center flex justify-center" style={{
                                        width: "80px",
                                        height: "80px",
                                        backgroundColor: "var(--bg-color-1)",
                                        borderRadius: "50%",
                                    }}>
                                        <div className="img-72 img">
                                            <img src="../../images/profile.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-between row width-100pc gap-6" style={{
                                    overflowX: "hidden"
                                }}>
                                    <div className="fs-20" style={{
                                        overflowX: "hidden"
                                    }}>
                                        <p>
                                            <span style={{
                                                color: "var(--text-color-2)"
                                            }}>{user.username}</span>
                                            <span>#{user.user_number}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div className="solid-btn tiny" style={{
                                            background: "var(--indigo)",
                                            border: "none",
                                        }} onClick={() => setCurrentSetting("user-profile")}>
                                            <p>Edit Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Form user={user} id={id} setCurrentForm={setCurrentForm}/>
                        </div>
                    </div>
                </div>
            </div>
            {currentForm && 
            <>
                <div className="Y2cec8Lddp" style={{
                    position: 'absolute',
                    top: "0",
                    left: "0",
                    height: "100vh",
                    width: "100vw",
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <div className="XbQJna4BsT" onClick={() => setCurrentForm(null)} style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "var(--base-light-02)",
                        position: "absolute",
                        top: "0",
                        left: "0"
                    }}/>
                    <CurrentForm/>
                </div>
            </>
            }
        </>
    )
    return (
        <div className={`flex ${currentForm ? "J1Pq6FHKmT" : ""}`}>
            <div className="column" style={{
                width: "100vw",
                minWidth: "100vw"
            }}>
                <div className="row space-bewteen color-inherit padding-x-15" style={{
                    height: "60px",
                    minHeight: "60px",
                    color: "var(--text-color-2)",
                    backgroundColor: "var(--bg-color-2)"
                }}>
                    <div className="row align-center gap-15">
                        <div className="img-40 icon cursor-pointer" onClick={() => setCurrentSetting()}>
                            <i className="fas fa-arrow-left"></i>
                        </div>
                        <div className="column justify-center">
                            <p className="ff-title">
                                My Acoount
                            </p>
                            <p className="fs-14" style={{
                                color: "var(--text-color-1)"
                            }}>
                                User Settings
                            </p>
                        </div>
                    </div>
                </div>
                <div className="column border-radius-10" style={{
                    backgroundColor: "var(--bg-color-1)",
                    overflowX: "hidden",
                    width: "100%",
                    minWidth: "100%"
                }}>
                    <div style={{
                        aspectRatio: "32/9",
                        backgroundColor: "rgb(80,20,71)",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                    }}></div>
                    <div className="padding-x-15 padding-bottom-15">
                        <div>
                            <div className="row margin-top-10 gap-10" style={{
                                height: "40px",
                            }}>
                                <div style={{
                                    alignSelf: "end",
                                }}>
                                    <div className="align-center flex justify-center" style={{
                                        width: "80px",
                                        height: "80px",
                                        backgroundColor: "var(--bg-color-1)",
                                        borderRadius: "50%",
                                    }}>
                                        <div className="img-72 img">
                                            <img src="../../images/profile.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-between row width-100pc gap-6" style={{
                                    overflowX: "hidden"
                                }}>
                                    <div className="fs-20" style={{
                                        overflowX: "hidden"
                                    }}>
                                        <p>
                                            <span style={{
                                                color: "var(--text-color-2)"
                                            }}>{user.username}</span>
                                            <span>#{user.user_number}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div className="solid-btn tiny" style={{
                                            background: "var(--indigo)",
                                            border: "none",
                                        }} onClick={() => setCurrentSetting("user-profile")}>
                                            <p>Edit Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Form user={user} id={id} setCurrentForm={setCurrentForm}/>
                        </div>
                    </div>
                </div>
            </div>
                {currentForm &&
            <div className={`Y2cec8Lddp`} style={{
                height: "100vh",
                width: "100vw",
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                    <CurrentForm/>
            </div>
                }
        </div>
    )
}

export default Index
