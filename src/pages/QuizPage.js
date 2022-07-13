import React from 'react';
import Question from '../components/Question';

function QuizPage(props) {
	return (
		<Question
			question={props.question}
			currentQuestionNum={props.currentQuestionNum}
			totalQuestions={props.totalQuestions}
			handleAnswerClick={props.handleAnswerClick}
			handleNextQuestionClick={props.handleNextQuestionClick}
		/>
	);
}

export default QuizPage;
