import { Outlet } from "react-router-dom";
import Navbar from "@/components/ui/navbar/navbar";

const Layout = () => {
  return (
    <section className="flex w-full bg-customWhite ">
      <Navbar isExpanded />
      <main className="flex flex-col animate-[appear_1s]  w-full justify-start ">
        <nav className="bg-white h-14 shadow-md flex  items-center p-8">
          Hola
        </nav>
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
