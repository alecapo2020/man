import React,{Fragment} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navbar from "../components/includes/Navbar";
import Footer from "../components/includes/Footer";
import { Contacto } from "../components/pages/Contacto";
import { Inicio } from "../components/pages/Inicio";
import Tienda from "../components/pages/Tienda";
import ManillasTyvek from "../components/pages/ManillasTyvek";
import ManillasPlasticas from "../components/pages/ManillasPlasticas";

export const AppRouter = () => {
    
  return  (
        <Router>
          <Fragment>
           <Navbar/>  
            <Switch>
             <Route exact path="/tienda">
                <Tienda/>
             </Route>
             <Route exact path="/contacto">
                <Contacto/>
             </Route>
             <Route exact path="/">
                <Inicio />
             </Route>
             <Route exact path="/productos/manillas-tyvek">
                <ManillasTyvek />
             </Route>
             <Route exact path="/productos/manillas-plasticas">
                <ManillasPlasticas />
             </Route>
             <Redirect to="/" />
            </Switch>
            <Footer/>
          </Fragment>
        </Router>
      );
}
