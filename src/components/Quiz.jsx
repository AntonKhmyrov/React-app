import React, { useState } from 'react';
import './Quiz.css'; // Make sure to import the CSS file correctly
import Finishd from './Finishd';

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

	const reloadQuiz = () => {
		setCurrentStep(0)
	}

  	return (
		<>
		{currentStep === questions.length ? <Finishd reloadQuiz={reloadQuiz}/> :	

		<div className='body'>
			<span className='quiest'>Question {currentStep + 1} of 5</span>
			<div className='title-box'>
				<img className='image' src="../../public/quiz.svg" alt="question" />
				<h2 className='title'>{questions[currentStep].question}</h2>
			</div>
			<ul className='list'>
				{questions[currentStep].variants.map((answer, index) => (
					<li
						className={currentVariantIndex === index ? 'itemDisplay' : 'item'}
						key={answer}
						onClick={() => onVariantClick(index, answer)}
					>
					{answer}
					<span className={currentVariantIndex === index ? 'icon-shadow' : 'icon'}>
						emoji_objects
					</span>
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

		</div>}
		</>
	);
};

export default Quiz;