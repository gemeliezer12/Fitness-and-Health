const UserProfile = () => {
    return (
        <>
            <div className="space-between">
                <div>
                    <p className="ff-title fs-16">User Profile</p>
                </div>
                <div className="img-32 icon color-inherit cursor-pointer" style={{
                    backgroundColor: "var(--bg-color-5)",
                    color: "var(--text-color-2)"
                }}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
            <div className="column border-radius-10" style={{
                backgroundColor: "var(--bg-color-1)"
            }}>
                <div style={{
                    aspectRatio: "32/9",
                    backgroundColor: "var(--rose)",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                }}></div>
                <div className="padding-x-15">
                    <div>
                        <div className="space-between" style={{
                            height: "40px",
                        }}>
                            <div style={{
                                height: "80px",
                                width: "80px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "var(--bg-color-1)",
                                borderRadius: "50%",
                                overflow: "hidden",
                                alignSelf: "end"
                            }}>
                                <img src="images/logo.png" alt="" style={{
                                    widows: "72px",
                                    height: "72px"
                                }}/>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile