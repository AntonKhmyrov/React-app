const StartPage = ({handleInputChange, startQuiz, handleDuration}) => {
    
    const onChangeHandler = (e) => handleInputChange(e.target.value)

    const onClickHandler = () => startQuiz()

    const onChangeDuration = (e) => handleDuration(+e.target.value);

    return (
        <div className='start-page'>
            <div className='name-box'>
                <label>Enter your name:</label>
			    <input type="text" onChange={onChangeHandler}/>
            </div>
            <div className='option-box'> 
                <label>Выберите уровень сложности, от него будет зависить кол-во отведенного вам времени для ответа на вопрос</label>
                <select onChange={onChangeDuration}>
                    <option value='30'>Легкий</option>
                    <option value='20'>Средний</option>
                    <option value='10'>Тяжелый</option>
                </select>
            </div>
			<button className='start-btn' onClick={onClickHandler}>start</button>
		</div>
    )
}

export default StartPage;