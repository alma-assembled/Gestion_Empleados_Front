import React, { useState, useEffect } from 'react';
import empleadosService from '../../../services/empleados';
import './Cumpleaneros.css';

const Cumpleaneros = () => {
  const [user, setUser] = useState(null);
  const [cumpleaneros, setCumpleaneros] = useState([]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedRhAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      empleadosService.setToken(user.token);
    }
  }, []);

  useEffect(() => {
    const fetchCumpleaneros = async () => {
      try {
        const data = await empleadosService.getCumpleaAll();
        setCumpleaneros(data.data);
      } catch (error) {
        console.error('Error fetching cumpleañeros:', error);
      }
    };

    fetchCumpleaneros();
  }, []);

  return (
    <div className="cumpleaneros-container">
      <h5>Empleados que cumplen años este mes</h5>
      <ul className="cumpleaneros-list">
        {cumpleaneros.map(empleado => (
          <li key={empleado[0]} className="cumpleanero-item">
            <span className="cumpleanero-name">{empleado[1]}</span>
            <span className="cumpleanero-date">{empleado[2]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cumpleaneros;
