import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "./Items/Item";

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
            <div className="column gap-6">
                <Item item={{
                    icon: "fas fa-comment",
                    name: "chat"
                }}/>
                <Item item={{
                    icon: "fas fa-user",
                    name: "user"
                }}/>
                <Item item={{
                    icon: "fas fa-cog",
                    name: "settings"
                }}/>
            </div>
        </div>
    )
}

export default Index
