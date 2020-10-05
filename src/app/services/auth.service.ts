import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.50.175:4000';

const login = async (credentials: { login: string, password: string }) => {
    return await axios.post('/auth/sign-in', credentials);
}

const signUp = async (credentials: { login: string, password: string }) => {
    return await axios.post('/auth/sign-up', credentials);
}

export {
    login,
    signUp
}