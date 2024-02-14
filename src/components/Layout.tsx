import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import AppSidebar from "./AppSidebar";

const Layout = () => {
  return (
    <div className="flex">
      <AppSidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
