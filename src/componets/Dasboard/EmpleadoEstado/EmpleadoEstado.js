import React from 'react';
import './EmpleadoEstado.css'; 
import { FaPersonDress, FaPerson ,FaPeopleGroup } from "react-icons/fa6";
import empleadosService from './../../../services/empleados'

import  { useState,useEffect } from 'react'

const ConenidosEmpleadoEstado = () => {
  // Lógica de conteo de empleados y géneros...
  const [user, setUser] = useState(null)
  const [resumen, setResumen] = useState({
      maquiladores_hombres: 0,
      maquiladores_mujeres: 0,
      total_empleados: 0,
      total_maquiladores: 0
  });
    

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
      
        const fetchResumen = async () => {
          try {
            const resumenData = await empleadosService.getResumen();
            setResumen(resumenData.data);
          } catch (error) {
            console.error('Error fetching resumen:', error);
          }
        };
        fetchResumen();
      }, []);

  return (
    <div className="employee-stats">
      <h5>Estadísticas de Empleados</h5>
      <ul>
        <li><FaPeopleGroup />Empleados Total: {resumen.total_empleados} </li>
        <li><FaPerson />Total Maquiladores: {resumen.total_maquiladores}</li>
        <li><FaPerson />Maquiladores Hombres: {resumen.maquiladores_hombres}</li>
        <li><FaPersonDress />Maquiladores Mujeres: {resumen.maquiladores_mujeres}</li>
      </ul>
    </div>
  );
};

export default ConenidosEmpleadoEstado;