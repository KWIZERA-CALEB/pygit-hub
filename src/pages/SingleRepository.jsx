import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchSingleRepository } from "../services/repositoryService"

const SingleRepository = () => {
    const { repoId } = useParams()
    const [loading, setLoading] = useState(false)
    const [currentRepo, setCurrentRepo] = useState({})

    console.log(repoId)

    
    const handleFetchSingleRepo = async () => {
        setLoading(true)
        try {
            const res = await fetchSingleRepository(repoId)
            console.log(`res: ${res}`)
            setCurrentRepo(res.fetchedRepo)
            setLoading(false)
        } catch(error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        console.log("useEffect running with repoId:", repoId)
        handleFetchSingleRepo()
    }, [])
    

    // console.log(`current repo: ${currentRepo}`)

    return (
        <div>
            Single repository: {repoId}
            {loading && <div>Loading...</div>}

            <hr />
            Repo Name: {currentRepo.repoName}
            Owner: {currentRepo.username}
            <hr />
            Repository Commits:
            {currentRepo.commits && Array.isArray(currentRepo.commits) && currentRepo.commits.length > 0 ? (
                currentRepo.commits.map((commit, index) => (
                <div key={index}>
                    Commit Message: {commit.message}
                    Date: {commit.date}
                </div>
                ))
            ) : (
                <div>No commits available</div>
            )}
            Files:
            {currentRepo.files && Array.isArray(currentRepo.files) && currentRepo.files.length > 0 ? (
                currentRepo.files.map((file) => (
                    <div key={file._id}><Link to={`/repositories/${currentRepo.username}/${currentRepo.repoName}/files/${file.path}`}>{file.name}</Link></div>
                ))
            ) : (
                <div>No files</div>
            )}
        </div>
    )
}

export default SingleRepository