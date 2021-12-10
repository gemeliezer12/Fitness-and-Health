import { useState, useEffect } from "react";

import { Link } from "react-router-dom"

const Nav = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
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
            <div className={`color-inherit dark FO4mElxbi0${scrollPosition > 150 ? " hide" : ""}`}>
                <div className="row space-between align-center padding-x-32" style={{
                    maxWidth: "1200px",
                    width: "100%",
                    margin: "auto",
                    height: "100%"
                }}>
                    <div className="img-40 cursor-pointer">
                        <div className="img" style={{
                            background: "var(--bg-color-2)"
                        }}>
                            <img src="../../../images/logo.png" alt=""/>
                        </div>
                    </div>
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
