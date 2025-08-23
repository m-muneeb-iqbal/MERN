// components/RoleBasedProfile.jsx
import { useNavigate } from "react-router-dom";
import StudentProfile from "../pages/StudentProfile";
import AlumniProfile from "../pages/AlumniProfile";
import AdminProfile from "../pages/AdminProfile";
import { useAuthStore } from "../store/useAuthStore";

const RoleBasedProfile = () => {
  const { authUser, logout } = useAuthStore();
  const navigate = useNavigate();
  if (!authUser) return <navigate to="/" />;

  const renderProfile = () => {
    switch (authUser.role) {
      case "Student":
        return <StudentProfile />;
      case "Alumni":
        return <AlumniProfile />;
      case "Admin":
        return <AdminProfile />;
      default:
        return <p>No profile available for this role.</p>;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Profile Page</h1>
      <p>Welcome, {authUser?.fullName}</p>

      {/* Render role-based component */}
      {renderProfile()}

      {/* Test logout button */}
      <button
        onClick={async () => {
          await logout(); // clear session
          navigate("/"); // redirect after logout
        }}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default RoleBasedProfile;
