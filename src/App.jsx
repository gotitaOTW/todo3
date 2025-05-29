import { useState } from 'react'
//git clone https://github.com/gotitaOTW/todo2-EFSI.git
import './App.css'
function App() {
  const [idTarea, setIdTarea]=useState(0);
  const [listaTareas,setListaTareas]=useState([]);


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

  return (
    <>
    <div className="container">
    <form id="agregarTareaForm">
        <input type="text" placeholder="Nombre" id="nombre"/>
        <button type="submit">➕</button>
        <button type="submit">🗑️</button>
    </form>
    <agregarTarea/>
    <div className="filtros">
      <AgregarFiltro contenido="✅+🕓"/>
      <AgregarFiltro contenido="✅"/>
      <AgregarFiltro contenido="🕓"/>
    </div>
    <div id="listaTareas">
      <AgregarTarea nombre="Comprar verduras" fecha="23/04/2025" completada={true}/>
      <AgregarTarea nombre="Estudiar judía" fecha="24/04/2025" completada={false}/> 
    </div>
  </div>
    </>
  )
}

export default App
