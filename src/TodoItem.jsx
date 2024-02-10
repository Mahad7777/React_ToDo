
export default function todoitem({id,completed,title,toggleTodo,deleteTodo }){
    return (
        <li className="flex items-center justify-between bg-gray-700 rounded-md px-4 py-2 mb-2">
            <label className="flex items-center text-white">
                <input type='checkbox'
                    onChange={e => toggleTodo(id, e.target.checked)}
                    checked={completed} className="mr-2"></input>
                    {title}
            </label>
            <div>
                {/* <button class="border border-green-500 text-green-500 px-3 py-1 rounded-md">Update</button> */}
                <button onClick={() => deleteTodo(id)} className="border border-red-500 text-red-500 px-3 py-1 ml-3 rounded-md">Delete</button>
            </div>
        </li>
    )
}