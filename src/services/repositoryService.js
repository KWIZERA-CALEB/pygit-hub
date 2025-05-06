import axios from 'axios'

export const fetchAllRepositories = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/repos/all')
        return response.data
    } catch(error) {
        console.log(error)
    }
}


export const fetchSingleRepository = async (repoId) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/repo/${repoId}`)
        return response.data
    } catch(error) {
        console.log(error)
    }
}


export const fetchSingleFile = async (repoName, repoOwner, filePath) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/repos/${repoOwner}/${repoName}/file?path=${filePath}`)
        return response.data
    } catch(error) {
        console.log(error)
    }
}