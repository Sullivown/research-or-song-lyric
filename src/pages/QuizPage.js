import React from 'react';
import PropTypes from 'prop-types';

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

QuizPage.propTypes = {
	question: PropTypes.object.isRequired,
	currentQuestionNum: PropTypes.number.isRequired,
	totalQuestions: PropTypes.number.isRequired,
	handleAnswerClick: PropTypes.func.isRequired,
	handleNextQuestionClick: PropTypes.func.isRequired,
};

export default QuizPage;
