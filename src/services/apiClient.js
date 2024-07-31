import axios from 'axios';

// Crear una instancia de axios
const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:5050',
    //baseURL: 'http://192.168.1.200:5050',
    headers: {
        'Content-Type': 'application/json',
    }
});
let isAlreadyAlerted = false;
// Agregar un interceptor de respuesta
const setupInterceptors = () => {
    apiClient.interceptors.response.use(
        response => response,
        error => {
            if (error.response && error.response.status === 401 ) {
                if (!isAlreadyAlerted) {
                    isAlreadyAlerted = true;
                    alert('Tu sesión ha caducado. Por favor, inicia sesión nuevamente.');
                    window.localStorage.removeItem('loggedRhAppUser');
                    window.location.reload();
                }
            }
            return Promise.reject(error);
        }
    );
};

export { apiClient, setupInterceptors };