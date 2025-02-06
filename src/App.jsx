import './App.css'
import { Route, Routes} from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>
  )
}

export default App