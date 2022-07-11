import React, { useState } from 'react';

import dataLoader from './helpers/dataLoader';
import questionData from './data/questions.json';

import StartPage from './pages/StartPage';
import QuizPage from './pages/QuizPage';
import ScorePage from './pages/ScorePage';

function App() {
	const [score, setScore] = useState(0);
	const [questions, setQuestions] = useState(dataLoader(questionData));
	const [currentPage, setCurrentPage] = useState('start');
	const [currentQuestion, setCurrentQuestion] = useState(0);

	function resetQuiz() {
		setQuestions(dataLoader(questionData));
		setScore(0);
		setCurrentPage('start');
		setCurrentQuestion(0);
	}

	function handleNextQuestionClick() {
		if (currentPage === 'start') {
			setCurrentPage('quiz');
		} else if (currentQuestion + 1 >= questions.length) {
			setCurrentPage('score');
		} else {
			setCurrentQuestion((prevQuestion) => prevQuestion + 1);
		}
	}

	function handleAnswerClick(id, answer) {
		// update score if correct
		questions[currentQuestion].answer === answer &&
			setScore((prevScore) => prevScore + 1);

		// update question with the answer
		setQuestions((prevQuestions) =>
			prevQuestions.map((question) => {
				return question.id === id
					? { ...question, answered: answer }
					: question;
			})
		);
	}

	return (
		<div>
			{
				{
					start: (
						<StartPage handleStartClick={handleNextQuestionClick} />
					),
					quiz: (
						<QuizPage
							question={questions[currentQuestion]}
							currentQuestionNum={currentQuestion}
							totalQuestions={questions.length}
							handleNextQuestionClick={handleNextQuestionClick}
							handleAnswerClick={handleAnswerClick}
						/>
					),
					score: (
						<ScorePage
							score={score}
							maxScore={questions.length}
							resetQuiz={resetQuiz}
						/>
					),
				}[currentPage]
			}
		</div>
	);
}

export default App;
