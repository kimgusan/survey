import axios from "axios";

// const API_SERVER = "http://localhost:8000/";
// const API_SERVER = "https://returnplus.kr:8888/";
const API_SERVER = "https://97a6-119-64-83-163.ngrok-free.app/";

// 기본 설정을 받아 axios 인스턴스 생성
export const createAxios = (configs) => {
    const INITIAL_CONFIGS = {
        baseURL: `${API_SERVER}`,
        withCredentials: true,
        headers: {
            "ngrok-skip-browser-warning": "any-value", // ngrok 경고 무시
        },
    };
    return axios.create(Object.assign(INITIAL_CONFIGS, configs));
};

// createAxios 함수를 사용해 새로운 axios 인스턴스 생성 (header에 필요한 값을 설정하여 인증에 필요한 값 생성)

// 인증이 필요한 요청을 위한 axios 인스턴스 생성
export const customAxios = (configs) => {
    return createAxios(configs);
};
