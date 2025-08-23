// components/RoleBasedProfile.jsx
import { Navigate } from "react-router-dom";
import StudentProfile from "../pages/StudentProfile"
import AlumniProfile from "../pages/AlumniProfile";
import AdminProfile from "../pages/AdminProfile";
import { useAuthStore } from "../store/useAuthStore";

const RoleBasedProfile = () => {
  const { authUser } = useAuthStore();

  if (!authUser) return <Navigate to="/" />;

  switch (authUser.role) {
    case "Student":
      return <StudentProfile />;
    case "Alumni":
      return <AlumniProfile />;
    case "Admin":
      return <AdminProfile />;
    default:
      return <Navigate to="/" />;
  }
};

export default RoleBasedProfile;
