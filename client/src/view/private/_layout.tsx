import React from "react";
import { Outlet } from "react-router-dom";
import Loader from "@/components/ui/loader";
import { ENDPOINTS } from "@/types/enums/endpoint";
import { ROUTES } from "@/types/enums/Routes";
import Navbar from "@/components/ui/navbar/navbar";    

const Layout = () => {
  return (
    <section className="flex w-full bg-customWhite h-f">
      <Navbar isDashboard />
      <label>Hola</label>
      <main className="flex flex-col h-full pt-16 animate-[appear_1s]">
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
