import React, { useState } from 'react';

function AgregarTarea(props){
    const [nombre, setNombre]=useState("");

    const validarNombre=(e)=>{
        setNombre(e.target.value);
    }

    const enviarForm=(e)=>{
        e.preventDefault();
     if(nombre!="")
      {
       props.usoElNombre(nombre);
       setNombre("")
      }
    }

    return(
    <form id="agregarTareaForm" onSubmit={enviarForm}>
        <input type="text" placeholder="Nombre" id="nombre" onChange={validarNombre} value={nombre}/>
        <button type="submit">➕</button>
    </form>)
}

export {AgregarTarea};


