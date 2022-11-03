import React from 'react';
import Navbar from '../Navbar/Navbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
