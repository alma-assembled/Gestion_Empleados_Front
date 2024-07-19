import React from 'react';
import './TableComponent.css';
import  { useEffect, useState } from 'react';

const TableComponent = ({ data }) => {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);

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
      row.n_empledo.includes(e.target.value)
    );
    setFilteredData(filtered);
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
              <td>{row.n_empledo}</td>
              <td>{row.puesto}</td>
              <td>
                  <button
                    className="btn btn-success  btn-sm btn-block"
                    /*onClick={(e) => editUser(user._id)}**/
                  >
                    ver
                  </button>
                  <button
                    className="btn btn-secondary btn-sm btn-block"
                    /*onClick={(e) => editUser(user._id)}**/
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm btn-block"
                    /*onClick={(e) => deleteUser(user._id)}*/
                  >
                    Baja
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
