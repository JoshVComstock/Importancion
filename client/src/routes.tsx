import { Route, Routes as RRDRoutes } from "react-router-dom";
import Login from "./view/public";
import { ROUTES } from "./types/enums/Routes";


const Routes = () => {
  return (
    <RRDRoutes>
      <Route path="" element={""}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Route>
      <Route path={ROUTES.DASHBOARD} element={""}>

      </Route>
    </RRDRoutes>
  );
};

export default Routes;
