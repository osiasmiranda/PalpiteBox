import React from "react";

import Header from "./Header";
import Footer from "./Footer/index";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className=' bg-gray-200'>
        <div className='container mx-auto'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
