import React, { useState } from 'react';
import './Quiz.css'; // Make sure to import the CSS file correctly
import Finishd from './Finishd';
import StartQuiz from './StartQuiz';
import StartPage from './StartPage';

const Quiz = ({ questions }) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [currentVariantIndex, setCurrentVariant] = useState(null);
	const [correctAnswer, setCorrectAnswer] = useState(false);
	const [userName, setUserName] = useState('')
	const [start, setStart] = useState(false)
	const [duration, setDuration] = useState(5)

	const onClickNext = () => {
		setCurrentStep((currentStep) => currentStep + 1);
		setCurrentVariant(null);
		setCorrectAnswer(false);
	};

	const onVariantClick = (index, answer) => {
		setCurrentVariant(index);
		questions[currentStep].correctVariant === answer ? setCorrectAnswer(true) : setCorrectAnswer(false);
	};

	const reloadQuiz = () => setCurrentStep(0);

	const handleInputChange = (name) => setUserName(name);

	const handleDuration = (duration) => setDuration(duration);
	
	const startQuiz = () => (userName) && setStart(true);

	const renderGame = () => {
		if (currentStep === questions.length) {
			return <Finishd 
				reloadQuiz={reloadQuiz}
				userName={userName}
				/>
		} else {
			return <StartQuiz 
				questions={questions}
				onClickNext={onClickNext} 
				onVariantClick={onVariantClick}
				currentStep={currentStep}
				currentVariantIndex={currentVariantIndex}
				correctAnswer={correctAnswer}
				duration={duration}
				/>
		}
	}

  	return (
		<>
			{start ? 
				renderGame()
				: 
				<StartPage
					handleInputChange={handleInputChange}
					startQuiz={startQuiz}
					handleDuration={handleDuration}
				/>
			}
		</>
	);
};

export default Quiz;