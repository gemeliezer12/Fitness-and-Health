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
            <div className={`color-inherit FO4mElxbi0${scrollPosition > 200 ? " hide" : ""}`}>
                <div className="row space-between align-center padding-x-32 HPNXA06qJ7" style={{
                    height: "100%"
                }}>
                    <Link to="/" className="img-40 icon" style={{
                        background: "var(--bg-color-5)"
                    }}>
                        <img className="icon" src="../../../images/logo.png" alt=""/>
                    </Link>
                    <div className="row uppercase fs-16 gap-10 xEbmIF5vqf">
                        <Link to="" className="solid-btn small sPF9B2SD15 first">
                            <p>Tutorials</p>
                        </Link>
                        <Link to="" className="solid-btn small sPF9B2SD15">
                            <p>Pricing</p>
                        </Link>
                        {selfUser ?
                        <Link to="/settings" className="solid-btn small sPF9B2SD15">
                            <p>Settings</p>
                        </Link>
                        :
                        <Link to="/signin" className="solid-btn small sPF9B2SD15">
                            <p>Register</p>
                        </Link>
                        }
                        <Link to="/signin" className="solid-btn small iGeeEa3h6v">
                            <p>Download</p>
                        </Link>
                        <div className="solid-btn sPF9B2SD15" style={{
                            padding: "10px"
                        }}>
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
