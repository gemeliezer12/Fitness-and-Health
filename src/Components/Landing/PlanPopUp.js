import { useRef, useState } from "react"
import { useEffect } from "react"
import Input from "../Assets/Input"
import CreditCardInput from 'react-credit-card-input'

import { firebase } from "../../firebase"
import { usePopUp } from "../Contexts/PopUpContext"
import { useAuth } from "../Contexts/AuthContext"

const auth = firebase.auth()

const PlanPopUp = () => {
    const { setPopUpContent } = usePopUp()
    const { isLoggedIn } = useAuth()
    const paypal = useRef()

    const [checkout, setCheckout] = useState()

    const [email, setEmail] = useState({name: "email", label: "Email", type: "email", value: "", isValid: false, isRequired: true})
    const [cardNumber, setCardNumber] = useState({name: "cardNumber", label: "Card Number", type: "text", value: "", isValid: false, isRequired: true})
    const [expirationDate, setExpirationDate] = useState({name: "expirationDate", label: "MM / YY", type: "text", value: "", isValid: false, isRequired: true})
    const [CVC, setCVC] = useState({name: "CVC", label: "CVC", type: "number", value: "", isValid: false, isRequired: true})

    const formHander = (e) => {
        switch (e.name) {
            case "expirationDate":
                e.value.length <= 4 && setExpirationDate({...expirationDate, value: e.value})
                break
            case "cardNumber":
                e.value.length <= 4 && setCardNumber({...cardNumber, value: e.value})
                break
            case "CVC":
                e.value.length <= 4 && setCVC({...CVC, value: e.value})
                break
        }
    }

    useEffect(() => {
        isLoggedIn && setEmail({...email, value: auth.currentUser.email})
    }, [auth])

    useEffect(() => {
        // window.paypal.Buttons({
        //     style: {
        //         shape: 'pill',
        //         color: 'gold',
        //         layout: 'vertical',
        //         label: 'subscribe'
        //     },
        //     createSubscription: function(data, actions) {
        //         return actions.subscription.create({
        //             /* Creates the subscription */
        //             plan_id: 'P-7V331020HX953714SMHER3YY',
        //             quantity: 1 // The quantity of the product for a subscription
        //         })
        //     },
        //     onApprove: function(data, actions) {
        //         alert(data.subscriptionID); // You can add optional success message for the subscriber here
        //     },
        // }).render(paypal.current)
        window.paypal.Buttons({

            createSubscription: function(data, actions) {
          
              return actions.subscription.create({
          
                'plan_id': 'sb-td1ms8958375@business.example.com'
          
              });
          
            },
          
          
            onApprove: function(data, actions) {
          
              alert('You have successfully created subscription ' + data.subscriptionID);
          
            }
          
          
          }).render(paypal.current)
    }, [])

    return (
        <div className="Sn0rrL9LV2 pos-relative dark color-inherit" style={{
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
            <div className="column full-size overflow-y-auto XMTWpXdomx" style={{
                backgroundColor: "var(--indigo)",
                padding: "32px",
            }}>
                <div className="column align-center">
                    <p className="uppercase">
                        Basic
                    </p>
                    <p className="fs-80 margin-top-10">
                        $5
                    </p>
                    <p>
                        per month, billed monthly
                    </p>
                </div>
                <form className="column gap-10 margin-top-20" onChange={(e) => {
                    formHander(e.target)
                }}>
                    {
                        isLoggedIn ?
                        <div className="padding-x-25 padding-y-10 color-inherit fw-900 ff-ui space-between border-radius-200 row" style={{
                            backgroundColor: "var(--bg-comp-color-2)",
                            color: "var(--text-comp-color-2)",
                        }}>
                            {email.value}
                        </div>
                        :
                        <input className="padding-x-25 padding-y-10 color-inherit fw-900 ff-ui space-between border-radius-200 row" style={{
                            backgroundColor: "var(--bg-comp-color-2)",
                            color: "var(--text-comp-color-2)",
                        }} value={email.value}/>
                    }
                    <div className="padding-x-25 padding-y-10 color-inherit fw-900 ff-ui border-radius-200 row" style={{
                        backgroundColor: "var(--bg-comp-color-2)",
                        color: "var(--text-comp-color-2)",
                    }}>
                        <input placeholder="Card Number" style={{
                            width: "100%",
                            justifySelf: "start"
                        }}/>
                            <input type="email" name="expirationDate" placeholder="MM / YY" style={{
                                width: "80px",
                            }} value={
                                expirationDate.value
                            }/>
                            <input placeholder="CVC" style={{
                                width: "80px",
                            }}/>
                    </div>
                    <div ref={paypal}>

                    </div>
                    {/* <div ref={paypal} className="padding-x-25 padding-y-10 color-inherit fw-900 ff-ui justify-center border-radius-200 row cursor-pointer" style={{
                        backgroundColor: "var(--bg-color-2)",
                        color: "white"
                    }} onClick={() => console.log("ASD")}>
                        Subscribe Now
                    </div> */}
                    {/* <div className="padding-x-25 padding-y-10 color-inherit fw-900 ff-ui justify-center border-radius-200 row cursor-pointer" style={{
                        backgroundColor: "var(--bg-color-2)",
                        color: "white"
                    }} onClick={() => console.log("ASD")}>
                        Subscribe Now
                    </div> */}
                </form>
                <p className="fs-10 margin-top-20 fw-700">You will be immediately charged $19 for a one month access. Your plan will automatically renew unless cancelled before the renewal date. You are also agreeing to our Terms of Service and our Privacy Policy.</p>
            </div>
        </div>
    )
}

export default PlanPopUp
