import { useState, useEffect, createContext, useContext } from "react"

const ScrollContext = createContext()

const useScroll = () => useContext(ScrollContext)

export const ScrollProvider = ({ children }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    
    value = {

    }

    return (
        <ScrollContext.Provider value={value}>
            {children}
        </ScrollContext.Provider>
    )
}