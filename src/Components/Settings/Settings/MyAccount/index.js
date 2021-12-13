import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useUser } from "../../../Contexts/UserContext"
import Form from "./Form"
import UsernameForm from "./UsernameForm"

const Index = ({setCurrentSetting}) => {

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
                return <UsernameForm setCurrentForm={setCurrentForm}/>
            default:
                return "" 
        }
    }

    return (
        <>
            <div className="space-between row align-start" style={{
                height: "40px"
            }}>
                <div className="row gap-6 align-center">
                    <div onClick={() => setCurrentSetting("")} className="img-32 icon color-inherit cursor-pointer" style={{
                        color: "var(--text-color-2)"
                    }}>
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <p className="ff-title fs-16">My Account</p>
                </div>
                <div onClick={() => navigate(-1)} className="img-32 icon color-inherit cursor-pointer" style={{
                    backgroundColor: "var(--bg-color-5)",
                    color: "var(--text-color-2)"
                }}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
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
                                        textTransform: "revert"
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
            {currentForm && 
            <>
                {/* Backdrop */}
                <div className="Y2cec8Lddp">
                    <div className="XbQJna4BsT" onClick={() => setCurrentForm(null)}/>
                    <CurrentForm/>
                </div>
            </>
            }
        </>
    )
}

export default Index
