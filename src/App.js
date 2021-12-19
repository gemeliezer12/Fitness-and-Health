import { Route, Routes } from "react-router-dom"

import Landing from "./Components/Landing"
import Nav from "./Components/Nav"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
import Footer from "./Components/Footer"
import Settings from "./Components/Settings"
import App from "./Components/App"

import { UserProvider } from "./Components/Contexts/UserContext"
import { ThemeProvider } from "./Components/Contexts/ThemeContext"

import "./styles/utility.css"
import "./styles/lib.css"
import "./styles/style.css"
import { SearchProvider } from "./Components/Contexts/SearchContext"

const Main = () => {
    
    return (
        <UserProvider>
            <ThemeProvider>
                <SearchProvider>
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
                        <Route path="/settings" element={
                            <>
                                <Settings/>
                            </>
                        }/>
                    </Routes>
                    <App/>
                </SearchProvider>
            </ThemeProvider>
        </UserProvider>
    )
}

export default Main;
