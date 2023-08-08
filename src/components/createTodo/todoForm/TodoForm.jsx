import React, { useState } from 'react'

export const TodoForm = ({handleAddTodo}) => {
    const [taskName, setTaskName] = useState('')


    const handleChange = (e) => setTaskName(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddTodo(taskName)
        setTaskName('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="create your task" 
                onChange={handleChange}
                value={taskName}
                />
            <button>submit</button>
        </form>
    )
}
