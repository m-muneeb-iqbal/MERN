import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js"

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,

    checkAuth: async() => {
        try {

            const res = await axiosInstance.get("/auth/check")

            set({authUser:res.data})

        } catch (error) {
            
            console.log("Error in checkAuth: ", error)
            set({authUser:null})

        } finally {
            set({isCheckingAuth:false})
        }
    },

signup: async (data) => {
  set({ isSigningUp: true });
  try {
    const payload = {
      ...data,
      username: data.email.split("@")[0], // auto username
      role: "Student" // default role
    };

    const res = await axiosInstance.post("/auth/signup", payload, {
      withCredentials: true,
    });

    set({ authUser: res.data });
    return res.data;
  } catch (error) {
    console.error("Error in signup: ", error.response?.data || error.message);
    throw error;
  } finally {
    set({ isSigningUp: false });
  }
}


}))