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
import ManillasTyvek from "../components/pages/ManillasDeControl/ManillasTyvek";
import ManillasPlasticas from "../components/pages/ManillasDeControl/ManillasPlasticas";
import ManillasHospitalarias from "../components/pages/ManillasDeControl/ManillasHospitalarias";
import ManillasTejidas from "../components/pages/ManillasDeControl/ManillasTejidas";
import ManillasSublimadas from "../components/pages/ManillasDeControl/ManillasSublimadas";
import ManillasPlastisol from "../components/pages/ManillasDeControl/ManillasPlastisol"
import Hologramas from "../components/pages/ManillasDeControl/Hologramas";
import Carrito from "../components/pages/Carrito";

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
             <Route exact path="/carrito">
                <Carrito/>
             </Route>
             <Route exact path="/productos/manillas-tyvek">
                <ManillasTyvek />
             </Route>
             <Route exact path="/productos/manillas-plasticas">
                <ManillasPlasticas />
             </Route>
             <Route exact path="/productos/manillas-hospitalarias">
                <ManillasHospitalarias />
             </Route>
             <Route exact path="/productos/manillas-tejidas">
                <ManillasTejidas />
             </Route>
             <Route exact path="/productos/manillas-sublimadas">
                <ManillasSublimadas />
             </Route>
             <Route exact path="/productos/manillas-plastisol">
                <ManillasPlastisol />
            </Route>
             <Route exact path="/productos/hologramas">
                <Hologramas />
            </Route>
             <Redirect to="/" />
            </Switch>
            <Footer/>
          </Fragment>
        </Router>
      );
}
