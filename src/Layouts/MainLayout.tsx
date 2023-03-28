/* eslint-disable import/no-unresolved */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Components';

const MainLayout: React.FC = () => (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Outlet />
        </div>

      </div>
);

export default MainLayout;
