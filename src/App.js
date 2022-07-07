import React, { useState } from 'react';

import dataLoader from './helpers/dataLoader';
import questionData from './data/questions.json';

import StartPage from './pages/StartPage';
import QuizPage from './pages/QuizPage';

function App() {
	const [score, setScore] = useState(0);
	const [questions, setQuestions] = useState(dataLoader(questionData));
	const [currentPage, setCurrentPage] = useState('start');
	const [currentQuestion, setCurrentQuestion] = useState(0);

	function handleStartClick() {
		setCurrentPage('quiz');
	}

	function handleAnswerClick(id, answer) {
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
					start: <StartPage handleStartClick={handleStartClick} />,
					quiz: (
						<QuizPage
							question={questions[currentQuestion]}
							handleAnswerClick={handleAnswerClick}
						/>
					),
				}[currentPage]
			}
		</div>
	);
}

export default App;
