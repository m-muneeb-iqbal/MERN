// client/src/layouts/MainLayout.jsx
import React from 'react';
import Header from '../components/Homepage/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;