import { createContext, useContext, useEffect, useState } from "react"

const PopUpContext  = createContext()

export const usePopUp = () => useContext(PopUpContext)

export const PopUpProvider = ({children}) => {
    const [popUpIsActive, setPopUpIsActive] = useState()
    const [popUpContent, setPopUpContent] = useState()

    const value = {
        setPopUpContent
    }

    return (
        <PopUpContext.Provider value={value}>
            {children}
            {
                popUpContent &&
                <div style={{
                    position: 'absolute',
                    top: "0",
                    left: "0",
                    height: "100vh",
                    width: "100vw",
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute"
                    }} onClick={() => setPopUpContent()}>

                    </div>
                {popUpContent} 
                </div>
            }
        </PopUpContext.Provider>
    )
}