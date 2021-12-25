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
                    position: 'fixed',
                    top: "0",
                    left: "0",
                    height: "100%",
                    width: "100%",
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "var(--base-light-04)",
                    overflow: "hidden",
                    padding: "40px",
                    zIndex: "1"
                }}>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: -1
                    }} onClick={() => setPopUpContent()}>

                    </div>

                    {popUpContent}
                </div>
            }
        </PopUpContext.Provider>
    )
}