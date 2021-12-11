const MyAccount = () => {
    return (
        <>
            <div className="space-between align-center">
                <div>
                    <p className="ff-title fs-16">My Account</p>
                </div>
                <div className="img-32 icon color-inherit cursor-pointer" style={{
                    backgroundColor: "var(--bg-color-5)",
                    color: "var(--text-color-2)"
                }}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
            <div className="margin-y-20" style={{
                borderBottom: "1px solid var(--bg-color-5)"
            }}/>
        </>
    )
}

export default MyAccount
