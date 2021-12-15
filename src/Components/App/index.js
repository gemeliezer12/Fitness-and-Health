import Sidebar from "./Sidebar/"
import { useState, useEffect } from "react"

const Index = () => {
    
    

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100vw",
                height: "100vh"
            }}>
                <Sidebar/>
                <div style={{
                    width: "100%"
                }}>
                </div>
            </div>
        </>
    )
}

export default Index
