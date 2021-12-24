import { createContext, useContext, useEffect, useState, useRef } from "react"

const ContextMenuContext  = createContext()

export const useContextMenu = () => useContext(ContextMenuContext)

function useOutsideAlerter(ref) {

    
  }

export const ContextMenuProvider = ({children}) => {
    const [contextMenuIsActive, setContextMenuIsActive] = useState()
    const [contextMenuContent, setContextMenuContent] = useState()
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef)
    const contextMenuPosition = () => {
        const e = contextMenuContent.e
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
      function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setContextMenuContent()
          console.log(wrapperRef)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [wrapperRef]);


    const value = {
        setContextMenuContent,
        contextMenuContent
    }

    return (
        <ContextMenuContext.Provider value={value}>
            {children}
            {contextMenuContent && <div ref={wrapperRef}>
            {contextMenuPosition()}
            </div>}
        </ContextMenuContext.Provider>
    )
}