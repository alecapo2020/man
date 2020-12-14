import React,{Fragment} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navbar from "../components/includes/navbar/Navbar";
import Footer from "../components/includes/footer/Footer";
import { Contacto } from "../components/pages/contacto/Contacto";
import { Inicio } from "../components/pages/inicio/Inicio";
import Tienda from "../components/pages/tienda/Tienda";
import ManillasMenu from "../components/pages/ManillasMenu";
import ManillasTyvek from "../components/pages/ManillasDeControl/manillasTyvek/ManillasTyvek";
import ManillasPlasticas from "../components/pages/ManillasDeControl/manillasPlasticas/ManillasPlasticas";
import ManillasHospitalarias from "../components/pages/ManillasDeControl/manillasHospitalarias/ManillasHospitalarias";
import ManillasTejidas from "../components/pages/ManillasDeControl/manillasTejidas/ManillasTejidas";
import ManillasSublimadas from "../components/pages/ManillasDeControl/manillasSublimadas/ManillasSublimadas";
import ManillasPlastisol from "../components/pages/ManillasDeControl/manillasPlastisol/ManillasPlastisol"
import Hologramas from "../components/pages/ManillasDeControl/hologramas/Hologramas";
import Carrito from "../components/pages/Carrito";
import ProcesarCompra from "../components/pages/ProcesarCompra";
import Error404 from "../components/pages/Error404";
import Cotizacion from "../components/pages/Cotizacion";


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
             <Route exact path="/ProcesarCompra">
                <ProcesarCompra />
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
            <Route exact path="/manillas">
               <ManillasMenu />
            </Route>
            <Route exact path="/404">
               <Error404 />
            </Route>
            <Route exact path="/cotizacion">
               <Cotizacion />
            </Route>

            <Redirect to="/404"></Redirect>
            </Switch>
            <Footer/>
          </Fragment>
        </Router>
      );
}
