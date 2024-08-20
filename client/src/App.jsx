import { useState } from 'react'
import './App.css'

function App() {
  const [error, setError] = useState("");

  return (
      <div className="justify-center	items-center mt-96">
          <div className='flex flex-col'>
              <h1 className="text-5xl font-bold mb-4">Gift List</h1>
              <div className="min-w-96 flex-row h-14">
                  <input type="text" className="p-3 border-solid border-gray-300 border-2 w-11/12 h-full" />
                  <button className='rounded-r-md bg-blue-500 h-full text-slate-700 p-2 hover:bg-blue-600 font-bold'>Check Gift</button>
              </div>
              <div className={`${!error ? "text-green-600":"text-red-600"} mt-4 self-start`}>{error}</div>
          </div>
      </div>
  );
}

export default App
