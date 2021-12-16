import { Link } from "react-router-dom"
import { useState } from "react"

const Item = ({item}) => {
    const [isHovering, setIsHovering] = useState()

    return (
        <Link to={`${item.link}`} className={`row JSfQXwCUGp${window.location.pathname.split("/")[2] === item.name || isHovering ? " hovering" : ""}`} onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div style={{
                width: "70px",
                display: "flex",
                justifyContent: "center",
                minWidth: "70px",
            }}>
                <div className="img-50 icon" style={{
                    backgroundColor: "var(--bg-color-3)"
                }}>
                    <i className={item.icon} style={{
                        color: "var(--green)"
                    }}></i>
                </div>
            </div>
            <div className="flex space-between align-center" style={{
                width: "230px"
            }}>
                <p className="ff-title">Chats</p>
            </div>
        </Link>
    )
}

export default Item
