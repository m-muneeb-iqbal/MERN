import React from "react";

import Navbar from "./components/Navbar.jsx";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";

import { Loader } from "lucide-react";

export const App = () => {

    const { authUser, checkAuth, isCheckingAuth } = useAuthStore()

    useEffect (() => {
        checkAuth()
    }, [checkAuth]);

    console.log({ authUser });

    if (isCheckingAuth && !authUser) return (
        <div className="flex items-center justify-center h-screen">
            <Loader className="size-10 animate-spin" />
        </div>
    )

    return (

        <div>

            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
                <Route path="/login" element={!authUser ? <LogInPage />: <Navigate to="/" />} />
                <Route path="/settings" element={authUser ? <SettingsPage /> : <Navigate to="/login" />} />
                <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
            </Routes>

        </div>
    );
}

export default App;