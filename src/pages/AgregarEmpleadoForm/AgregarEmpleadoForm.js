import CreateEmpleadoForm from './../../componets/CreateEmpleadoForm/CreateEmpleadoForm'
import empleadosService from './../../services/empleados'
import React, { useState, useEffect } from 'react'

const EmpleadosForm = () =>{
    const [empleados, setEmpleados] = useState([]);
    const handleCreateEmployee = (newEmployee) => {
        // Agregar el nuevo empleado al estado de empleados
        setEmpleados([...empleados, newEmployee]);
        // Aquí podrías enviar los datos a tu backend o realizar cualquier otra acción necesaria
        console.log('Nuevo empleado creado:', newEmployee);
      };
    
    return (
        <div className="app-container">
          <h1 className='title' >Agregar Empleado</h1>
          <CreateEmpleadoForm onCreateEmployee={handleCreateEmployee} />
          {/* Aquí podrías mostrar la tabla de empleados u otros componentes */}
        </div>
    );
}
export default EmpleadosForm