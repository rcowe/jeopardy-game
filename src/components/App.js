import React, { useEffect, useState } from 'react';
import JeopardyHome from './JeopardyHome';

// import axios from 'axios';

export default function App(props) {
	const [query, updateQuery] = useState({
		baseURL: 'http://jservice.io/api/random',
		random: ''
	});
	const [currentQuestion, updateQuestion] = useState({});

	// const apiURL = 'http://jservice.io/api/random';

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(query.baseURL);
				const data = await response.json();
				updateQuestion(data);
				// console.log(updateQuestion(data));
			} catch (error) {
				console.error(error);
			}
		})();
	}, [query]);

	const handleChange = event => {
		updateQuery({
			...currentQuestion,
			...{
				[event.target.id]: event.target.value
			}
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			random: query.baseURL
		});
	};

	return (
		<div className="app-page">
			<h1>Welcome To The JeoParty!</h1>
			<div>
				{Object.keys(currentQuestion).length ? (
					<JeopardyHome
						currentQuestion={currentQuestion}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						query={query}
					/>
				) : (
					''
				)}
			</div>
		</div>
	);
}
