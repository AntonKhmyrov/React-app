import React from 'react'
import { useSelector } from 'react-redux'

export const DeletedTodos = () => {
    const todos = useSelector(state => state.todos);
	return (
		<ul>{todos.deletedListTodos.map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>
	)
}
