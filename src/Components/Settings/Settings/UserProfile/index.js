import { useState } from "react"

import { useNavigate } from "react-router-dom"
import { useUser } from "../../../Contexts/UserContext"
import TextareaAutosizeProps from "react-textarea-autosize"
import AboutMe from "./AboutMe"

const Index = (setCurrentSettings) => {
    const { selfUser } = useUser()
    const navigate = useNavigate()
    const user = selfUser.user
    const id = selfUser.id

    const [ aboutMe, setAboutMe ] = useState({name: "aboutMe", label: "About Me", type: "text", value: "", isValid: true, isRequired: true})

    const onChange = (e) => {

        switch (e.name) {
            case "aboutMe":
                setAboutMe({...aboutMe, value: e.value})
        }
    }

    return (
        <>
            <div className="space-between" style={{
                height: "40px"
            }}>
                <div>
                    <p className="ff-title fs-16">My Account</p>
                </div>
                <div onClick={() => navigate(-1)} className="img-32 icon color-inherit cursor-pointer" style={{
                    backgroundColor: "var(--bg-color-5)",
                    color: "var(--text-color-2)"
                }}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
            <form className="column border-radius-10" style={{
                backgroundColor: "var(--bg-color-1)"
            }} onChange={(e) => onChange(e.target)}>
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
                                <div className="align-center justify-center" style={{
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
                            <div className="space-between width-100pc">
                                <div/>
                                <div>
                                    <div className="solid-btn tiny" style={{
                                        backgroundColor: "var(--green)"
                                    }}>
                                        <p>Save</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fs-20 margin-top-20">
                            <p>
                                <span style={{
                                    color: "var(--text-color-2)"
                                }}>{user.username}</span>
                                <span>#{user.user_number}</span>
                            </p>
                        </div>
                        <div className="margin-y-10" style={{
                            borderBottom: "1px solid var(--bg-color-5)"
                        }}/>
                        <AboutMe aboutMe={aboutMe}/>
                        <div className="row flex-wrap margin-top-20 gap-6">
                            <select className="kvcdz3lpy3 cursor-pointer" name="fitness-level" style={{
                                backgroundColor: "var(--indigo)"
                            }}>
                                <option value="select">Fitness level</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                            <div className="kvcdz3lpy3 pos-relative" style={{
                                backgroundColor: "var(--green)"
                            }}>
                                <p>
                                    Trainer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Index