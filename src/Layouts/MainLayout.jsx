import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header.tsx';

export default function MainLayout() {
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Outlet />
        </div>

      </div>
  );
}
