import React from 'react'

const App: React.FC = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
      <div className="max-w-md mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Electron + React App</h1>
        <p className="text-gray-600 dark:text-gray-300">
          This is an Electron desktop application with React and TypeScript.
        </p>
        <button
          onClick={() => window.electronAPI.ping()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Ping Main Process
        </button>
      </div>
    </div>
  )
}

export default App