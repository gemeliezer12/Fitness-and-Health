import UserPopUp from "./UserPopUp"

const UserMenu = ({setPopUpContent, setContextMenuContent, user}) => {
    return (
        <div className="column fs-14 V62QhtBy6v border-radius-6" style={{
            width: "200px",
            maxWidth: "50vw",
            backgroundColor: "var(--bg-color-1)",
            borderRadius: "6px",
            position: "fixed"
        }}>
            <div className="column gap-2 fw-700">
                <div className="nkDuujtBoP desktop">
                    <p>Mark As Read</p>
                </div>
                <div className="margin-y-2" style={{
                    borderBottom: "1px solid var(--bg-color-4)"
                }}/>
                <div className="nkDuujtBoP desktop" onClick={() => {
                    setPopUpContent(
                        <UserPopUp user={user}/>
                    )
                    setContextMenuContent()
                }}>
                    <p>Profile</p>
                </div>
                <div className="nkDuujtBoP desktop">
                    <p>Add Friend</p>
                </div>
            </div>
        </div>
    )
}

export default UserMenu
