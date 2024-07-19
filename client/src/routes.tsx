import { Route, Routes } from "react-router-dom";
import Login from "./view/public";
import { ROUTES } from "./types/enums/Routes";
import Layout from "./view/private/_layout";
import Home from "./view/private/home/home";

const RoutesComponent = () => {
  return (
    <main className="w-screen h-screen bg-bg">
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.DASHBOARD} element={<Layout />}>
          <Route path={ROUTES.DASHBOARD} element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default RoutesComponent;
