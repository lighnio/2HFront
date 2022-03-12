import {NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navigation">
        <NavLink to="/personas">Personas</NavLink>
        <NavLink to="/empleados">Empleados</NavLink>
        </nav>
    );
}
