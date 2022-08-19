import React from "react";
import Footer from "../pages/Footer/Footer";
import Header from "../pages/Header/Header";

const Layout = ({ children, withoutHeader, withoutFooter }) => {
  return (
    <div className="wrap">
      {withoutHeader ? null : <Header />}
      <div className="main">{children}</div>
      {withoutFooter ? null : <Footer />}
    </div>
  );
};

export default Layout;
