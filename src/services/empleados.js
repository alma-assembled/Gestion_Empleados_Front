//import axios from 'axios'
import { apiClient } from './apiClient'
import Swal from 'sweetalert2';


//const baseUrl ='http://127.0.0.1:5050/empleados/' 
const baseUrl = 'http://192.168.1.200:5050/empleados/'
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
  const request = apiClient.get(baseUrl,config)
  return request.then(response => response.data)
}
const getAll_Inactivos = () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request = apiClient.get(`${baseUrl}inactivos`,config)
  return request.then(response => response.data)
}

const getEmpleadoById =(id) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request =  apiClient.get(`${baseUrl}${id}` ,config)
  return request.then(response => response.data)
}

const crearEmpleado = async (newObject) => {
  try {
    const config = {
      headers: {
        Authorization: token
      }
    }
    const request = await apiClient.post(baseUrl, newObject, config);
    const data = request.data;
    
    if (data && data.success === false && data.message === "Empleado Existente en Sistema") {
      Swal.fire({
        icon: 'error',
        title: 'Empleado Existente',
        text: data.message,
      });
    } else if (data.success === true) {
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Empleado creado exitosamente',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al crear el empleado. Inténtalo de nuevo.',
      });
    }
    
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un error al crear el empleado. Inténtalo de nuevo.',
    });
  }
}

const updatedEmpleado =  async (id, newObject) => {
  const config = {
    headers: { 
      Authorization: token
    }
  }

  const request = await  apiClient.put(`${baseUrl}${id}`, newObject, config)
  const data = request.data;
    
  if (data &&  data.success === true && data.message === "Empleado actualizado correctamente") {
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Empleado acctualizado exitosamente.',
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un error al actualizar el empleado.',
    });
  }

  return request.data;
}
const ReingresoEmpleado =  async (id, newObject) => {
  const config = {
    headers: { 
      Authorization: token
    }
  }

  const request = await  apiClient.put(`${baseUrl}reingreso/${id}`, newObject, config)
  const data = request.data;
    
  if (data &&  data.success === true && data.message === "Empleado actualizado correctamente") {
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Empleado con alta exitosamente.',
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un error al dar de alta a  el empleado.',
    });
  }

  return request.data;
}

const getPuestosAll = () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request =   apiClient.get(baseUrl+"puestos",config)
  return request.then(response => response.data)
}

const getBancosAll = () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request =  apiClient.get(baseUrl+"bancos",config)
  return request.then(response => response.data)
}

const bajaEmpleado = async(id, newObject) => {
  try {
    const config = {
      headers: {
        Authorization: token
      }
    }

    const request = await apiClient.put(`${baseUrl}baja-empleado/${id}`, newObject, config)
    const data = request.data;
    /*return request.then(response => response.data)*/
    if (data &&  data.success === true ) {
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Empleado dado de baja con exito.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al dar de baja el empleado.',
      });
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un error al dar de baja el empleado.',
    });
  }
}

const getCumpleaAll = () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request =  apiClient.get(baseUrl+"cumple",config)
  return request.then(response => response.data)
} 

const getResumen = () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request =  apiClient.get(baseUrl+"resumen",config)
  return request.then(response => response.data)
}
export default { getAll,getAll_Inactivos, getEmpleadoById, crearEmpleado, updatedEmpleado,ReingresoEmpleado, setToken, getPuestosAll , getBancosAll, bajaEmpleado, getResumen, getCumpleaAll}