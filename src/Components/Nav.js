import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <>
            <div className="color-inherit dark" style={{
                width: "100%",
                height: "70px",
                position: "sticky",
                background: "var(--violet)",
                color: "var(--text-color-2)"
            }}>
                <div className="row space-between align-center padding-x-32" style={{
                    maxWidth: "1200px",
                    width: "100%",
                    margin: "auto",
                    height: "100%"
                }}>
                    <div className="img-40">
                        <div className="img" style={{
                            background: "var(--bg-color-2)"
                        }}>
                            <img src="../../../images/logo.png" alt=""/>
                        </div>
                    </div>
                    <div className="row uppercase fs-16 gap-10">
                        <Link to="" className="solid-btn small sPF9B2SD15" style={{
                            borderWidth: "1px"
                        }}>
                            <p>Tutorials</p>
                        </Link>
                        <Link to="" className="solid-btn small sPF9B2SD15" style={{
                            borderWidth: "1px"
                        }}>
                            <p>Pricing</p>
                        </Link>
                        <Link to="" className="solid-btn small sPF9B2SD15" style={{
                            borderWidth: "1px"
                        }}>
                            <p>My Account</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
