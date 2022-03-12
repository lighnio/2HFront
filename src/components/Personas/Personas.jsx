import { useState } from "react"
import instance from '../../extras/axiosconf';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// **************
//   Components
// **************
import PersonaEdit from './PersonasEdit'

export default function Personas() {
    const [data, setData] = useState(null);

    const getPersonas = async () => {
        await instance(`/personas`).then((res) => {
            setData(res.data);
        });
    }

    const deletePersona = async (id) => {
        await instance.delete(`/personas/${id}`).then((res) => {
            getPersonas();
            console.log(res.status());
        })
    }

    // useEffect(() => {
    //     instance(`/personas/${id}`).then((res) => {
    //         setData(res.data[0]);
    //     });
    // }, [])   

    return (

        <div className="contenedor">
            <h1>Personas</h1>
            <div className="tableContenedor">
                <table>
                    <thead>
                        <tr>
                            <th>IdPersona</th>
                            <th>Nombre</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Genero</th>
                            <th>Funcionalidad</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data ? (
                            data.map((value, index) => {
                                return (
                                    <tr key={value.IdPersona}>
                                        <td>{value.IdPersona}</td>
                                        <td>{value.Nombre}</td>
                                        <td>{value.FechaDeNacimiento}</td>
                                        <td>{value.Genero}</td>
                                        <td>
                                            <a onClick={() => { deletePersona(value.IdPersona) }} className="delete">Eliminar</a>
                                            <a href={`personas/editar/${value.IdPersona}`} className="edit">Editar</a>
                                        </td>
                                    </tr>
                                )
                            })
                            // console.log(data)
                        ) : <tr><td colSpan={5}>No records yet.</td></tr>}
                    </tbody>
                </table>
            </div>

            <button onClick={() => { getPersonas() }}>Cargar Datos</button>
        </div>
    )
}