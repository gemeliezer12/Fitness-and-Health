const Form = ({user, id, setCurrentForm}) => {
    return (
        <>
            <div className="column padding-all-15 border-radius-10 gap-15 margin-top-20" style={{
                backgroundColor: "var(--bg-color-4)"
            }}>
                <div className="space-between row align-center gap-6" style={{
                    overflowX: "hidden"
                }}>
                    <div style={{
                        overflowX: "hidden"
                    }}>
                        <p>Username</p>
                        <p>
                            <span style={{
                                color: "var(--text-color-2)"
                            }}>{user.username}</span>
                            <span>#{user.user_number}</span>
                        </p>
                    </div>
                    <div className="solid-btn tiny" style={{
                        backgroundColor: "var(--indigo)"
                    }} onClick={() => setCurrentForm("usernameForm")}>
                        <p>
                            Edit
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
