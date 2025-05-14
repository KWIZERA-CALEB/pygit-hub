import axios from 'axios'

const BASE_API_URL = process.env.NEXT_PUBLIC_APP_BASIC_API_ENDPOINT

export const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
    withCredentials: false,
})