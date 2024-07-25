import CreateEmpleadoForm from './../../componets/CreateEmpleadoForm/CreateEmpleadoForm'
import empleadosService from './../../services/empleados'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const EmpleadosForm = () =>{
  const { id } = useParams();
  const [empleado, setEmpleado] = useState(null);
  const [empleados, setEmpleados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchEmpleado = async () => {
        try {
          const empleadoData = await empleadosService.getEmpleadoById(id);
          console.log(empleadoData.Empleado+ " ddd" )
          setEmpleado(empleadoData.Empleado);
        } catch (error) {
          console.error('Error fetching empleado:', error);
        }
      };
      fetchEmpleado();
    }
  }, [id]);

  const handleCreateEmployee = async (newEmployee) => {
    try {
      const createdEmployee = await empleadosService.crearEmpleado(newEmployee);
      setEmpleados([...empleados, createdEmployee]);
      console.log('Nuevo empleado creado:', createdEmployee);
      navigate('/');
    } catch (error) {
      console.error('Error creando empleado:', error);
    }
  };

  const handleEditEmployee = async (updatedEmployee) => {
    try {
      await empleadosService.actualizarEmpleado(id, updatedEmployee);
      setEmpleados(empleados.map(emp => emp.id === id ? updatedEmployee : emp));
      console.log('Empleado actualizado:', updatedEmployee);
      navigate('/');
    } catch (error) {
      console.error('Error actualizando empleado:', error);
    }
  };

  
  return (
      <div className="app-container">
        <h1 className='title' >Agregar Empleado</h1>
        <CreateEmpleadoForm 
        isEditing={!!id}
        initialData={empleado} 
        onEditEmployee={handleEditEmployee} 
        onCreateEmployee={handleCreateEmployee} />
      </div>
  );
}
export default EmpleadosForm