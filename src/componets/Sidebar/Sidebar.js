import React from 'react';
import { NavLink } from 'react-router-dom';
import { LiaHomeSolid , LiaUserFriendsSolid } from "react-icons/lia";
import { IoPersonAddOutline } from "react-icons/io5";
import './../Sidebar/Sidebar.css'
import logo from '../../recursos/assembled.jpg';
import { TbUserOff } from "react-icons/tb";

const Sidebar =() =>{
  return(
      <div className="sidebar">
          <div className='logo-container'>
            <img src={logo} alt="Logo" className="logo" />
            <div className='contenido_icono'>
              <h6>Gestor Rh </h6>
              <h6 className="small-letters">Assembled As Your Need</h6>
            </div>
          </div>
          <ul>
            <li>
              <NavLink  
                to="/"
                className={({ isActive }) =>
                `rounded py-2 w-100 d-inline-block px-3 ${isActive ? 'active' : ''}`}
                >
                <LiaHomeSolid className="me-2 icon" />Inicio
              </NavLink>
            </li>
            <li>
              <NavLink 
              to="/empleados" 
              className={({ isActive }) =>
                `rounded py-2 w-100 d-inline-block px-3 ${isActive ? 'active' : ''}`}
               >
                <LiaUserFriendsSolid className="me-2 icon"/>Empleados
               </NavLink>
            </li>
            <li>
              <NavLink 
              to="/empleados-add" 
              className={({ isActive }) =>
                `rounded py-2 w-100 d-inline-block px-3 ${isActive ? 'active' : ''}`}
              >
                <IoPersonAddOutline className="me-2 icon"/>Agregar Empleados
              </NavLink>
            </li>
            <li>
              <NavLink 
              to="/reingreso" 
              className={({ isActive }) =>
                `rounded py-2 w-100 d-inline-block px-3 ${isActive ? 'active' : ''}`}
              >
                <TbUserOff className="me-2 icon"/>Reingreso Empleados
              </NavLink>
            </li>
          </ul>
      </div>
  )
}
export default Sidebar