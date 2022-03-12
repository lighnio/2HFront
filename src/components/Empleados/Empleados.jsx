import { useState } from "react"
import instance from '../../extras/axiosconf';
import { NavLink } from 'react-router-dom';

// **************
//   Components
// **************


export default function Empleados() {

    const [data, setData] = useState(null);

    const getEmpleados = async () => {
        await instance(`/empleados`).then((res) => {
            setData(res.data);
        });
    }

    const deleteEmpleado = async (id) => {
        await instance.delete(`/empleados/${id}`).then((res) => {
            getEmpleados();
            console.log(res);
        })
    }

    return (
        <div className="contenedor">
            <h1>Empleados</h1>
            <div className="tableContenedor">
                {data? (
                    <table>
                    <thead>
                        <tr>
                            <th>IdEmpleado</th>
                            <th>IdPersona</th>
                            <th>IdDepartamento</th>
                            <th>IdPuesto</th>
                            <th>Funcionalidad</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data ? (
                            data.map((value, index) => {
                                return (
                                    <tr key={value.IdPersona}>
                                        <td>{value.IdEmpleado}</td>
                                        <td>{value.IdPersona}</td>
                                        <td>{value.IdDepartamento}</td>
                                        <td>{value.IdPuesto}</td>
                                        <td>
                                            <a onClick={() => { deleteEmpleado(value.IdEmpleado) }} className="danger">Eliminar</a>
                                            <a href={`/empleados/editar/${value.IdEmpleado}`} className="info">Editar</a>
                                        </td>
                                    </tr>
                                )
                            })
                            // console.log(data)
                        ) : <tr><td colSpan={5}>No records yet.</td></tr>}
                    </tbody>
                </table>
                ) : <a className="btn" onClick={() => { getEmpleados() }}>Cargar Datos</a>}
            </div>
            {/* <button onClick={() => { getPersonas() }}>Ingresar Datos</button> */}
            <NavLink to="/empleados/insertar" className='btn info'>Insertar Registro</NavLink>
        </div>
    );
}

