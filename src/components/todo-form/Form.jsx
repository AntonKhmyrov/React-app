import style from './Form.module.css';

import React, { useState } from 'react';

function Form({ addDataItem }) {
  const [itemTitle, setItemTitle] = useState('');

  const handleInputChange = (e) => {
    setItemTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    itemTitle && addDataItem(itemTitle.trim());
    clearInput();
  };

  const clearInput = () => {
    setItemTitle('');
  };

  return (
    <form className={style.body}  onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your list here"
        value={itemTitle}
        onChange={handleInputChange}
      />
      <button>+</button>
    </form>
  );
}

export default Form;