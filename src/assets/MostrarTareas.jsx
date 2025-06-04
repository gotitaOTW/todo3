import React, { useState } from 'react';
import { MostrarTarea } from './MostrarTarea';

function MostrarTareas(props){
    const listaFiltrada=props.lista.filter((tarea)=>{
        if(props.filtro=="completadas"){return tarea.tildada==true}
        else if(props.filtro=="pendientes"){return tarea.tildada==false}
        else{return true};//cuando son todas
    })

    return(
    <>
        {
            listaFiltrada.map((tarea,i)=>(
            <MostrarTarea key={i} tarea={tarea} eliminar={props.eliminar} tildar={props.tildar}/>
            ))
        }
    </>
    )
}

export {MostrarTareas}