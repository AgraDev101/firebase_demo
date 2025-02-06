import Header from "../components/Header"

function Login() {
    return (
        <>
            <Header />
            <div style={{
                width: "400px",
                margin: "50px auto 0px auto"
            }}>
                <h1>Login Page</h1>
                <br></br>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Email</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Password</span>
                    <input type="password" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button className="btn btn-primary">Login</button>
            </div>
        </>
    )
}

export default Login