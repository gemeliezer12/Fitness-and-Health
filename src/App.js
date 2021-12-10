import { useState, useEffect } from "react"

import Landing from "./Components/Landing/"
import Nav from "./Components/Nav/"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
import Account from "./Components/Account"
import { UserProvider } from "./Components/Contexts/UserContext"

import "./styles/utility.css"
import "./styles/lib.css"
import "./styles/style.css"

import { Route, Routes } from "react-router-dom"

function App() {
    
    return (
        <UserProvider>
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
                <Route path="/signin" element={
                    <>
                        <Nav/>
                        <Signin/>
                    </>
                }/>
                <Route path="/signup" element={
                    <>
                        <Nav/>
                        <Signup/>
                    </>
                }/>
                <Route path="/my-account" element={
                    <>
                        <Account/>
                        <Nav/>
                    </>
                }/>
            </Routes>
        </UserProvider>
    )
}

export default App;
