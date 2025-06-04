import { useState, useEffect } from 'react'
import { AgregarTarea } from './assets/AgregarTarea';
import { MostrarTareas } from './assets/MostrarTareas';
import './App.css'
function App() {
  const [idTarea, setIdTarea]=useState(0);
  const [listaTareas,setListaTareas]=useState([]);
  const [filtro, setFiltro]=useState("todas");
  
  useEffect(() => {
    const tareasGuardadas = localStorage.getItem('listaTareas');
    const idGuardado = localStorage.getItem('idTarea');

    if (tareasGuardadas) {
      const tareasParseadas = JSON.parse(tareasGuardadas).map(tarea => ({
        ...tarea,
        fecha: new Date(tarea.fecha)
      }));
      setListaTareas(tareasParseadas);
    }
    if (idGuardado) setIdTarea(Number(idGuardado));
  }, []);

  useEffect(() => {
    localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
    localStorage.setItem('idTarea', idTarea.toString());
  }, [listaTareas, idTarea]);

  const agregarTarea = (nom) =>{
    const tarea={
      id:idTarea,
      nombre:nom,
      fecha:new Date(),
      tildada:false
    };
    setListaTareas([...listaTareas,tarea]);
    setIdTarea(idTarea+1);
  }

  const eliminarTarea=(id)=>{
    const tareasActualizadas=listaTareas.filter((tarea)=>{
      return tarea.id!=id;
    });
    setListaTareas(tareasActualizadas);
  }

  const tildarTarea = (id, tildado) => {
    const tareasActualizadas = listaTareas.map(tarea =>
      tarea.id === id ? { ...tarea, tildada: tildado } : tarea
    );
    setListaTareas(tareasActualizadas);
  };
  

  return (
    <>
    <div className="container">

      <AgregarTarea usoElNombre={agregarTarea}/>

      <div className="filtros">
        <button className="filtro" onClick={()=>setFiltro("todas")}>✅🕓</button>
        <button className="filtro" onClick={()=>setFiltro("completadas")}>✅</button>
        <button className="filtro" onClick={()=>setFiltro("pendientes")}>🕓</button>
      </div>

      <div id="listaTareas">
        <MostrarTareas lista={listaTareas} filtro={filtro} eliminar={eliminarTarea} tildar={tildarTarea}/>
      </div>
    
    </div>
    </>
  )
}

export default App
