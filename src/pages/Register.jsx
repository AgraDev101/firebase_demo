import Header from "../components/Header"
import { auth } from "../../firebase"
import { useNavigate } from "react-router"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

function Register() {
    let [ email, setEmail ] = useState("")
    let [ password, setPassword ] = useState("")
    let [ message, setMessage ] = useState("")

    let navigate = useNavigate()

    async function handleRegister() {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate("/")
        } catch (error) {
            console.log(error)
            setMessage("Error in registering")
        }
    }

    // console.log(auth.currentUser.email)

    return (
        <>
            <Header />
            <div>
                <h3>{message}</h3>
            </div>
            <div style={{
                width: "400px",
                margin: "50px auto 0px auto"
            }}>
                <h1>Register Page</h1>
                <br></br>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Email</span>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Password</span>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button className="btn btn-primary" onClick={handleRegister}>Register</button>
            </div>
        </>
    )
}

export default Register