import React from "react";
import Navbar from "./Components/NavBar";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
