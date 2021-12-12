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
                    backgroundColor: "rgb(80,20,71)",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                }}></div>
                <div className="padding-x-15 padding-bottom-15">
                    <div>
                        <div className="row margin-top-10 gap-10" style={{
                            height: "40px",
                        }}>
                            <div className="align-center justify-center" style={{
                                width: "80px",
                                height: "80px",
                                alignSelf: "end",
                                backgroundColor: "var(--bg-color-1)",
                                borderRadius: "50%",
                            }}>
                                <div className="img-72 img">
                                    <img src="../../images/profile.png" alt="" />
                                </div>
                            </div>
                            <div className="space-between">
                                <div>
                                    <p>
                                        <span>username</span>
                                    </p>
                                </div>
                                <div></div>
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