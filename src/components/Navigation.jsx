import {NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navigation">
        <NavLink to="/empleados">Empleados</NavLink>
        <NavLink to="/personas">Personas</NavLink>
        </nav>
    );
}