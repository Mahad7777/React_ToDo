import TodoItem from "./TodoItem"

export default function TodoList({todo, toggleTodo, deleteTodo}){
    
    return (
        <ul>
            {todo.length === 0 && <span className="text-yellow-200">Nothing to worry about today</span>}
            {todo.map(todoItem => {
                return (
                    <TodoItem 
                    {...todoItem} 
                    key = {todoItem.id}
                    toggleTodo={toggleTodo} 
                    deleteTodo={deleteTodo} > </TodoItem>
                )
            })}
            </ul>
    )
}