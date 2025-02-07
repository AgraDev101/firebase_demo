import { NavLink } from "react-router"
import Login from "../pages/Login"
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"
import { useNavigate } from "react-router"

function Header() {

    let navigate = useNavigate()

    let linkStyle = {
        fontWeight: "bold"
    }

    async function handleSignOut() {
        await signOut(auth)
        navigate("/")
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
                <li>
                    <button onClick={handleSignOut} className="btn btn-primary btn-sm">Logout</button>
                </li>
            </ul>
        </>
    )
}

export default Header