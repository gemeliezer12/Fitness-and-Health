import { createContext, useContext, useEffect, useState } from "react"

import { firebase } from "../../firebase"

const SearchContext  = createContext()
const db = firebase.firestore()

export const useSearch = () => useContext(SearchContext)

export const SearchProvider = ({children}) => {
    const [search, setSearch] = useState()

    const value = {
        search,
        setSearch
    }

    useEffect ( async () => {
        // console.log(
        //     await db.collection("users").where("username", "==", search).get()
        // )
    }, [search])

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}
