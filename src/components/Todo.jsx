import style from './TodoList.module.css';
import { v4 as uuidv4 } from 'uuid';

import React, { useState, useEffect } from 'react';
import Form from './todo-form/Form';
import List from './todo-list/List';
import Button from './todo-button/Button';

function Todo() {
	const [data, setData] = useState([]);
	const [completedTasksCount, setCompletedTasksCount] = useState(0);

	useEffect(() => {
		const completedCount = data.filter(item => item.completed).length;
		setCompletedTasksCount(completedCount);
	}, [data]);
	
	const addDataItem = (itemTitle) => {
		setData([...data, { title: itemTitle, id: uuidv4(), completed: false }]);
	};
	
	const handleUpdateTitle = (id, editedItemTitle) => {
		setData(data.map(item => (item.id === id ? { ...item, title: editedItemTitle } : item)));
	};
	
	const handleCompleteItem = (id, completedStatus) => {
		setData(data.map(item => (item.id === id ? { ...item, completed: !completedStatus } : item)));
	};
	
	const handleDeleteTitle = (id) => {
		setData(data.filter(item => item.id !== id));
	};
	
	const clearAll = () => {
		setData([]);
	};

	return (
		<div className={style.body}>
			<div className={style.headerTitle}>TodoList</div>
			<Form addDataItem={addDataItem}/>
				<div>
					<div>счетчик существующих задач --- {data.length}</div>
					<div>счетчик завершенных задач --- {completedTasksCount}</div>
				</div>
			<List 
				data={data}
				handleUpdateTitle={handleUpdateTitle}
				handleDeleteTitle={handleDeleteTitle}
				handleCompleteItem={handleCompleteItem}
			/>
			<Button clearAll={clearAll}/>
		</div>
	);
}

export default Todo;