import { useState, useEffect, useRef } from 'react';

const AnswerTimer = ({ duration , nextQuestion, currentStep}) => {
	const [curent, setCurent] = useState(0);
	const intervalRef = useRef(null);

	// useEffect(() => {
	//   intervalRef.current = setInterval(() => {
	//     setCurent((currentCurent) => currentCurent + 1);
	//   }, 1000);

	//   return () => {
	//     clearInterval(intervalRef.current);
	//   };
	// }, []);

	useEffect(() => {
		intervalRef.current = setInterval(() => {
		setCurent((currentCurent) => currentCurent + 1);
		}, 1000);

		return () => {
		clearInterval(intervalRef.current);
		};
	}, [currentStep]);

	useEffect(() => {
		if (curent === duration) {
		clearInterval(intervalRef.current);
		setCurent(0)
		nextQuestion();
		}
	}, [curent, duration, currentStep]);

	return (
		<div>
		<div>{curent}</div>
		</div>
	);
};

export default AnswerTimer;