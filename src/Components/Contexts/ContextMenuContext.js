import { createContext, useContext, useEffect, useState } from "react"

const ContextMenuContext  = createContext()

export const useContextMenu = () => useContext(ContextMenuContext)

export const ContextMenuProvider = ({children}) => {
    const [contextMenuIsActive, setContextMenuIsActive] = useState()
    const [contextMenuContent, setContextMenuContent] = useState()

    const contextMenuPosition = () => {
        const e = contextMenuContent.e
        console.log(
            window.innerHeight,
            window.innerWidth
        )
        return (
            <div id="context-menu" style={{
                top: e.clientY + "px",
                left: e.clientX + "px",
                position: "fixed",
                transition: "none"
            }}>
                {contextMenuContent.component}
            </div>
        )
    }

    useEffect(() => {
        contextMenuContent && contextMenuPosition()
    }, [contextMenuContent])

    const value = {
        setContextMenuContent
    }

    return (
        <ContextMenuContext.Provider value={value}>
            {children}
            {contextMenuContent && contextMenuPosition()}
        </ContextMenuContext.Provider>
    )
}