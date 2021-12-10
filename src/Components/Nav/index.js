import { useState, useEffect } from "react";

import { Link } from "react-router-dom"
import { useUser } from "../Contexts/UserContext";

const Index = () => {

    const [scrollPosition, setScrollPosition] = useState(0)
    const { selfUser } = useUser()

    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <>
            <div className={`color-inherit dark FO4mElxbi0${scrollPosition > 200 ? " hide" : ""}`}>
                <div className="row space-between align-center padding-x-32" style={{
                    maxWidth: "1200px",
                    width: "100%",
                    margin: "auto",
                    height: "100%"
                }}>
                    <Link to="/" className="img-40 cursor-pointer">
                        <div className="img" style={{
                            background: "var(--bg-color-2)"
                        }}>
                            <img src="../../../images/logo.png" alt=""/>
                        </div>
                    </Link>
                    <div className="row uppercase fs-16 gap-10">
                        <Link to="" className="solid-btn small sPF9B2SD15" style={{
                            borderWidth: "1px",
                        }}>
                            <p>Tutorials</p>
                        </Link>
                        <Link to="" className="solid-btn small sPF9B2SD15" style={{
                            borderWidth: "1px"
                        }}>
                            <p>Pricing</p>
                        </Link>
                        {selfUser ?
                        <Link to="/my-account" className="solid-btn small sPF9B2SD15" style={{
                            borderWidth: "1px"
                        }}>
                            <p>My Account</p>
                        </Link>
                        :
                        <Link to="/signin" className="solid-btn small sPF9B2SD15" style={{
                            borderWidth: "1px"
                        }}>
                            <p>Register</p>
                        </Link>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
