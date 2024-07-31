import React from 'react';
import './TableComponentInactivo.css';
import  { useEffect, useState } from 'react';
import { RiUserReceived2Line } from "react-icons/ri";
import {useNavigate } from 'react-router-dom';

const TableComponentInactivo = ({ data }) => {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();


  // useEffect para inicializar los datos una vez que se reciba 'data'
  useEffect(() => {
    if (data) {
      setFilteredData(data); // Inicializa filteredData con los datos recibidos
    }
  }, [data]); // Se ejecuta cada vez que 'data' cambia

  
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const filtered = data.filter(row => 
      row.nombre.toLowerCase().includes(e.target.value.toLowerCase()) ||
      row.puesto.toLowerCase().includes(e.target.value.toLowerCase()) || 
      row.pin.includes(e.target.value)
    );
    setFilteredData(filtered);
  };

  const reingresoUser = (id) => {
    console.log("Reingreso usuario con ID:", id);
    // Aquí podrías hacer una llamada a la API para eliminar el usuario del servidor
    navigate(`/empleados-reingreso/${id}`);
  };

  return (
    
    <div className="table-container">
      
      <div className="filter-form">
        <input 
          type="text" 
          placeholder="Buscar" 
          value={filter}
          onChange={handleFilterChange}
          className="filter-input"
        />
        <button className="filter-button">Buscar</button>
      </div>

      <table className="custom-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>N Empleado</th>
            <th>Puesto</th>
            <th>Reingreso</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) =>(
            <tr key={index}>
              <td>{row.nombre}</td>
              <td>{row.pin}</td>
              <td>{row.puesto}</td>
              <td>
                  <button
                    className="btn btn-warning btn-sm btn-block"
                    onClick={(e) => reingresoUser(row.id)}
                  ><RiUserReceived2Line />
                  </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponentInactivo;
