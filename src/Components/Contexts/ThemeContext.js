import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.body.classList = theme
    }, [theme])

    useEffect(() => {
        setTheme(
            localStorage.getItem("theme")
        )
    }, [])

    const value = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}