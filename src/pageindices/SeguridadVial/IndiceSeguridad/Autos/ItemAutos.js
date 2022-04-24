import React from "react";
import tecFrenado from '../../../../components/assets/img/autos/tecFrenado.jpg';
import tecManejo from '../../../../components/assets/img/autos/tecManejo.jpg';
import elemenProtec from '../../../../components/assets/img/autos/elemenProtec.jpg';
import manePreven from '../../../../components/assets/img/autos/manePreven.jpg';
// import { NavLink } from "react-router-dom";


function ItemAutos (){
    return(
      <div className="container-fluid">
      <h1>Seguridad Vial para automovilistas</h1>
      <div>
      <div className="card" >
<img className="card-img-top" src={tecFrenado} alt="Card image cap" />
<div className="card-body">
 <h5 className="card-title">Tecnicas de Frenado</h5>
 <p className="card-text">Guia rapida de tecnicas de frenado existentes y mantenimiento</p>
 <a href="#" className="btn btn-primary">Leer mas</a>
</div>
</div>
      </div>
      {/*  */}
      <div>
      <div className="card" >
<img className="card-img-top" src={tecManejo} alt="Card image cap" />
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
<img className="card-img-top" src={elemenProtec} alt="Card image cap" />
<div className="card-body">
 <h5 className="card-title">Elementos de Seguridad que debes llevar en el auto</h5>
 <p className="card-text"> Elemento que debes llevar en el auto tanto normativos como elementales para alguna emergencia</p>
 <a href="#" className="btn btn-primary">Leer mas</a>
</div>
</div>
      </div>
      {/*  */}
      <div>
      <div className="card" >
<img className="card-img-top" src={manePreven} alt="Card image cap" />
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

export {ItemAutos}