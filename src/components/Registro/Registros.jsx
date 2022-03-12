import { useState } from "react"
import instance from '../../extras/axiosconf';
import { NavLink } from 'react-router-dom';

export default function Registro() {

    const [data, setData] = useState(null);

    const getRegistros = async () => {
        await instance(`/registros`).then((res) => {
            setData(res.data);
            console.log(res.data);
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
        <h1>Registros</h1>
        <div className="tableContenedor">
            {data? (
                <table>
                <thead>
                    <tr>
                        <th>IdRegistro</th>
                        <th>Fecha</th>
                        <th>Tipo de Movimiento</th>
                        <th>IdEmpleado</th>
                        <th>IdJornada</th>
                        {/* <th>Funcionalidad</th> */}
                    </tr>
                </thead>
                <tbody>

                    {data ? (
                        data.map((value, index) => {
                            return (
                                <tr key={value.IdRegistro}>
                                    <td>{value.IdRegistro}</td>
                                    <td>{value.Fecha}</td>
                                    <td>{value.TipoMovimiento}</td>
                                    <td>{value.IdEmpleado}</td>
                                    <td>{value.IdJornada}</td>
                                    {/* <td>
                                        <a onClick={() => { deletePersona(value.IdPersona) }} className="danger">Eliminar</a>
                                        <a href={`personas/editar/${value.IdPersona}`} className="info">Editar</a>
                                    </td> */}
                                </tr>
                            )
                        })
                        // console.log(data)
                    ) : <tr><td colSpan={5}>No records yet.</td></tr>}
                </tbody>
            </table>
            ) : <a className="btn" onClick={() => { getRegistros() }}>Cargar Datos</a>}
        </div>
        {/* <button onClick={() => { getPersonas() }}>Ingresar Datos</button> */}
        <NavLink to="/registros/insertar" className='btn info'>Insertar Registro</NavLink>
    </div>
    );
}