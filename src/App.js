import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"

import Landing from "./Components/Landing/"
import Nav from "./Components/Nav/"
import Signin from "./Components/Signin/"
import Signup from "./Components/Signup/"
import Account from "./Components/Account/"
import Profile from "./Components/Profile/"
import Footer from "./Components/Footer/"
import Settings from "./Components/Settings/"

import { UserProvider } from "./Components/Contexts/UserContext"

import "./styles/utility.css"
import "./styles/lib.css"
import "./styles/style.css"

function App() {
    
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={
                    <>
                        <Nav/>
                        <Landing/>
                        <Footer/>
                    </>
                }/>
                <Route path="/account" element={
                    <>
                        <Nav/>
                        <Landing/>
                        <Footer/>
                    </>
                }/>
                <Route path="/signin" element={
                    <>
                        <Nav/>
                        <Signin/>
                        <Footer/>
                    </>
                }/>
                <Route path="/signup" element={
                    <>
                        <Nav/>
                        <Signup/>
                        <Footer/>
                    </>
                }/>
                <Route path="/my-account" element={
                    <>
                        <Account/>
                        <Nav/>
                        <Footer/>
                    </>
                }/>
                <Route path="/profile/:userId" element={
                    <>
                        <Account/>
                        <Nav/>
                        <Footer/>
                    </>
                }/>
                <Route path="/settings" element={
                    <>
                        <Settings/>
                    </>
                }/>
            </Routes>
        </UserProvider>
    )
}

export default App;
