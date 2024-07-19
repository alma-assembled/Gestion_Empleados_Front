import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import PropTypes from 'prop-types'
import React from 'react'
import Togglable from './../Togglable/Togglable.js'
import i18n from '../../i18n/index.js'


export default function Login({handleSubmit, ...props}) {
  return (
    <div className="containerForm">
      <h1 className="modern-title">{i18n.GENERAL.NOMBRE_SISTEMA}</h1>
      <div className="form-content">
      <Togglable buttonLabel={i18n.TOGGABLE.SHOW_LOGIN_BUTTON}>
          <div className="contenedor">
            <form onSubmit={handleSubmit}>
              <h1>Login</h1>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Usuario"
                  required
                  value={props.username}
                  onChange={props.handleUsernameChange}
                />
                <FaUser className="icon" />
              </div>
              <div className="input-field">
                <input
                  type="password"
                  placeholder="Contraseña"
                  required
                  value={props.password}
                  onChange={props.handlePasswordChange}
                />
                <FaLock className="icon" />
              </div>
              <button id='form-login-button' type="submit">
                Login
              </button>
            </form>
          </div>      
      </Togglable></div>
    </div>
  )
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string,

}