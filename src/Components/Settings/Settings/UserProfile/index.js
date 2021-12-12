import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"
import { useUser } from "../../../Contexts/UserContext"
import AboutMe from "./AboutMe"
import { firebase } from "../../../../firebase"

const db = firebase.firestore()

const onlySpaces = (str) => {
    return str.trim().length === 0;
}

const Index = (setCurrentSettings) => {
    const { selfUser } = useUser()
    const navigate = useNavigate()
    const user = selfUser.user
    const id = selfUser.id

    const [ aboutMe, setAboutMe ] = useState({name: "aboutMe", label: "About Me", type: "text", value: "", isValid: true, isRequired: true})
    const [selectedFitnessLevel, setSelectedFitnessLevel] = useState()
    const fitnessLevels = [{label: "Beginner", name: "beginner"}, {label: "Intermidiate", name: "intermidiate"}, {label: "Advanced", name: "advanced"}]

    // Form State Handler
    const onChange = (e) => {
        switch (e.name) {
            case "aboutMe":
                setAboutMe({...aboutMe, value: e.value})
            case "fitnessLevel":
                setSelectedFitnessLevel(e.value)
        }
    }

    // Form submitter
    const onSubmit = async (e) => {
        await db.collection("users").doc(id).set({
            ...user,
            about_me: aboutMe.value,
            fitness_level: selectedFitnessLevel
        })
    }
    
    useEffect(() => {
        setAboutMe({...aboutMe, value: user.about_me})
        setSelectedFitnessLevel(user.fitness_level)
    }, [selfUser])

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
            }} onChange={(e) => onChange(e.target)} onSubmit={(e) => {
                e.preventDefault()
                onSubmit(e)
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
                                    <button type="submit" className="solid-btn tiny" style={{
                                        backgroundColor: "var(--green)"
                                    }}>
                                        <p>Save</p>
                                    </button>
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
                            <select className="kvcdz3lpy3 cursor-pointer" name="fitnessLevel" style={{
                                backgroundColor: "var(--indigo)"
                            }}>
                                <option>Fitness level</option>
                                {fitnessLevels.map((fitnessLevel) => (
                                    <option key={fitnessLevel.name} selected={selectedFitnessLevel === fitnessLevel.name ? true : false} value={fitnessLevel.name}>{fitnessLevel.label}</option>
                                ))}
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