import { useState } from "react";
import instance from "../../extras/axiosconf"

export default function RegistrosInsert() {

    const [data, setData] = useState([]);
    
    // **************
    //   Hooks
    // **************
    
    const [IdEmpleado, setIdEmpleado] = useState(null);
    const [TipoMovimiento, setTipoMovimiento] = useState(null);
    const [IdJornada, setIdJornada] = useState(null);
      
    // **************
    //   Functions
    // **************

    const goRegistrosHome = () => {
        window.location.replace('http://localhost:3000/registros')
    }

    const InsertarRegistro = async () => {
        let post = {
            IdEmpleado: IdEmpleado,
            TipoMovimiento: TipoMovimiento,
            IdJornada: IdJornada
        }
        console.log(post);
        await instance.post('/registros', post).then(res => {
            console.log(res.status());
        }).catch(err => console.log(err))
        goRegistrosHome();
    }

    return (
        <div className="contenedor">
            <h1>Insertar Registro</h1>
            <div className="formContenedor">
                <form className='editForm'>
                    <label htmlFor="IdEmpleado">IdEmpleado: </label>
                    <input type="text" name="IdEmpleado" id="" onChange={(e) => {setIdEmpleado(e.target.value.trim())}}/>

                    <label htmlFor="TipoMovimiento">Tipo de Movimiento: </label>
                    <input type="text" name="TipoMovimiento" id="" onChange={(e) => {setTipoMovimiento(e.target.value.trim())}}/>

                    <label htmlFor="IdJornada">IdJornada: </label>
                    <input type="text" name="IdJornada" id="" onChange={(e) => {setIdJornada(e.target.value.trim())}}/>
                    
                    <input type="button" className='btn success' onClick={() => {InsertarRegistro(IdEmpleado, TipoMovimiento, IdJornada)}} value="Insertar" />
                    <a className="btn danger" onClick={() => {goRegistrosHome()}}>Cancelar</a>
                </form>
            </div>
        </div>
    );
}