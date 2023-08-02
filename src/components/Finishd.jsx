
import React from 'react';

const Finishd = ({reloadQuiz, userName}) => {
    const handleReloadQuiz = () => {
        reloadQuiz()
    }

    return (
        <div className='finishd-display'>
            <h2>Поздравляю {userName}!!! Ты ответил на все вопросы !</h2>
            <button onClick={handleReloadQuiz}>Начать заново</button>
        </div>
    )
}

export default Finishd;