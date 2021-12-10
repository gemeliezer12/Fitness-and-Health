import Form from "./Form"

const index = () => {
    return (
        <div className="padding-top-80" style={{
            width: "100%",
        }}>
            <div className="padding-x-32" style={{
                width: "100%",
                maxWidth: "400px",
                margin: "auto"
            }}>
                <p className="ff-title fs-32">
                    Sign in
                </p>
                <p className="margin-top-20">
                    Access to 120+ hours of courses, tutorials and livestreams
                </p>
                <Form/>
                <div className="column gap-20 margin-top-20">
                    <p>Don't have an account? <a href="" style={{
                            color: "var(--blue)",
                            textDecoration: "underline"
                        }}>
                            Sign up
                        </a>
                    </p>
                    <p>Forgot your password? <a href="" style={{
                            color: "var(--blue)",
                            textDecoration: "underline"
                        }}>
                            Reset password
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default index
