import React from 'react';
import { NavLink } from 'react-router-dom';
import { LiaHomeSolid , LiaUserFriendsSolid } from "react-icons/lia";
import { IoPersonAddOutline } from "react-icons/io5";
import './../Sidebar/Sidebar.css'
import logo from '../../recursos/assembled.jpg';
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
              <NavLink  to="/" exact className=' rounded py-2 w-100 d-inline-block px-3' activeClassName="active"><LiaHomeSolid className="me-2 icon" />Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/empleados" exact className=' rounded py-2 w-100 d-inline-block px-3' activeClassName="active" ><LiaUserFriendsSolid className="me-2 icon"/>Empleados</NavLink>
            </li>
            <li>
              <NavLink to="/empleados-add" exact className=' rounded py-2 w-100 d-inline-block px-3' activeClassName="active" ><IoPersonAddOutline className="me-2 icon"/>Agregar Empleados</NavLink>
            </li>
          </ul>
      </div>
  )
}
export default Sidebar