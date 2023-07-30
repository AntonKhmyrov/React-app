
import React from 'react';

const Finishd = ({reloadQuiz}) => {

    const handleReloadQuiz = () => {
        reloadQuiz()
    }

    return (
        <div className='finishd-display'>
            <h2>Поздравляю!!! Ты ответил на все вопросы !</h2>
            <button onClick={handleReloadQuiz}>Начать заново</button>
        </div>
    )
}

export default Finishd;