import Header from "../components/Header"
import { auth, db } from "../../firebase"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { useState, useEffect } from "react"

function Profile() {

    let [ task, setTask ] = useState("")

    const userRef = collection(db, "userData")

    async function addTask() {
        await addDoc(userRef, {
            completed: false,
            name: "name 1",
            task: task,
            uid: auth.currentUser.uid
        })
    }

    async function getTask() {
        try {
            const data = await getDocs(userRef)
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            console.log(filteredData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTask()
    }, [])

    // console.log(auth.currentUser.email)
    if (!auth.currentUser) {
        return (
            <>
                <Header />
                <div style={{
                width: "400px",
                margin: "50px auto 0px auto"
            }}>
                <h1>Not logged in</h1>
                </div>
            </>
        )
    }

    return (
        <>
            <Header />
            <div style={{
                width: "400px",
                margin: "50px auto 0px auto"
            }}>
                <h1>Profile Page</h1>
                <br></br>
                <h3>Hello {auth.currentUser.email}</h3>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Task</span>
                    <input onChange={(e) => setTask(e.target.value)} type="text" class="form-control" placeholder="Enter Task" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button className="btn btn-primary btn-sm" onClick={addTask}>Submit Task</button>
            </div>
        </>
    )
}

export default Profile