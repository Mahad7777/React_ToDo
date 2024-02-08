import { useState } from 'react'
import './App.css'

function App() {


  return (
<>
<div class="bg-gray-800 min-h-screen py-8">
  <div class="max-w-md mx-auto">
    <form class="mb-4">
      <label class="text-white">New item</label><br/>
      <input type='text' placeholder='Write task' class="border border-blue-500 rounded-md bg-blue-100 px-4 py-2 w-full mb-2 text-gray-800"></input><br/>
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Add</button>
    </form>
    <div>
      <h2 class="text-xl font-semibold text-white mb-2">Tasks:</h2>
      <ul>
        <li class="flex items-center justify-between bg-gray-700 rounded-md px-4 py-2 mb-2">
          <label class="flex items-center text-white">
            <input type='checkbox' class="mr-2"></input>
            Item 1
          </label>
          <div>
            <button class="border border-green-500 text-green-500 px-3 py-1 rounded-md">Update</button>
            <button class="border border-red-500 text-red-500 px-3 py-1 ml-3 rounded-md">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

</>


  )
}

export default App
