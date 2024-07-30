import axios from 'axios';

const baseUrl = 'http://192.168.1.200:5050'//'http://127.0.0.1:5000/auth/';

const login = async (credentials) => {
    const { data } = await axios.post(baseUrl, credentials);
    return data;
};

const loginService = {
    login
};

export default loginService;
