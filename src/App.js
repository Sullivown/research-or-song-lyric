import React, { useState } from 'react';
import StartPage from './pages/StartPage';

function App() {
	const [score, setScore] = useState(0);
	const [questions, setQuestions] = useState([]);
	const [currentPage, setCurrentPage] = useState('start');
	const [currentQuestion, setCurrentQuestion] = useState(1);

	return <StartPage />;
}

export default App;
