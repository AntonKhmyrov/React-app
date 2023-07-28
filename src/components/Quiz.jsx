import React, { useState } from 'react';
import './Quiz.css';

const Quiz = ({ questions }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentVariantIndex, setCurrentVariant] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(false);

  const onClickNext = () => {
    setCurrentStep(currentStep + 1);
    setCurrentVariant(null);
    setCorrectAnswer(false);
  };

  const onVariantClick = (index, answer) => {
    setCurrentVariant(index);
    questions[currentStep].correctVariant === answer ? setCorrectAnswer(true) : setCorrectAnswer(false);
  };

  return (
    <div className='body'>
      <span className='quiest'>{currentStep + 1}/5</span>
      <h1 className='title'>{questions[currentStep].question}</h1>
      <ul className='list'>
        {questions[currentStep].variants.map((answer, index) => (
          <li
            className={currentVariantIndex === index ? 'itemDisplay' : 'item'}
            key={answer}
            onClick={() => onVariantClick(index, answer)}
          >
            {answer}
          </li>
        ))}
      </ul>

      {correctAnswer ? (
        <button className='next-question' onClick={onClickNext}>
          Next question
        </button>
      ) : (
        <p className='send-text'>Выберите правильный ответ</p>
      )}
    </div>
  );
};

export default Quiz;
