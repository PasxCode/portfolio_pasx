import React from "react";

function Cursos(props){
    return(
        <a href={props.enlace} target="_blank" rel="noopener noreferrer">
        <li className="list-group-item">
          {props.children}
        </li>
      </a>
    );
}

export default Cursos;