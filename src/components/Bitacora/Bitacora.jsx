import { useState } from "react"
import instance from '../../extras/axiosconf';
import { NavLink } from 'react-router-dom';

export default function Bitacora() {

    const [data, setData] = useState(null);

    const getBitacora = async () => {
        await instance(`/bitacora`).then((res) => {
            setData(res.data);
        });
    }

    return (
        <div className="contenedor">
        <h1>Bitacora</h1>
        <div className="tableContenedor mb-2">
            {data? (
                <table>
                <thead>
                    <tr>

                        <th>#</th>
                        <th>Operacion</th>
                        <th>Nombre Tabla</th>
                        <th>Fecha Operacion</th>
                        <th>Usuario</th>
                        <th>Llave Primaria</th>
                        <th>Dato Antiguo</th>
                        <th>Dato Antiguo 2</th>
                        <th>Dato Antiguo 3</th>
                        <th>Dato Antiguo 4</th>
                        <th>Dato Antiguo 5</th>
                        <th>Dato Antiguo 6</th>
                        <th>Dato Nuevo</th>
                        <th>Dato Nuevo 2</th>
                        <th>Dato Nuevo 3</th>
                        <th>Dato Nuevo 4</th>
                        <th>Dato Nuevo 5</th>
                        <th>Dato Nuevo 6</th>
                        {/* <th>Funcionalidad</th> */}
                    </tr>
                </thead>
                <tbody>

                    {data ? (
                        data.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{value.Operacion}</td>
                                    <td>{value.NombreTabla}</td>
                                    <td>{value.FechaOperacion}</td>
                                    <td>{value.Usuario}</td>
                                    <td>{value.LlavePrimariaDeTabla}</td>
                                    <td>{value.DatoAntiguo? value.DatoAntiguo : "---"}</td>
                                    <td>{value.DatoAntiguo2? value.DatoAntiguo2 : "---"}</td>
                                    <td>{value.DatoAntiguo3? value.DatoAntiguo3: "---"}</td>
                                    <td>{value.DatoAntiguo4? value.DatoAntiguo4 : "---"}</td>
                                    <td>{value.DatoAntiguo5? value.DatoAntiguo5 : "---"}</td>
                                    <td>{value.DatoAntiguo6? value.DatoAntiguo6 : "---"}</td>
                                    <td>{value.DatoNuevo? value.DatoNuevo : "---"}</td>
                                    <td>{value.DatoNuevo2? value.DatoNuevo2 : "---"}</td>
                                    <td>{value.DatoNuevo3? value.DatoNuevo3 : "---"}</td>
                                    <td>{value.DatoNuevo4? value.DatoNuevo4 : "---"}</td>
                                    <td>{value.DatoNuevo5? value.DatoNuevo5 : "---"}</td>
                                    <td>{value.DatoNuevo6? value.DatoNuevo6 : "---"}</td>
                                    
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
            ) : <a className="btn" onClick={() => { getBitacora() }}>Cargar Datos</a>}
        </div>
    </div>
    );
}