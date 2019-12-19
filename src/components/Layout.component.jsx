import React from 'react';

import Navbar from '../components/Navbar.component';
import Footer from '../components/Footer.component';
import '../styles/layout.css';

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
