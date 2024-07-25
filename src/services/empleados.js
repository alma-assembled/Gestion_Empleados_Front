import axios from 'axios'
const baseUrl = 'http://127.0.0.1:5000/empleados/'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request = axios.get(baseUrl,config)
  return request.then(response => response.data)
}
const getEmpleadoById = (id) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request = axios.get(`${baseUrl}${id}` ,config)
  return request.then(response => response.data)
}

const crearEmpleado = (newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request = axios.post(baseUrl, newObject, config)
  console.log(newObject)
  return request.then(response => response.data)
}

const updatedEmpleado = (id, newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.put(`${baseUrl}${id}`, newObject, config)
  return request.then(response => response.data)
}

const getPuestosAll = () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request = axios.get(baseUrl+"puestos",config)
  return request.then(response => response.data)
}

const getBancosAll = () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request = axios.get(baseUrl+"bancos",config)
  return request.then(response => response.data)
}

const bajaEmpleado = (id, newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.put(`${baseUrl}baja-empleado/${id}`, newObject, config)
  return request.then(response => response.data)
}

export default { getAll, getEmpleadoById, crearEmpleado, updatedEmpleado, setToken, getPuestosAll , getBancosAll, bajaEmpleado}