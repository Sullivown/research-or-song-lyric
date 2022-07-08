import React from 'react';
import Question from '../components/Question';

function QuizPage(props) {
	return (
		<div>
			<Question
				question={props.question}
				handleAnswerClick={props.handleAnswerClick}
				handleNextQuestionClick={props.handleNextQuestionClick}
			/>
		</div>
	);
}

export default QuizPage;
