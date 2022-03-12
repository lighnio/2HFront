import axios from "axios";
import { useState } from "react"
import instance from '../../extras/axiosconf';

// **************
//   Components
// **************




export default function PersonasInsert() {
    const [data, setData] = useState([]);
    
    // **************
    //   Hooks
    // **************
    
    const [name, setName] = useState(null);
    const [date, setDate] = useState(null);
    const [gen, setGen] = useState(null);
      
    // **************
    //   Functions
    // **************

    const goPersonasHome = () => {
        window.location.replace('http://localhost:3000/personas')
    }

    const InsertarPersona = async () => {
        let post = {
            Nombre: name,
            FechaDeNacimiento: date,
            Genero: gen
        }
        await instance.post('/personas', post).then(res => {
            console.log(res.status());
        }).catch(err => console.log(err))
        goPersonasHome();
    }

    return ( 
        <div className="contenedor">
            <h1>Insertar Persona</h1>
            <div className="formContenedor">
                <form className='editForm'>
                    <label htmlFor="Nombre">Nombre: </label>
                    <input type="text" name="Nombre" id="" defaultValue={data.Nombre} onChange={(e) => {setName(e.target.value.trim())}}/>

                    <label htmlFor="FechaNac">Fecha de Nacimiento: </label>
                    <input type="text" name="FechaNac" id="" defaultValue={data.FechaDeNacimiento} onChange={(e) => {setDate(e.target.value.trim())}}/>

                    <label htmlFor="Nombre">Genero: </label>
                    <input type="text" name="Nombre" id="" defaultValue={data.Genero} onChange={(e) => {setGen(e.target.value.trim())}}/>
                    
                    <input type="button" className='btn success' onClick={() => {InsertarPersona(name, date, gen)}} value="Insertar" />
                    <a className="btn danger" onClick={() => {goPersonasHome()}}>Cancelar</a>
                </form>
            </div>
        </div>
     );
}
