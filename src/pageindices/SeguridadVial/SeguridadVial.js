import React from "react";
import './SeguridadVial.css'
import { NavLink } from "react-router-dom";
function SeguridadVial () {
    return(
        // <BrowserRouter>
        <div className="container-fluid">
            <h1>Seguridad Vial</h1>
            <p>Aqui encontraras todo lo relacionado al manejo preventido
                recomendaciones tecnomecanicas y normas utiles
            </p>
         <div>
             <ul className="indicePrincipal">
                 <li className="indices"> <NavLink to="/Seguridad-Vial/Bicicletas" className="linkindices"> Bicicletas </NavLink></li>
                 <li className="indices"> <NavLink to="/Seguridad-Vial/Autos" className="linkindices"> Autos</NavLink></li>
                 <li className="indices"> <NavLink to="/Seguridad-Vial/Motocicletas" className="linkindices"> Motocicletas</NavLink></li>
                 <li className="indices"> <NavLink to="/Seguridad-Vial/Vehiculos-de-carga" className="linkindices"> Vehiculos de carga</NavLink></li>
             </ul>
         </div>
         <div>
             sdfsdf
         </div>
        </div>
        // </BrowserRouter>
    );
}
export {SeguridadVial}