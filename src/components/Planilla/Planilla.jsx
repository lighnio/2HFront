import { useState } from "react"
import instance from '../../extras/axiosconf';
import { NavLink } from 'react-router-dom';

export default function Planilla() {

    const [data, setData] = useState(null);

    const getPlanilla = async () => {
        await instance(`/planilla`).then((res) => {
            setData(res.data);
        });
    }


    return (
        <div className="contenedor">
        <h1>Planilla</h1>
        <div className="tableContenedor mb-2">
            {data? (
                <table>
                <thead>
                    <tr>
                        <th>IdEmpleado</th>
                        <th>Nombre</th>
                        <th>Departamento</th>
                        <th>Puesto</th>
                        <th>Pago Quincena</th>
                        <th>Horas Ordinarias</th>
                        <th>Bonificacion</th>
                        <th>IGGS</th>
                        {/* <th>Funcionalidad</th> */}
                    </tr>
                </thead>
                <tbody>

                    {data ? (
                        data.map((value, index) => {
                            return (
                                <tr key={value.IdEmpleado}>
                                    <td>{value.IdEmpleado}</td>
                                    <td>{value.Nombre}</td>
                                    <td>{value.Departamento}</td>
                                    <td>{value.Puesto}</td>
                                    <td>{value.PAGO_QUINCENA}</td>
                                    <td>{value.HorasOrdinarias}</td>
                                    <td>{value.Bonificacion}</td>
                                    <td>{value.IGGS}</td>
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
            ) : <a className="btn" onClick={() => { getPlanilla() }}>Cargar Datos</a>}
        </div>
    </div>
    );
}