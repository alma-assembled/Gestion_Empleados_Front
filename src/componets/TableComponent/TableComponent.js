import React from 'react';
import './TableComponent.css';
import  { useEffect, useState } from 'react';
import { LiaUserEditSolid } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import empleadosService from './../../services/empleados'
import {useNavigate } from 'react-router-dom';

const TableComponent = ({ data }) => {
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

  const deleteUser = (id) => {
    // Lógica para eliminar el usuario

    console.log("Eliminar usuario con ID:", id);
    // Aquí podrías hacer una llamada a la API para eliminar el usuario del servidor
    empleadosService.bajaEmpleado(id);
    // Actualizar el estado local después de eliminar el usuario
    const updatedData = filteredData.filter(user => user.id !== id);
    setFilteredData(updatedData);
    alert("Empleados dado de baja corecamente.");
  };

  const editUser = (id) => {
    console.log("Editar usuario con ID:", id);
    // Aquí podrías hacer una llamada a la API para eliminar el usuario del servidor
    navigate(`/empleados-add/${id}`);
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
            <th>Acciones</th>
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
                    className="btn btn-success btn-sm btn-block"
                    onClick={(e) => editUser(row.id)}
                  ><LiaUserEditSolid />
                  </button>
                  <button
                    className="btn btn-danger btn-sm btn-block"
                    onClick={(e) => deleteUser(row.id)}
                  ><MdDeleteOutline />
                  </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
