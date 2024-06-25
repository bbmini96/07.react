import axios from "axios";

const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");

export const AuthApi = axios.create({
    //

});

export const login = async ({ username, password }) => {
    // 
    return {};
}

export const signUp = async ({ username, password }) => {
    // 
    return {};
}
