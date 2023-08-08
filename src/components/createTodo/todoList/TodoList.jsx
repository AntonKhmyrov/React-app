import React from 'react'
import { TodoItem } from './todoItem/TodoItem'


export const TodoList = ({todos}) => {
	return (
		<ul>
			<h2>TodoList</h2>
			{todos.listTodos.map(todo => <TodoItem key={todo.id} todo={todo}/>)} 
		</ul>
	)
}

