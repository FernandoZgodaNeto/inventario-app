import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <Sidebar /> {}
      <div className="main">
        {children} {}
      </div>
    </div>
  );
};

export default Layout;