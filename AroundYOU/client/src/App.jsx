import HomePage from "./pages/HomePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import RoleBasedProfile from "./components/RoleBasedProfile.jsx"

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

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<HomePage showSignupModal={true} />} />
                <Route path="/login" element={ !authUser ? <HomePage showLoginModal /> : <Navigate to="/profile" />} />
                <Route path="/profile" element={authUser ? <RoleBasedProfile /> : <Navigate to="/" />} />
                <Route path="/settings" element={authUser ? <SettingsPage /> : <Navigate to="/" />} />
            </Routes>
            
        </div>
    );
}

export default App;