import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"
import { useUser } from "../../../Contexts/UserContext"
import AboutMe from "./AboutMe"
import { firebase } from "../../../../firebase"
import Banner from "./Banner"
import ProfilePicture from "./ProfilePicture"
import SettingHeader from "../../SettingHeader"

const db = firebase.firestore()

const onlySpaces = (str) => {
    return str.trim().length === 0;
}

const Index = ({setCurrentSetting, windowSize}) => {
    const { selfUser } = useUser()
    const navigate = useNavigate()
    const user = selfUser.user
    const id = selfUser.id

    const [ aboutMe, setAboutMe ] = useState({name: "aboutMe", label: "About Me", type: "textarea", value: "", isValid: true, isRequired: false})
    const [selectedFitnessLevel, setSelectedFitnessLevel] = useState()
    const fitnessLevels = [{label: "Beginner", name: "beginner"}, {label: "Intermidiate", name: "intermidiate"}, {label: "Advanced", name: "advanced"}]

    // Form State Handler
    const onChange = (e) => {
        switch (e.name) {
            case "aboutMe":
                setAboutMe({...aboutMe, value: e.value})
                break
            case "fitnessLevel":
                setSelectedFitnessLevel(e.value)
                break
        }
    }

    // Form submitter
    const onSubmit = async (e) => {
        const result = {
            ...user,
            about_me: aboutMe.value,
            fitness_level: !selectedFitnessLevel ? "" : selectedFitnessLevel
        }
        console.log(result);
        await db.collection("users").doc(id).set({
            ...result
        })
    }

    

    const reset = () => {
        setAboutMe({...aboutMe, value: !user.about_me ? "" : user.about_me})
        setSelectedFitnessLevel(user.fitness_level)
    }
    
    useEffect(() => {
        setAboutMe({...aboutMe, value: !user.about_me ? "" : user.about_me})
        setSelectedFitnessLevel(user.fitness_level)
    }, [selfUser])

    console.log(windowSize.width)

    if (windowSize.width >= 600) return (
        
        <>
        <SettingHeader settingTitle="User Profile" setCurrentSetting={setCurrentSetting}/>
        <form className="column border-radius-10" style={{
            backgroundColor: "var(--bg-color-1)",
            overflowX: "hidden"
        }} onChange={(e) => onChange(e.target)} onSubmit={(e) => {
            e.preventDefault()
            onSubmit(e)
        }}>
            <Banner/>
            <div className="padding-x-15 padding-bottom-15">
                <div className="row margin-top-10 gap-10" style={{
                    height: "40px",
                }}>
                    <ProfilePicture/>
                    <div className="space-between row width-100pc align-start">
                        <div/>
                        <div className="row gap-6">
                            <button className="solid-btn tiny" style={{
                                color: "var(--red)"
                            }} onClick={() => reset()}>
                                <p>Reset</p>
                            </button>
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
                <div className="row flex-wrap margin-top-20 gap-6 fs-14">
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
        </form>
    </>
    )
    else return (
        <>
        <div className="flex">
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
                <form className="column border-radius-10" style={{
                    backgroundColor: "var(--bg-color-1)",
                }} onChange={(e) => onChange(e.target)} onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit(e)
                }}>
                    <Banner/>
                    <div className="padding-x-15 padding-bottom-15">
                        <div className="row margin-top-10 gap-10" style={{
                            height: "40px",
                        }}>
                            <ProfilePicture/>
                            <div className="space-between row width-100pc align-start">
                                <div/>
                                <div className="row gap-6">
                                    <button className="solid-btn tiny" style={{
                                        color: "var(--red)"
                                    }} onClick={() => reset()}>
                                        <p>Reset</p>
                                    </button>
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
                        <div className="row flex-wrap margin-top-20 gap-6 fs-14">
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
                </form>
            </div>
        </div>
        </>
    )
}

export default Index