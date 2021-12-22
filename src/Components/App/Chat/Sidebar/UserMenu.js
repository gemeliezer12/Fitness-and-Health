const UserMenu = ({setPopUpContent, setContextMenuContent}) => {
    return (
        <div className="column fs-14 V62QhtBy6v border-radius-6" style={{
            width: "200px",
            maxWidth: "50vw",
            backgroundColor: "var(--bg-color-1)",
            borderRadius: "6px"
        }}>
            <div className="column gap-2">
                <div className="nkDuujtBoP desktop" onClick={() => {
                        setPopUpContent(
                            <div className="column" style={{
                                backgroundColor: "var(--indigo)",
                                padding: "15px",
                                zIndex: "100"
                            }}>
                                <div style={{
                                    width: "100%",
                                    aspectRatio: "3/1"
                                }}>

                                </div>
                                <div className="img-32 img">
                                    <img src="/images/profile.png" alt="" />
                                </div>
                            </div>
                        )
                        setContextMenuContent()
                    }}>
                    <p>Profile</p>
                </div>
            </div>
        </div>
    )
}

export default UserMenu
