import { useUser } from "../Contexts/UserContext"


const Options = ({ currentSettings, setCurrentSettings }) => {

    const { signOut } = useUser()

    return (
        <div className="column gap-2">
            <div className="space-between padding-all-4 fs-14">
                <p>User Settings</p>
            </div>
            <div className="column fs-16 gap-2">
                <div className={`Edv8pGdED0 ${currentSettings === "my-account" ? "selected" : ""}`} onClick={() => setCurrentSettings("my-account")}>
                    <p>My Account</p>
                </div>
                <div className={`Edv8pGdED0 ${currentSettings === "user-profile" ? "selected" : ""}`} onClick={() => setCurrentSettings("user-profile")}>
                    <p>User Profile</p>
                </div>
            </div>
            <div className="margin-y-6" style={{
                borderBottom: "1px solid var(--bg-color-4)"
            }}/>
            <div>
                <div className="Edv8pGdED0" onClick={() => signOut()}>
                    <p style={{
                        color: "var(--red)"
                    }}>Log out</p>
                </div>
            </div>
        </div>
    )
}

export default Options
