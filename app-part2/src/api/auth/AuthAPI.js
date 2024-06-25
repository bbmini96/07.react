import axios from "axios";

const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");

export const AuthApi = axios.create({
    //
    baseURL: `http://localhost:8088`,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const login = async ({ username, password }) => {
    // 
    const data = {username, password};
    const response =await AuthApi.post(`/api/v1/auth/login`, data);
    return response.data;
}

export const signUp = async ({ username, password }) => {
    // 
    const data = {username, password};
    const response =await AuthApi.post(`/api/v1/auth/signup`, data);
    return response.data;
}
