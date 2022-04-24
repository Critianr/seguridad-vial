import React from "react";
import imgTecmotos from '../../../../components/assets/img/motos/tecmotos.jpg';
import frenMotos from '../../../../components/assets/img/motos/frenmotos.jpg';
import elemenpromotos from '../../../../components/assets/img/motos/elemeprotmotos.jpg';
import prevmotos from '../../../../components/assets/img/motos/prevmotos.jpeg';

function ItemMotos (){
    return (
      <div className="container-fluid">
         <h1>Seguridad Vial para Motociclistas</h1>
         <div>
         <div className="card" >
  <img className="card-img-top" src={frenMotos} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Tecnicas de Frenado</h5>
    <p className="card-text">Guia rapida de tecnicas de frenado existentes</p>
    <a href="#" className="btn btn-primary">Leer mas</a>
  </div>
</div>
         </div>
         {/*  */}
         <div>
         <div className="card" >
  <img className="card-img-top" src={imgTecmotos} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Tecnicas de manejo</h5>
    <p className="card-text"> Tecnicas y gestos que podemos utilizar al conducir</p>
    <a href="#" className="btn btn-primary">Leer mas</a>
  </div>
</div>
         </div>
         {/*  */}
         <div>
         <div className="card" >
  <img className="card-img-top" src={elemenpromotos} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Elementos de Proteccion</h5>
    <p className="card-text"> Elemento para la Motocicletas y para el conductor que son de utilidad</p>
    <a href="#" className="btn btn-primary">Leer mas</a>
  </div>
</div>
         </div>
         {/*  */}
         <div>
         <div className="card" >
  <img className="card-img-top" src={prevmotos} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Manejo preventivo</h5>
    <p className="card-text">Esta guia muetra tips para un manejo defensivo</p>
    <a href="#" className="btn btn-primary">Leer mas</a>
  </div>
</div>
         </div>
  </div>

    );
}

export default ItemMotos