import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchSingleFile } from "../services/repositoryService"
import Editor from "@monaco-editor/react";

const SingleFile = () => {
    const { repoName, username, filePath } = useParams() // file path like index.html
    const [fileContent, setFileContent] = useState('')
    const [loading, setLoading] = useState(false)
    const [language, setLanguage] = useState("plaintext");

    const extensionToLanguage = {
        ".js": "javascript",
        ".ts": "typescript",
        ".py": "python",
        ".java": "java",
        ".cpp": "cpp",
        ".cs": "csharp",
        ".json": "json",
        ".html": "html",
        ".css": "css",
        ".md": "markdown",
        ".sql": "sql",
        ".php": "php",
        ".rb": "ruby",
    };

    const getLanguageFromExtension = (filePath) => {
        const extension = filePath?.includes(".") ? `.${filePath.split(".").pop()}` : "";
        return extensionToLanguage[extension.toLowerCase()] || "plaintext";
    };

    const handleGetSingleFile = async () => {
        setLoading(true)
        try {
            const res = await fetchSingleFile(repoName, username, filePath)
            setFileContent(res.content)
            const detectedLanguage = getLanguageFromExtension(filePath);
            setLanguage(detectedLanguage);
            setLoading(false)
        } catch(error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        handleGetSingleFile()
    }, [repoName, filePath, username])

    return(
        <div>
            Single file: {filePath}
            {loading && <div>Loading...</div>}
            <Editor
                height="90vh"
                defaultLanguage={language}
                defaultValue={fileContent}
                theme="vs-dark"
                options={{
                    readOnly: true,
                    minimap: { enabled: true },
                    fontSize: 14,
                    lineNumbers: "on",
                    scrollBeyondLastLine: false,
                }}
            />
        </div>
    )
}

export default SingleFile