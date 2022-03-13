import {NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navigation">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/personas">Personas</NavLink>
        <NavLink to="/empleados">Empleados</NavLink>
        <NavLink to="/registros">Registros</NavLink>
        <NavLink to="/planilla">Planilla</NavLink>
        <NavLink to="/bitacora">Bitacora</NavLink>
        </nav>
    );
}
