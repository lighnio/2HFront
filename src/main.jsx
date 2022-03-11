import {render} from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// **************
//   Components
// **************
import Personas from './components/Personas';
import Empleados from './components/Empleados';
import Navigation from './components/Navigation';

import './index.css'
import App from './App'

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
      <Route path='/' element={<App />} />
      <Route path='empleados' element={<Empleados />} />
      <Route path='personas' element={<Personas />} />
    </Routes>
  </BrowserRouter>
  </div>,
  rootElement
)
