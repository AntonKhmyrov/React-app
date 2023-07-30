import style from './Button.module.css'

import React from 'react'

function Button({clearAll}) {
	
	const onClickClear = () => {
		clearAll()
	}

	return (
		<button 
			className={style.headerTitle}
			onClick={onClickClear}
		>Clear all</button>
	)
}

export default Button;