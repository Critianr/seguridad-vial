import { Routes, Route, } from 'react-router-dom';
import Home from '../Home';
import {Campanas} from '../pageindices/Campañas/Campanas';
import {CultureVial} from '../pageindices/CulturaVial/CulturaVial';
import {SeguridadVial} from '../pageindices/SeguridadVial/SeguridadVial';
import {ItemAutos} from '../pageindices/SeguridadVial/IndiceSeguridad/Autos/ItemAutos'
import { ItemVehiculosCarga } from '../pageindices/SeguridadVial/IndiceSeguridad/VehiculosCarga/ItemVehiculosCarga';
import ItemMotos from '../pageindices/SeguridadVial/IndiceSeguridad/Motocicletas/ItemMotos';
import { ItemBici } from '../pageindices/SeguridadVial/IndiceSeguridad/Bicicletas/ItemBicicletas';

export default function AppRouter() {
    return (
        
        <Routes>

            <Route path={"/"} element={<Home />} />
            <Route path={"/campanas"} element={<Campanas />} />
            <Route path={"/cultura-vial"} element={<CultureVial />} />
            <Route path={"/Seguridad-Vial"} element={<SeguridadVial /> } />
            <Route path={"/Seguridad-Vial/Motocicletas"} element={<ItemMotos />} />
            <Route path={"/Seguridad-Vial/Autos"} element={<ItemAutos /> } />
            <Route path={"/Seguridad-Vial/Bicicletas"} element={<ItemBici /> } />
            <Route path={"/Seguridad-Vial/Vehiculos-de-carga"} element={<ItemVehiculosCarga /> } />


        </Routes>
        
        )
}