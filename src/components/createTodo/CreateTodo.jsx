import './CreateTodo.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo, deleteAllTodos } from '../../actions/actionCreators'

import { TodoForm } from './todoForm/TodoForm'
import { TodoList } from './todoList/TodoList'
import { Button } from '../button/Button'


export const CreateTodo = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
	console.log('все задачи', todos.listTodos.length);
	console.log('удаленные задачи', todos.deletedListTodos.length);
	const [showAddTask, setShowAddTask] = useState(false)

	const handleShowTask = () => setShowAddTask(!showAddTask);

    const handleAddTodo = (title) => {
        if (title.trim !== '') {
            dispatch(addTodo(title));
        }
    }

	const handleDeletedAllTask = () => {
		dispatch(deleteAllTodos())
	}

	return (
		<div>
			{showAddTask === false && todos.listTodos.length === 0 ? 
			<Button className={'show-task'} onClick={handleShowTask}>
				<span className='icon-show'>+</span>
				Добавить задачу
			</Button> 
			:
			<div>
				<TodoForm handleAddTodo={handleAddTodo}/>
				<TodoList todos={todos}/>
				<Button onClick={handleDeletedAllTask}>Удалить все задачи</Button>
			</div>
			}
		</div>
	)
}
