import { useState } from "react";
import instance from "../../extras/axiosconf"


export default function EmpleadosInsert() {
    
    const [data, setData] = useState([]);
    
    // **************
    //   Hooks
    // **************
    
    const [IdPersona, setIdPersona] = useState(null);
    const [IdDepartamento, setIdDepartamento] = useState(null);
    const [IdPuesto, setIdPuesto] = useState(null);
      
    // **************
    //   Functions
    // **************

    const goEmpleadosHome = () => {
        window.location.replace('http://localhost:3000/empleados')
    }

    const InsertarPersona = async () => {
        let post = {
            IdPersona: IdPersona,
            IdDepartamento: IdDepartamento,
            IdPuesto: IdPuesto
        }
        console.log(post);
        await instance.post('/empleados', post).then(res => {
            console.log(res.status());
        }).catch(err => console.log(err))
        goEmpleadosHome();
    }

    return (
        <div className="contenedor">
            <h1>Insertar Empleado</h1>
            <div className="formContenedor">
                <form className='editForm'>
                    <label htmlFor="IdPersona">IdPersona: </label>
                    <input type="text" name="IdPersona" id="" onChange={(e) => {setIdPersona(e.target.value.trim())}}/>

                    <label htmlFor="IdDepartamento">IdDepartamento: </label>
                    <input type="text" name="IdDepartamento" id="" onChange={(e) => {setIdDepartamento(e.target.value.trim())}}/>

                    <label htmlFor="IdPuesto">IdPuesto: </label>
                    <input type="text" name="IdPuesto" id="" onChange={(e) => {setIdPuesto(e.target.value.trim())}}/>
                    
                    <input type="button" className='btn success' onClick={() => {InsertarPersona(IdPersona, IdDepartamento, IdPuesto)}} value="Insertar" />
                    <a className="btn danger" onClick={() => {goEmpleadosHome()}}>Cancelar</a>
                </form>
            </div>
        </div>
    );
}