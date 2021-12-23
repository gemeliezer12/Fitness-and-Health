const UserPopUp = ({user}) => {
    return (
        <div className="column" style={{
            zIndex: "100%",
            maxWidth: "600px",
            width: "100%",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            zIndex: "1",
            backgroundColor: "var(--bg-color-1)",
            maxHeight: "100%",
            overflow: "auto",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px"
        }}>
            <div style={{
                width: "100%",
                paddingTop: "25%",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                position: "relative",
                zIndex: "-1"
            }}>
                <div style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    overflow: "hidden",
                    backgroundColor: "rgb(80,20,71)"
                }}>
                </div>
            </div>
            <div className="column padding-x-15 padding-bottom-15" style={{
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
               
            }}>
                <div className="row" style={{
                    height: "80px",
                }}>
                    <div className="align-self-end">
                        <div className="" style={{
                            padding: "6px",
                            backgroundColor: "var(--bg-color-1)",
                            borderRadius: "50%",
                        }}>
                            <div className="img-120 img">
                                <img src="../../images/profile.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row space-between padding-top-10 width-100pc align-start">
                        <div/>
                        <div className="row gap-6 align-center">
                            <div className="solid-btn tiny fs-16" style={{
                                backgroundColor: "var(--green)",
                            }}>
                                <p className="tt-initial">Send Friend Request</p>
                            </div>
                            <div className="img-40 icon">
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row space-between margin-top-20">
                    <p className="fs-20">
                        <span style={{
                            color: "white"
                        }}>
                            {user.user.username}
                        </span>
                        <span>
                            #{user.user.user_number}
                        </span>
                    </p>
                </div>
                <div className="row" style={{
                    borderBottom: "1px solid var(--base-01)"
                }}>
                    <div className="padding-y-15">
                        About Me
                    </div>
                </div>
                <div className="margin-top-10">
                    <div className="">
                        {user.user.about_me}
                    </div>
                    <div className="row gap-6 flex-wrap margin-top-15 padding-bottom-40">
                        <p className="kvcdz3lpy3 fs-14" style={{
                            backgroundColor: "var(--indigo)",
                        }}>
                            Begginer
                        </p>
                        <p className="kvcdz3lpy3 fs-14" style={{
                            backgroundColor: "var(--indigo)",
                        }}>
                            Begginer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPopUp
