const UsernameForm = () => {
    return (
        <div className="align-center justify-center" style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "rgba(0, 0, 0, 0.2)"
        }}>
            <div className="column padding-all-15" style={{
                backgroundColor: "var(--bg-color-2)",
                borderRadius: "10px"
            }}>
                <div className="text-center ff-title color-inherit fs-20">
                    <p>Chanhe your Username</p>
                </div>
                <div className="text-center">
                    <p>Enter your ne username and your existing password</p>
                </div>
                <div className="cNoBDHSUSz padding-x-10 padding-y-6 border-radius-10" style={{
                    backgroundColor: "var(--bg-color-5)",
                }}>
                    <div className="label-container">
                        <label className="label" htmlFor="">username</label>
                    </div>
                    <div className="column">
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsernameForm
