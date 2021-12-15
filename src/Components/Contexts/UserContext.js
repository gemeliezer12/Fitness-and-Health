import { useState, useEffect, createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { firebase } from "../../firebase"

const db = firebase.firestore()
const auth = firebase.auth()

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    
    const [selfUser, setSelfUser] = useState()
    const selfUserAuth = auth.currentUser
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState()

    const getSelfUser = async (userId) => {
        db.collection("users").doc(userId).onSnapshot((user) => {
            setSelfUser({ user: user.data(), id: user.id})
        })
    }

    const signOut = () => {
        auth.signOut()
        navigate("/")
    }

    useEffect(() => {
        auth.onAuthStateChanged( async (user) => {
            if (user) {
                getSelfUser(user.uid)
            }
            else {
                setSelfUser(null)
            }
        })
    }, [])

    const value = {
        selfUser,
        signOut,
        selfUserAuth,
        auth,
        db,
        currentUser,
        setCurrentUser
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}