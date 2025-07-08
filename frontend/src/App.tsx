import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          TOBEXC
        </h1>
        <p className="text-lg text-gray-700">
          University of Toronto Used Book Marketplace
        </p>
        <div className="mt-8 space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Browse Books
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Sell Books
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
