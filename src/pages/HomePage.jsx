import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div>
            HomePage
            <Link to='/repositories'>Go Repositories</Link>
        </div>
    )
}

export default HomePage