import { create } from "zustand";
import { AxiosInstance } from "axios";
import { axiosInstance } from "@/utils/axios";

export const useRepoStore = create((set, get) => ({
    repositories: [],
    isFetchingRepositories: false,

    fetchRepositories: async () => {
        set({ isFetchingRepositories: true })
        try {
            const res = await axiosInstance.get('/api/repos/all')
            console.log(res)
            set({ repositories: res })
        } catch(error) {
            console.log(`Error ${error}`)
        } finally {
            set({ isFetchingRepositories: true })
        }
    }
}))