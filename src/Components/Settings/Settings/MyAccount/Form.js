const Form = ({user, id}) => {
    return (
        <div className="column padding-all-15 border-radius-10 gap-15 margin-top-20" style={{
            backgroundColor: "var(--bg-color-4)"
        }}>
            <div className="space-between align-center">
                <div>
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
                }}>
                    <p>
                        Edit
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Form
