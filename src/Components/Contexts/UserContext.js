import { useState, useEffect, createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { firebase } from "../../firebase"

const db = firebase.firestore()

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    
    const [selfUser, setSelfUser] = useState()
    const navigate = useNavigate()

    const getUser = async (userId) => {
        const user = await db.collection("users").doc(userId).get()

        setSelfUser({ user: user.data(), id: user.id})
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged( async (user) => {
            if (user) {
                getUser(user.uid)
            }
        })
    }, [])

    const value = {
        selfUser
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}