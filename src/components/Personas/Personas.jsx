import { useState, useEffect } from "react"
import instance from '../../extras/axiosconf';

export default function Personas(){

    const [data, setData] = useState(null);
    const [id, setId] = useState(0);

    const getPersona = async () => {
        await instance(`/personas/${id}`).then((res) => {
            setData(res.data[0]);
        });
    }

    return(
        
           <div className="contenedor">
                <div className="Title">IdPersona: {data? data.IdPersona: 'N/A'}</div>
                <div className="Title">Nombre: {data? data.Nombre : 'N/A'}</div>
                <div className="Title">Fecha de Nacimiento: {data? data.FechaDeNacimiento : 'N/A'}</div>
                <div className="Title">Genero: {data? data.Genero : 'N/A'}</div>
                {console.log("data: ", data)}
                <button onClick={() => {getPersona(); id < 1 ? setId(1) : setId(id+1)}}>Cargar Datos</button>
           </div>
    )
}