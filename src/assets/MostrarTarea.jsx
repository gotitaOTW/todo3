import { FormatearFecha } from "./FormatearFecha"

function MostrarTarea(props){
    return(<div className="cardTarea">
        <div className="contenidoTarea">
            <p className="nombreTarea">{props.tarea.tildada ? <del>{props.tarea.nombre}</del> : props.tarea.nombre}</p>
            <p className="fechaTarea"><FormatearFecha fecha={props.tarea.fecha}/></p>
        </div>
        
        <div className="botonesTarea">
            <b><button className="borrarTarea" onClick={()=>props.eliminar(props.tarea.id)}>✖</button></b>
            <input type="checkbox" className="cbTarea" id="cbDeTarea1" onChange={(e)=>props.tildar(props.tarea.id, e.target.checked)}/>
        </div>
    </div>)
}   

export {MostrarTarea}