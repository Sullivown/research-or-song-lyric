import React, { useState } from 'react';
import StartPage from './pages/StartPage';
import QuizPage from './pages/QuizPage';
import questionData from './data/questions.json';

function App() {
	const [score, setScore] = useState(0);
	const [questions, setQuestions] = useState(questionData);
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
