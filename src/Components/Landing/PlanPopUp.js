import { useState } from "react"
import { useEffect } from "react"
import Input from "../Assets/Input"

import { firebase } from "../../firebase"
import { usePopUp } from "../Contexts/PopUpContext"
import { useAuth } from "../Contexts/AuthContext"

const auth = firebase.auth()

const PlanPopUp = () => {
    const { setPopUpContent } = usePopUp()
    const { isLoggedIn } = useAuth()

    const [email, setEmail] = useState({name: "email", label: "Email", type: "email", value: "", isValid: false, isRequired: true})
    const [cardNumber, setCardNumber] = useState({name: "cardNumber", label: "Card Number", type: "text", value: "", isValid: false, isRequired: true})
    const [expirationDate, setExpirationDate] = useState({name: "expirationDate", label: "MM / YY", type: "text", value: "", isValid: false, isRequired: true})
    const [CVC, setCVC] = useState({name: "CVC", label: "CVC", type: "number", value: "", isValid: false, isRequired: true})

    // const formatNumberToMMYY = (number) => {
    //     if (number.length > 7) {
                    
    //     }
    //     else {
    //         if (number.slice(0, 2) > 12) {
    //             if (number[0] == 1) {
    //                 return "0" + number.slice(0, 1) + " / " + number.slice(2, 4)
    //             }
    //         }
    //         else {
    //             if(number.length >= 3) {
    //                 return number.slice(0, 2) + " / " + number.slice(5, 7)
                    
    //             }
    //             else if (number[0] == 1 || number[0] == 0) {
    //                 return number
    //             }
    //             else if (number[0] >= 2) {
    //                 return "0" + number
    //             }
    //             else if (!number[0]){
    //                 return number
    //             }
    //         }
    //     }
    // }

    const formHander = (e) => {
        switch (e.name) {
            case "expirationDate":
                e.value.length <= 4 && setExpirationDate({...expirationDate, value: e.value})
                break
        }
    }

    useEffect(() => {
        console.log(isLoggedIn) && setEmail({...email, value: auth.currentUser.email})
    }, [auth])

    useEffect(() => {
        console.log(isLoggedIn)
    }, [isLoggedIn])


    return (
        <div className="pos-relative dark color-inherit" style={{
            maxWidth: "600px",
            width: "100%",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            zIndex: "1",
            backgroundColor: "var(--indigo)",
            maxHeight: "100%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            color: "white"
        }}>
            <div className="img-32 icon cursor-pointer" style={{
                backgroundColor: "var(--bg-color-2)",
                position: "absolute",
                top: "0",
                right: "0",
                marginRight: "8px",
                marginTop: "8px"
            }} onClick={() => setPopUpContent()}>
                <i className="fas fa-times"></i>
            </div>
            <div className="column" style={{
                width: "100%",
                height: "100%",
                overflow: "auto",
                padding: "32px",
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
                <form className="column gap-10 margin-top-20" onChange={(e) => {
                    formHander(e.target)
                }}>
                    <input className="padding-x-25 padding-y-10 color-inherit fw-900 ff-ui space-between border-radius-200 row" style={{
                        backgroundColor: "var(--bg-comp-color-2)",
                        color: "var(--text-comp-color-2)",
                    }} value={email.value}/>
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
                            <input type="email" name="expirationDate" placeholder="MM / YY" style={{
                                width: "100%",
                            }} value={
                                expirationDate.value
                            }/>
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
                <p className="fs-10 margin-top-20 fw-700">You will be immediately charged $19 for a one month access. Your plan will automatically renew unless cancelled before the renewal date. You are also agreeing to our Terms of Service and our Privacy Policy.</p>
            </div>
        </div>
    )
}

export default PlanPopUp
