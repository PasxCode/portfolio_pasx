import React from "react";


function Carrusel(props) { //props: interval, imagen, alt, empresa, cargo
    return(
        <>
            <div className={`carousel-item ${(props.active ? 'active':'')}`}  data-bs-interval={props.interval}>
                <div className="container">
                <img className="empleos-imagen rounded-circle" src={props.imagen} alt={props.alt}/>
                <p className="empleos-texto">{props.children}</p>
                <div className="empleos-info">
                    <p className="empresa">{props.empresa}</p>
                    <p className="cargo">{props.cargo}</p>
                </div>
                </div>
            </div>
            
        </>
    );
}

export default Carrusel;