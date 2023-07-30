import style from './Item.module.css'

import React, { useState } from 'react'

function Item({title, id, handleUpdateTitle, handleDeleteTitle, handleCompleteItem}) {
	const [isEdit, setIsEdit] = useState(false)
	const [editedItemTitle, setEditedItemTitle] = useState(title)
	const [completed, setCompleted] = useState(false)

	const handleInputChange = (e) => {
		setEditedItemTitle(e.target.value)
	}

	const onClickEditing = () => {
		setIsEdit(true)
	}

	const submitUpdateTitle = (e) => {
		e.preventDefault()
		handleUpdateTitle(id, editedItemTitle)
		setIsEdit(false)
	}

	const onClickDelete = (id) => {
		handleDeleteTitle(id)
	}

	const handleCompleted = (e) => {
		if (e.target.tagName.toLowerCase() === 'li') {
			handleCompleteItem(id, completed)
			setCompleted(prevCompleted => !prevCompleted)
		}
	}

	return (
	<li 
		className={completed ? style.bodyEdit : style.body}
		onClick={handleCompleted}
		>
		{isEdit ? 
			<form onSubmit={submitUpdateTitle}>
				<input 
					type="text"
					value={editedItemTitle}
					onChange={handleInputChange} 
				/>
			</form> : <h2 className={style.headerTitle}>{title}</h2>
		}
		<div className={style.btnBox}>
			<button onClick={onClickEditing}>UPD</button>
			<button onClick={onClickDelete}>DEL</button>
		</div>
	</li>
	)
}

export default Item;