import Header from "../components/Header"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"
import { useNavigate } from "react-router"


function Login() {
    let [ email, setEmail ] = useState("")
    let [ password, setPassword ] = useState("")
    let [ message, setMessage ] = useState("")

    let navigate = useNavigate()

    async function handleLogin() {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/profile")   
        } catch (error) {
            setMessage("wrong password or email")
            console.log(error)
        }
    }

    return (
        <>
            <Header />
            <h3>{message}</h3>
            <div style={{
                width: "400px",
                margin: "50px auto 0px auto"
            }}>
                <h1>Login Page</h1>
                <br></br>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Email</span>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Password</span>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button onClick={handleLogin} className="btn btn-primary">Login</button>
            </div>
        </>
    )
}

export default Login