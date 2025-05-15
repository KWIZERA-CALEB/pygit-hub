import { create } from 'zustand'
import { axiosInstance } from '@/utils/axios'
import toast from 'react-hot-toast'


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
            toast.success("Registered successfully", { 
                position: 'bottom-center',
                duration: 5000,            
                className: 'font-roboto text-[12px] font-bold cursor-pointer',
                style: {
                    color: '#fff',        
                    backgroundColor: '#15B392',
                    padding: '6px 20px', 
                },
            });
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
            set({ authUser: res.data })
            toast.success("Loggedin successfully", { 
                position: 'bottom-center',
                duration: 5000,            
                className: 'font-roboto text-[12px] font-bold cursor-pointer',
                style: {
                    color: '#fff',        
                    backgroundColor: '#15B392',
                    padding: '6px 20px', 
                },
            });
            console.log(`User after login data: ${res.data}`)
        } catch (error) {
            console.log(`Error ${error}`)
        } finally {
            set({ isSigningIn: false })
        }
    },
}))