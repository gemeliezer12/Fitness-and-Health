import { firebase } from "../../firebase"


const Options = ({ currentSettings, setCurrentSettings }) => {
    return (
        <div className="column padding-x-10 padding-top-40" style={{
            width: "215px",
            justifySelf: "end"
        }}>
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
                <div>
                    <div className={`Edv8pGdED0 ${currentSettings === "user-profile" ? "selected" : ""}`} onClick={() => firebase.auth().signOut()}>
                        <p style={{
                            color: "var(--red)"
                        }}>Log out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options
