import { useState, useEffect } from 'react'
import './App.css'

// **************
//   Components
// **************
import Personas from './components/Personas/Personas';


export default function App() {
  return (
    
    <div className="App">
      <h1>Personas</h1>
      <Personas></Personas>
    </div>

  )
}