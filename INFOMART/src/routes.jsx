import React from "react";
import { Route, Routes, BrowserRouter as Router} from "react-router-dom";

import Home from './pages/home';
import Minhalista from "./pages/minhalista";

export function AppRoutes() {
   return(
       <Router>
            <Routes>
                <Route component = { Home }  path="/" exact />
                <Route component = { Minhalista }  path="/minhalista" />
            </Routes>
       </Router>
   )
}

export default Routes;