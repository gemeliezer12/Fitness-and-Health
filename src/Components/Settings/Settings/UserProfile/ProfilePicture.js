const ProfilePicture = () => {
    return (
        <div style={{
            alignSelf: "end",
        }}>
            <div className="align-center justify-center pos-relative" style={{
                width: "80px",
                height: "80px",
                
                backgroundColor: "var(--bg-color-1)",
                borderRadius: "50%",
            }}>
                <div className="pos-relative">
                    <div className="img-72 img">
                        <img src="../../images/profile.png" alt="" />
                    </div>
                    <div style={{
                        backgroundColor: "var(--text-color-2)",
                        padding: "2px",
                        position: "absolute",
                        right: "0",
                        top: "0",
                        borderRadius: "50%"
                    }}>
                        <div className="badge-20">
                            <i class="fas fa-images" style={{
                                color: "var(--text-comp-color-1)"
                            }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePicture
