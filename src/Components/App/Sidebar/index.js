import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
    const [isOpen, setIsOpen] = useState()

    return (
        <div className={`kt3ZmTsWK1 column color-inherit gap-40${isOpen ? " open" : " close"}`} style={{
            backgroundColor: "var(--bg-color-1)",
            color: 'white'
        }}>
            <div className="column">
                <div className="row">
                    <div style={{
                        width: "70px",
                        display: "flex",
                        justifyContent: "center",
                        minWidth: "70px"
                    }}>
                        <div className="img-50 icon cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            <img src="../../../../images/logo.png" alt="" />
                        </div>
                    </div>
                    <div className="flex space-between align-center" style={{
                        width: "230px"
                    }}>
                        <p className="ff-title">Astra</p>
                    </div>
                </div>
            </div>
            <div className="column">
                <Link to="/app/chat" className={`row JSfQXwCUGp${window.location.pathname.split("/")[2] === "chat" ? " hovering" : ""}`}>
                    <div style={{
                        width: "70px",
                        display: "flex",
                        justifyContent: "center",
                        minWidth: "70px",
                    }}>
                        <div className="img-50 icon">
                            <i className="far fa-comment"></i>
                        </div>
                    </div>
                    <div className="flex space-between align-center" style={{
                        width: "230px"
                    }}>
                        <p className="ff-title">Chats</p>
                    </div>
                </Link>
                <div className="row JSfQXwCUGp">
                    <div style={{
                        width: "70px",
                        display: "flex",
                        justifyContent: "center",
                        minWidth: "70px",
                    }}>
                        <div className="img-50 icon">
                            <i className="far fa-user"></i>
                        </div>
                    </div>
                    <div className="flex space-between align-center" style={{
                        width: "230px"
                    }}>
                        <p className="ff-title">My Profile</p>
                    </div>
                </div>
                <Link to="/settings" className="row JSfQXwCUGp">
                    <div style={{
                        width: "70px",
                        display: "flex",
                        justifyContent: "center",
                        minWidth: "70px",
                    }}>
                        <div className="img-50 icon">
                            <i className="fas fa-cog"></i>
                        </div>
                    </div>
                    <div className="flex space-between align-center" style={{
                        width: "230px"
                    }}>
                        <p className="ff-title">Settings</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Index
