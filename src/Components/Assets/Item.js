import { useState } from "react/cjs/react.development"

const Item = ({item}) => {
    const [isHovering, setisHovering] = useState(false)

    const Thumbnail = () => {
        switch (item.thumbnail.type) {
            case "img":
                return (
                    <img className="img" src="./images/logo.png" alt=""/>
                )
            case "icon":
                return (
                    <div className="img" style={{
                        backgroundColor: "var(--bg-color-2)"
                    }}>
                        <i className="fas fa-plus c-green fs-20"></i>
                    </div>
                )
                break
        }
    }

    return (
        <div className={`sidebar-item align-center justify-center pos-relative ${isHovering ? "hovering" : ""}`}>
            <div style={{
                left: "0%",
                width: "4px",
                height: "8px",
                backgroundColor: "var(--text-color-2)",
                position: "absolute",
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px"
            }}>

            </div>
            <div className="pos-relative cursor-pointer " onMouseOver={() => setisHovering(true)} onMouseLeave={() => setisHovering(false)}>
                <div className="img-50 ei9c3bga4m" style={{
                    borderRadius: "50%",
                }}>
                    <Thumbnail/>
                </div>
                <div className="badge-container" style={{
                    backgroundColor: "var(--bg-color-5)",
                    position: "absolute",
                    right: "0",
                    bottom: "0",
                    marginRight: "-2px",
                    marginBottom: "-2px",
                }}>
                    <p className="badge-20 bg-green">
                        1
                    </p>
                </div>
            </div>
            <div className="triangle-label margin-left-10 z-1 align-center" style={{
                    left: "100%",
                    position: "absolute",
                    // transform: "scale(0)",
                    transitionDuration: "0.1s"
                }}>
                <div>
                    <p>{item.label}</p>
                    </div>
                <div className="triangle" style={{
                    left: "0%",
                    transform: "translateX(-50%)"
                }}>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
