// client/src/App.jsx
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

import { Routes, Route } from "react-router-dom";
import { useAuthStore } from "./store/authStore.js";
import { useEffect } from "react";

import { Loader } from "lucide-react";

export const App = () => {

  const {authUser, checkAuth} = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  console.log({authUser});

  if (isCheckingAuth && !authUser) return (

    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin"/>
    </div>

  )

  return (
    <div>

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
        <Route path="/login" element={<LogInPage/>}></Route>
        <Route path="/settings" element={<SettingsPage/>}></Route>
        <Route path="/profile" element={<ProfilePage/>}></Route>
      </Routes>

    </div>
  );
};

export default App;