import React, { useEffect, useState } from 'react';
import JeopardyHome from './JeopardyHome';
// import axios from 'axios';

export default function App(props) {
	// const [query, updateQuery] = useState({
	// 	baseURL: 'http://jservice.io/api/random',
	// 	random: '',
	// 	score: 0
	// });

	const [currentQuestion, updateQuestion] = useState({});
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('http://jservice.io/api/random');
				const data = await response.json();
				updateQuestion(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="Page-wrapper">
			<h1>Jeopardy Trivia Game!</h1>
			<div>
				{Object.keys(currentQuestion).length ? (
					<JeopardyHome currentQuestion={currentQuestion} />
				) : (
					''
				)}
			</div>
		</div>
	);
}
