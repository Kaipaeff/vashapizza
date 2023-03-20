import React from 'react';
import { Outlet } from 'react-router-dom';
// @ts-ignore
import Header from '../Components/Header/Header.tsx';

const MainLayout: React.FC = () => (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Outlet />
        </div>

      </div>
);

export default MainLayout;
