import { useState } from 'react'
import './App.css'

function App() {
  const [newItem, setNewItem] = useState("")
  const [todo, setTodo] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodo((currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false }]
    })
    setNewItem("") // Clear the input field after submitting
  }

  function toggleTodo(id,completed){
    setTodo(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodo(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <div className="bg-gray-800 min-h-screen py-8">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="mb-4">
            <label className="text-white">New item</label><br/>
            <input 
              type='text' 
              value={newItem}
              onChange={e => setNewItem(e.target.value)}
              className="border border-blue-500 rounded-md bg-blue-100 px-4 py-2 w-full mb-2 text-gray-800"
            /><br/>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Add</button>
          </form>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Tasks:</h2>
            <ul>
              {todo.map(todoItem => {
                return (
                  <li key={todoItem.id} className="flex items-center justify-between bg-gray-700 rounded-md px-4 py-2 mb-2">
                    <label className="flex items-center text-white">
                      <input type='checkbox'
                      onChange={e => toggleTodo(todoItem.id, e.target.checked)}
                      checked={todoItem.completed} className="mr-2"></input>
                      {todoItem.title}
                    </label>
                    <div>
                      {/* <button class="border border-green-500 text-green-500 px-3 py-1 rounded-md">Update</button> */}
                      <button onClick={() => deleteTodo(todoItem.id)} className="border border-red-500 text-red-500 px-3 py-1 ml-3 rounded-md">Delete</button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
