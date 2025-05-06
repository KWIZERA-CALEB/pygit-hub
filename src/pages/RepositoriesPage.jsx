import { useState, useEffect } from 'react'
import { fetchAllRepositories } from "../services/repositoryService"
import { Link } from 'react-router-dom'

const RepositoriesPage = () => {
    const [repositories, setRepositories] = useState([])
    const [loading, setLoading] = useState(false)

    const handleRetrieveRepositories = async () => {
        setLoading(true)
        try {
            const repositoriesGot = await fetchAllRepositories()
            console.log(repositoriesGot)
            setRepositories(repositoriesGot.repositories)
            setLoading(false)
        } catch(error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        handleRetrieveRepositories()
    }, [])

    return (
        <div>
            Repositories
            <hr />
            {loading && <div>Loading ...</div>}
            <div>
                {repositories.map((repo) => (
                    <div
                        className="border-solid border-gray-400 border-[1px]"
                        key={repo._id}
                    >
                        Name: {repo.repoName}
                        Creator: {repo.username}
                        <Link to={`/repositories/${repo._id}`}>Link</Link>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RepositoriesPage