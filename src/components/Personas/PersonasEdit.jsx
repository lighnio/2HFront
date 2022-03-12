import { useState } from 'react';
import instance from "../../extras/axiosconf"

export default function EditarPersona() {

    const [data, setData] = useState();

    const [name, setName] = useState(null);
    const [date, setDate] = useState(null);
    const [gen, setGen] = useState(null);

    const getPersona = async () => {
        let id = (window.location.href.match(/\d+$/));
        await instance(`/personas/${id}`).then((res) => {
            setData(res.data[0]);
        });
    }

    const goPersonasHome = () => {
        window.location.replace('http://localhost:3000/personas')
    }

    const setPersona = async(name, date, gen) => {
        let put = {
            IdPersona: window.location.href.match(/\d+$/)[0],
            Nombre: name,
            FechaDeNacimiento: date,
            Genero: gen
        }
        await instance.put(`/personas/${put.IdPersona}`, put).then((res) => {
            console.log(res.status());
        }).catch(err => console.log(err))
        goPersonasHome();
    }

    return (
        <div className="contenedor">
            <h1>Editar</h1>
            <h3>Instrucciones: En los campos sin cambios, agrega un espacio al final o al principio.</h3>
            <div className="formContenedor">

                {data?.Nombre ? (
                    <form className='editForm'>
                        <label htmlFor="Nombre">Nombre: </label>
                        <input type="text" name="Nombre" id="" defaultValue={data.Nombre} onChange={(e) => {setName(e.target.value.trim())}}/>

                        <label htmlFor="FechaNac">Fecha de Nacimiento: </label>
                        <input type="text" name="FechaNac" id="" defaultValue={data.FechaDeNacimiento} onChange={(e) => {setDate(e.target.value.trim())}}/>

                        <label htmlFor="Nombre">Genero: </label>
                        <input type="text" name="Nombre" id="" defaultValue={data.Genero} onChange={(e) => {setGen(e.target.value.trim())}}/>
                        
                        <input type="button" className='btn info' onClick={() => {setPersona(name, date, gen)}} value="Actualizar" />
                        <a className="btn danger" onClick={() => {goPersonasHome()}}>Cancelar</a>
                    </form>
                ) : <a className="btn" onClick={() => {getPersona()}}>Obtener Datos</a>}

            </div>
                
                
        </div>
    )
}