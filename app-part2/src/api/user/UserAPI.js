import axios from "axios";

const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");
let REFRESH_TOKEN = localStorage.getItem("refreshToken");

export const UserApi = axios.create({
    //
    baseURL: `http://localhost:8088`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `${TOKEN_TYPE} ${ACCESS_TOKEN}`,    // 토큰타입과 accesstoken과 띄어쓰기가 꼭있어야한다
        'REFRESH_TOKEN': REFRESH_TOKEN
    }
});

const refreshAccessToken = async () => {
    //
    const response = await UserApi.get("/api/auth/refresh");
    ACCESS_TOKEN = response.data;
    localStorage.setItem = ('accessToken', ACCESS_TOKEN);
    UserApi.defaults.headers['Authorization'] = `${TOKEN_TYPE} ${ACCESS_TOKEN}`;
}

// return - axios.interceptor - then
UserApi.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
        await refreshAccessToken();
        return UserApi(originalRequest);
    }

    return Promise.reject(error);
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
