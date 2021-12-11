import { useState } from "react"

const Index = () => {
    const [currentSettings, setCurrentSettings] = useState("my-account")
    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            maxWidth: "1200px",
            display: "grid",
            gridTemplateColumns: "300px 1fr"
        }}>
            <div className="column padding-x-15 padding-top-40" style={{
                width: "215px",
                justifySelf: "end"
            }}>
                <div className="column gap-2">
                    <div className="space-between padding-all-4">
                        <p>My Account</p>
                    </div>
                    <div className="column fs-20 gap-2">
                        <div className={`Edv8pGdED0 ${currentSettings === "my-account" ? "selected" : ""}`} onClick={() => setCurrentSettings("my-account")}>
                            <p>My Account</p>
                        </div>
                        <div className={`Edv8pGdED0 ${currentSettings === "user-profile" ? "selected" : ""}`} onClick={() => setCurrentSettings("user-profile")}>
                            <p>User Profile</p>
                        </div>
                    </div>
                </div>   
            </div> 
            <div className="padding-top-40" style={{
                backgroundColor: "var(--bg-color-3)"
            }}>
                <div className="space-between">
                    
                </div>
            </div> 
        </div>
    )
}

export default Index
