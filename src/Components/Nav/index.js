import { useState, useEffect } from "react";

import { Link } from "react-router-dom"
import { useUser } from "../Contexts/UserContext";

const Index = () => {

    const { selfUser } = useUser()


    return (
        <>
            <div className={`dark color-inherit FO4mElxbi0`} style={{
                backgroundColor: "var(--indigo)",
                zIndex: "1",
                color: "white"
            }}>
                <div className="row space-between align-center padding-x-32 HPNXA06qJ7" style={{
                    height: "100%"
                }}>
                    <Link to="/" className="img-40 img" style={{
                        overflow: "visible"
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
                        <Link to="/signin" className="solid-btn small iGeeEa3h6v" style={{
                            borderRadius: "200px"
                        }}>
                            <p>Open Astra</p>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
