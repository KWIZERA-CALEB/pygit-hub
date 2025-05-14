import { create } from 'zustand'
import { axiosInstance } from '@/utils/axios'

// const BASE_URL = process.env.NEXT_PUBLIC_APP_BASIC_API_ENDPOINT

interface useAuthStoreTypes {
    authUser: null | unknown;
    isSigningUp: boolean;
    isSigningIn: boolean;
    signup: (data: { email: string; username: string; password: string;  }) => Promise<void>;
    signin: (data: { username: string; password: string; }) => Promise<void>;
}

export const useAuthStore = create<useAuthStoreTypes>((set, get) => ({
    authUser: null,
    isSigningUp: false,
    isSigningIn: false,

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post("/api/register", data);
            console.log(res)
        } catch (error) {
            console.log(`Error ${error}`)
        } finally {
            set({ isSigningUp: false });
        }
    },

    signin: async (data) => {
        set({ isSigningIn: true })
        try {
            const res = await axiosInstance.post("/api/login", data);
            console.log(res)
        } catch (error) {
            console.log(`Error ${error}`)
        } finally {
            set({ isSigningIn: false })
        }
    },
}))