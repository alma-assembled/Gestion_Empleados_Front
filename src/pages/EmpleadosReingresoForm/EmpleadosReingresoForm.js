import TableComponent from '../../componets/TableComponent/TableComponent'
import empleadosService from '../../services/empleados'
import React, { useState, useEffect } from 'react'
   
const EmpleadosForm = () =>{
    const [user, setUser] = useState(null)
    const [empleados, setEmpleados] = useState([])

    // Leer los datos de localStorage al cargar el componente
    useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem('loggedRhAppUser')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        empleadosService.setToken(user.token)
      }
    }, [])

    useEffect(() => {
        empleadosService.getAll()
          .then(initialEmpleados => {
            setEmpleados(initialEmpleados.Empleado); // Actualiza el estado con los empleados recibidos
          })
          .catch(error => {
            console.error('Error fetching empleados:', error);
          });
      }, []);

    return (
        <div>
            <h1 className='title'>Empleados</h1>
            <TableComponent data={empleados}/>
        </div>
    )
}
export default EmpleadosForm