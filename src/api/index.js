import axios from 'axios';

const API = axios.create({baseURL : 'http://localhost:5002'});

export const signin = async (formData) => {
    console.log(formData);
    const res = await API.post('/register/login', formData);
    localStorage.setItem("profile", JSON.stringify(res.data.token))
}

export const signup = async (formData) => {
    const res = await API.post('/register/signup', formData);
    localStorage.setItem("profile", JSON.stringify(res.data.token))
}

