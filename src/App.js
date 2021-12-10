import { useState, useEffect } from "react"

import Landing from "./Components/Landing/"
import Nav from "./Components/Nav/"
import Login from "./Components/Login/"

import "./styles/utility.css"
import "./styles/lib.css"
import "./styles/style.css"
import { Route, Routes } from "react-router-dom"

function App() {

    

    
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <Nav/>
                        <Landing/>
                    </>
                }/>
                <Route path="/account" element={
                    <>
                        <Nav/>
                        <Landing/>
                    </>
                }/>
                <Route path="/login" element={
                    <>
                        <Nav/>
                        <Login/>
                    </>
                }/>
            </Routes>
        </>
    )
}

export default App;
