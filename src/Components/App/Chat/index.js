import { useEffect, useState } from "react"

import { firebase } from "../../../firebase"
import { useUser } from "../../Contexts/UserContext"
import Sidebar from "./Sidebar/"
import Main from "./Main/"
const db = firebase.firestore()

const Index = () => {
    const { selfUser } = useUser()
    
    if (!selfUser) return ""

    return (
        <>
            <Sidebar/>
            <Main/>
        </>
    )
}

export default Index
