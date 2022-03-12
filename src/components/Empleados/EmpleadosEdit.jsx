import { useState } from "react";
import instance from "../../extras/axiosconf"

export default function EmpleadosEdit() {
   
    const [data, setData] = useState();

    const [IdPersona, setIdPersona] = useState(null);
    const [IdDepartamento, setIdDepartamento] = useState(null);
    const [IdPuesto, setIdPuesto] = useState(null);

    const getEmpleado = async () => {
        let id = (window.location.href.match(/\d+$/));
        await instance(`/empleados/${id}`).then((res) => {
            setData(res.data);
            console.log("data: ", res.data  );
        });
    }

    const goEmpleadosHome = () => {
        window.location.replace('http://localhost:3000/empleados')
    }

    const setEmpleado = async(IdPersona, IdDepartamento) => {
        let put = {
            IdEmpleado: window.location.href.match(/\d+$/)[0],
            IdPersona: IdPersona,
            IdDepartamento: IdDepartamento,
            IdPuesto: IdPuesto
        }
        console.log('put: ', put);
        await instance.put(`/empleados/${put.IdEmpleado}`, put).then((res) => {
            console.log(res.status());
        }).catch(err => console.log(err))
        goEmpleadosHome();
    }

    
    return (
        <div className="contenedor">
            <h1>Editar</h1>
            <h3>Instrucciones: En los campos sin cambios, agrega un espacio al final o al principio.</h3>
            <div className="formContenedor">

                {data?.IdEmpleado ? (
                    <form className='editForm'>
                        {/* <label htmlFor="Nombre">IdEmpleado: </label>
                        <input disabled type="text" name="Nombre" id="" defaultValue={data.IdEmpleado} onChange={(e) => {setname(e.target.value.trim())}}/> */}

                        <label htmlFor="IdPersona">IdPersona: </label>
                        <input type="text" name="IdPersona" id="" defaultValue={data.IdPersona} onChange={(e) => {setIdPersona(e.target.value.trim())}}/>

                        <label htmlFor="IdDepartamento">IdDepartamento: </label>
                        <input type="text" name="IdDepartamento" id="" defaultValue={data.IdDepartamento} onChange={(e) => {setIdDepartamento(e.target.value.trim())}}/>

                        <label htmlFor="IdPuesto">IdPuesto: </label>
                        <input type="text" name="IdPuesto" id="" defaultValue={data.IdPuesto} onChange={(e) => {setIdPuesto(e.target.value.trim())}}/>
                        
                        <input type="button" className='btn info' onClick={() => {setEmpleado(IdPersona, IdDepartamento)}} value="Actualizar" />
                        <a className="btn danger" onClick={() => {goEmpleadosHome()}}>Cancelar</a>
                    </form>
                ) : <a className="btn" onClick={() => {getEmpleado()}}>Obtener Datos</a>}

            </div>
        </div>
    );
}