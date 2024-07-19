/*import React from 'react';
import './EmployeeStats.css'; // Ruta al archivo CSS donde has definido los estilos

const EmpleadoEstado = ({ employees }) => {
  // Lógica de conteo de empleados y géneros...

  return (
    <div className="employee-stats">
      <h3>Estadísticas de Empleados</h3>
      <ul>
        <li>Total de Empleados: {totalEmployees}</li>
        <li>Empleados Activos: {activeEmployees}</li>
        <li>Hombres: {maleEmployees}</li>
        <li>Mujeres: {femaleEmployees}</li>
      </ul>
    </div>
  );
};

export default EmpleadoEstado;*/
import React from 'react';
import './EmpleadoEstado.css'; 
import { FaPersonDress, FaPerson ,FaPeopleGroup } from "react-icons/fa6";

const EmpleadoEstado = () => {
  // Lógica de conteo de empleados y géneros...

  return (
    <div className="employee-stats">
      <h5>Estadísticas de Empleados</h5>
      <ul>
        <li><FaPeopleGroup />Empleados: 32</li>
        <li><FaPerson />Hombres: 6</li>
        <li><FaPersonDress />Mujeres: 26</li>
      </ul>
    </div>
  );
};

export default EmpleadoEstado;