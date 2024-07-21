import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Loader from "@/components/ui/loader";

const Layout = () => {
  return (
    <>
      <Navbar isDashboard />
      <label>Hola</label>
      <main className="flex flex-col h-full pt-16 animate-[appear_1s]">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
