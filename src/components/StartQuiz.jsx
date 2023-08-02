import AnswerTimer from './AnswerTimer';

const StartQuiz = ({ questions, onClickNext, onVariantClick, currentStep, currentVariantIndex, correctAnswer, duration }) => {

  const onClickVariant = (index, answer) => {
    onVariantClick(index, answer);
  };

  const nextQuestion = () => {
    onClickNext();
  };

  return (
    <div className='body'>
      <span className='quiest'>Question {currentStep + 1} of 5</span>
      <div className='title-box'>
        <img className='image' src="../../public/quiz.svg" alt="question" />
        <h2 className='title'>{questions[currentStep].question}</h2>
      </div>
      <AnswerTimer duration={duration} nextQuestion={nextQuestion} currentStep={currentStep} />
      <ul className='list'>
        {questions[currentStep].variants.map((answer, index) => (
          <li
            className={currentVariantIndex === index ? 'itemDisplay' : 'item'}
            key={answer}
            onClick={() => onClickVariant(index, answer)}
          >
            {answer}
            <span className={currentVariantIndex === index ? 'icon-shadow' : 'icon'}>
              emoji_objects
            </span>
          </li>
        ))}
      </ul>

      {correctAnswer ? (
        <button className='next-question' onClick={nextQuestion}>
          Next question
        </button>
      ) : (
        <p className='send-text'>Выберите правильный ответ</p>
      )}
    </div>
  );
};

export default StartQuiz;