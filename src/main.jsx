import {render} from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// **************
//   Components
// **************

// General
import Navigation from './components/Navigation';

// Personas
import Personas from './components/Personas/Personas';
import PersonasEdit from './components/Personas/PersonasEdit';
import PersonasInsert from './components/Personas/PersonasInsert';

// Empleados
import Empleados from './components/Empleados/Empleados';

import './index.css'
import App from './App'
import EmpleadosEdit from './components/Empleados/EmpleadosEdit';
import EmpleadosInsert from './components/Empleados/EmpleadosInsert';
import Registros from './components/Registro/Registros';

const rootElement = document.getElementById('root');
render(
  
  <div>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      
      {/* Index Route */}
      <Route path='/' element={<App />} />

      {/* Personas Routes */}
      <Route path='personas' element={<Personas />} />
      <Route path='personas/editar/:id' element={<PersonasEdit/>} />
      <Route path='personas/insertar/' element={<PersonasInsert/>}></Route>

      {/* Empleados Routes */}
      <Route path='empleados' element={<Empleados />} />
      <Route path='empleados/editar/:id' element={<EmpleadosEdit />} />
      <Route path='empleados/insertar/' element={<EmpleadosInsert />} />

      {/* Registro Routes */}
      <Route path='registros/' element={<Registros />} />

    </Routes>
  </BrowserRouter>
  </div>,
  rootElement
)
