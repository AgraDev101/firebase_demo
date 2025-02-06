import { NavLink } from "react-router"
import Login from "../pages/Login"
import Register from '../pages/Register'
import Profile from '../pages/Profile'

function Header() {

    let linkStyle = {
        fontWeight: "bold"
    }

    return (
        <> 
            <h1>Header</h1>
            <ul>
                <li style={location.pathname == "/" ? linkStyle : null}>
                    <NavLink to="/" element={<Login />}>Login</NavLink>
                </li>
                <li style={location.pathname == "/register" ? linkStyle : null}>
                    <NavLink to="/register" element={<Register />}>Register</NavLink>
                </li>
                <li style={location.pathname == "/profile" ? linkStyle : null}>
                    <NavLink to="/profile" element={<Profile />}>Profile</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Header