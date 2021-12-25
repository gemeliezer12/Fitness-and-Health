import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import Input from "../Assets/Input"

const PlanPopUp = () => {
    const [email, setEmail] = useState({name: "email", label: "Email", type: "email", value: "", isValid: false, isRequired: true})
    const [cardNumber, setCardNumber] = useState({name: "cardNumber", label: "Card Number", type: "text", value: "", isValid: false, isRequired: true})
    const [expirationDate, setExpirationDate] = useState({name: "expirationDate", label: "Expiration Date", type: "text", value: "", isValid: false, isRequired: true})

    return (
        <div className="column dark color-inherit" style={{
            maxWidth: "600px",
            width: "100%",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            zIndex: "1",
            backgroundColor: "var(--indigo)",
            maxHeight: "100%",
            overflow: "auto",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            padding: "32px",
            color: "white"
        }}>
            <div className="column align-center">
                <p className="uppercase">
                    Basic
                </p>
                <p className="fs-80 margin-top-10">
                    $9
                </p>
                <p>
                    per month, billed monthly
                </p>
            </div>
            <form className="column gap-10 margin-top-20">
                <input className="padding-x-25 padding-y-10 color-inherit fw-900 ff-ui space-between border-radius-200 row" style={{
                    backgroundColor: "var(--bg-comp-color-2)",
                    color: "var(--text-comp-color-2)",
                }} value="gemeliezerespiritu@gmail.com"/>
                <div className="padding-x-25 padding-y-10 color-inherit fw-900 ff-ui border-radius-200 row" style={{
                    backgroundColor: "var(--bg-comp-color-2)",
                    color: "var(--text-comp-color-2)",
                }}>
                    <input placeholder="Card Number" style={{
                        width: "50%",
                        justifySelf: "start"
                    }}/>
                    <div className="row gap-6" style={{
                        whiteSpace: "nowrap",
                        width: "50%",
                        justifySelf: "end"
                    }}>
                        <input placeholder="MM / YY" style={{
                            width: "100%",
                        }}/>
                        <input placeholder="CVC" style={{
                            width: "100%",
                        }}/>
                    </div>
                </div>
                <div className="padding-x-25 padding-y-10 color-inherit fw-900 ff-ui justify-center border-radius-200 row" style={{
                    backgroundColor: "var(--bg-color-2)",
                    color: "white"
                }}>
                    Subscribe Now
                </div>
            </form>
        </div>
    )
}

export default PlanPopUp
