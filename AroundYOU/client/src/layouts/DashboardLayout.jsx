// client/src/layouts/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      {/* You can add Dashboard-specific Navbar/Sidebar here later */}
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
