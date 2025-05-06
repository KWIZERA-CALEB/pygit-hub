import { Routes, Route } from 'react-router-dom'
import RepositoriesPage from './pages/RepositoriesPage'
import HomePage from './pages/HomePage'
import SingleRepository from './pages/SingleRepository'
import SingleFile from './pages/SingleFile'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repositories" element={<RepositoriesPage />} />
        <Route path="/repositories/:repoId" element={<SingleRepository />} />
        <Route path="/repositories/:username/:repoName/files/:filePath" element={<SingleFile />} />
      </Routes>
    </div>
  )
}

export default App