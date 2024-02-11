import { useEffect, useState } from 'react'
import './App.css'
import NewTaskForm from './NewTaskForm'
import TodoList from './TodoList'

function App() {
  const [todo, setTodo] = useState(()=>{
    const localval = localStorage.getItem("ITEMS")
    if (localval == null) return []
    return JSON.parse(localval)
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todo))
  },[todo])

  function addTodo(title){
    setTodo((currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title, completed: false }]
  })
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
// async
  function deleteTodo(id){
    const updatedTodos = currentTodo.filter(todo => todo.id !== id);
    setTodo(updatedTodos);
    }

  return (
    <>
      <div className="bg-gray-800 min-h-screen py-8">
        <div className="max-w-md mx-auto">
        <NewTaskForm customprop={addTodo}/>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Tasks:</h2>
            <TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoList>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
