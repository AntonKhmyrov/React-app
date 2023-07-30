import style from './List.module.css'

import React from 'react';
import Item from './list-item/Item';

function List({ data, handleUpdateTitle, handleDeleteTitle, handleCompleteItem }) {
  return (
	<ul className={style.body}>
		{data.map((item) => (
			<Item 
				key={item.id} 
				id={item.id} 
				title={item.title}
				handleUpdateTitle={handleUpdateTitle}
				handleCompleteItem={handleCompleteItem}
				handleDeleteTitle={() => handleDeleteTitle(item.id)}
			/>
		))}
	</ul>
);
}

export default List;