import axios from "axios";

const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");
let REFRESH_TOKEN = localStorage.getItem("refreshToken");

export const UserApi = axios.create({
    //
    
});

const refreshAccessToken = async () => {
    //

}

UserApi.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    // 
});

export const fetchUser = async () => {
    const response = await UserApi.get(`/api/v1/user`);
    return response.data;
}

export const updateUser = async (data) => {
    const response = await UserApi.put(`/api/v1/user`, data);
    return response.data;
}

export const deleteUser = async () => {
    await UserApi.delete(`/api/v1/user`);
}
