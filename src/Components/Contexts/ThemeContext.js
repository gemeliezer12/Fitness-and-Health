import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()

export const useUser = () => useContext(ThemeContext)

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        document.body.classList.add(theme)
    }, [theme])

    const value = {
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}