import { useState } from "react"


export default function NewTaskForm({customprop}){
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        customprop(newItem)

        setNewItem("") // Clear the input field after submitting
    }

    return(
        <form onSubmit={handleSubmit} className="mb-4">
            <label className="text-white">New item</label><br/>
            <input 
                type='text' 
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                className="border border-blue-500 rounded-md bg-blue-100 px-4 py-2 w-full mb-2 text-gray-800"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Add</button>
        </form>
    )
}