import { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import instance from "../../extras/axiosconf"

export default function EditarPersona() {

    const [data, setData] = useState();

    const getPersona = async () => {
        let match = (window.location.href.match(/\d+$/));
        await instance(`/personas/${match}`).then((res) => {
            setData(res.data[0]);
        });
    }

    return (
        <div className="contenedor">
            <h1>Editar</h1>
            <div className="formContenedor">

                {data?.Nombre ? (
                    <form className='editForm'>
                        <label htmlFor="Nombre">Nombre: </label>
                        <input type="text" name="Nombre" id="" value={data.Nombre}/>

                        <label htmlFor="FechaNac">Fecha de Nacimiento: </label>
                        <input type="text" name="FechaNac" id="" value={data.FechaDeNacimiento}/>

                        <label htmlFor="Nombre">Genero: </label>
                        <input type="text" name="Nombre" id="" value={data.Genero}/>
                        
                        <input type="button" onClick={() => {}} value="Actualizar" />
                    </form>
                ) : <button onClick={() => {getPersona()}}>Obtener Datos</button>}

            </div>
                
                
        </div>
    )
}