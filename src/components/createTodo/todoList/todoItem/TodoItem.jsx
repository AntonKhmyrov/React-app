import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../../../actions/actionCreators'

import { Button } from '../../../button/Button'


export const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	const handleDeleteTodos = () => {
		dispatch(deleteTodo(todo.id))
	}
	return (
		<li>
			<p>{todo.title}</p>
			<div>
				<Button>Редакировать</Button>
				<Button onClick={handleDeleteTodos}>Удалить</Button>
			</div>
		</li>
	)
}
