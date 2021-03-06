import { useState } from "react"
import instance from '../../extras/axiosconf';
import { NavLink } from 'react-router-dom';

// **************
//   Components
// **************
import PersonaEdit from './PersonasEdit'

export default function Personas() {
    const [data, setData] = useState(null);

    const getPersonas = async () => {
        await instance(`/personas`).then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    }

    const deletePersona = async (id) => {
        await instance.delete(`/personas/${id}`).then((res) => {
            getPersonas();
            console.log(res);
        })
    }

    return (

        <div className="contenedor">
            <h1>Personas</h1>
            <div className="tableContenedor">
                {data? (
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
                                            <a onClick={() => { deletePersona(value.IdPersona) }} className="danger">Eliminar</a>
                                            <a href={`personas/editar/${value.IdPersona}`} className="info">Editar</a>
                                        </td>
                                    </tr>
                                )
                            })
                            // console.log(data)
                        ) : <tr><td colSpan={5}>No records yet.</td></tr>}
                    </tbody>
                </table>
                ) : <a className="btn" onClick={() => { getPersonas() }}>Cargar Datos</a>}
            </div>
            {/* <button onClick={() => { getPersonas() }}>Ingresar Datos</button> */}
            <NavLink to="/personas/insertar" className='btn info'>Insertar Registro</NavLink>
        </div>
    )
}