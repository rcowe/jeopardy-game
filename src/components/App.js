import React, { useEffect, useState } from 'react';
import JeopardyHome from './JeopardyHome';
// import axios from 'axios';

export default function App(props) {
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

	// const handleChange = event => {
	// 	updateQuery({
	// 		...query,
	// 		...{
	// 			[event.target.id]: event.target.value
	// 		}
	// 	});
	// };

	// const handleSubmit = event => {
	// 	event.preventDefault();
	// 	updateQuestion({
	// 		...currentQuestion,

	// 	})
	// }

	return (
		<div className="Page-wrapper">
			<h1>Welcome To The JeoParty!</h1>
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
