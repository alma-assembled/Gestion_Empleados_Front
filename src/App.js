import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Login from './componets/Login/Login'
import loginService from './services/login'
import Notification from './componets/SimpleNotification/SimpleNotification'
import Sidebar from './componets/Sidebar/Sidebar'
import Navar from './componets/Navar/Navar'
import HomeForm from './pages/HomeForm/HomeForm'
import EmpleadosForm from './pages/EmpleadosForm/EmpleadosFrom'
import AgregarEmpleadoForm from'./pages/AgregarEmpleadoForm/AgregarEmpleadoForm'

//import empleadosService from './services/empleados'

import './App.css'

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedRhAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      //empleadosService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password
      })
  
      window.localStorage.setItem(
        'loggedRhAppUser', JSON.stringify(user)
      )

      //empleadosService.setToken(user.token)

      setUser(user)
      setUsername('')
      setPassword('')
    } catch(e) {
      setErrorMessage('Credenciales erroneas')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <div className="App">
      <div>
        {
          user
            ? 
            <Router>
              <div className='conainer'>
                <Sidebar />
                <div  className="nav">
                   <Navar />
                </div>
                <div className='contenidoPrincipal'>
                  <Routes>
                    <Route path='/'  exact="true" element={<HomeForm/>} />
                    <Route path='/empleados'  exact="true" element={<EmpleadosForm/>} />
                    <Route path='/empleados-add' exact="true" element={<AgregarEmpleadoForm/>} />
                  </Routes>
                </div>
              </div>
            </Router>
            :
             <Login
                username={username}
                password={password}
                handleUsernameChange={
                  ({target}) => setUsername(target.value)}
                handlePasswordChange={
                  ({target}) => setPassword(target.value)
                }
                handleSubmit={handleLogin}
              />
        }
        <Notification message={errorMessage} />
        </div>
      </div>
  );
}

export default App