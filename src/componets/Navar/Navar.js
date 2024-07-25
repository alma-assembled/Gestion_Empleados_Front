import './../Navar/Navar.css'
import React from 'react';
import { HiOutlineLockClosed } from "react-icons/hi2";
import { PiUserBold } from "react-icons/pi";

const Navar = () => {

    const handleLogout = () => {
        window.localStorage.removeItem('loggedRhAppUser');
        alert("Sesión cerrada");
        window.location.reload();
    };
  
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}><PiUserBold  className="logout-icon" />Cerrar Sesión <HiOutlineLockClosed className="logout-icon"/></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navar;