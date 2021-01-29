import React, { useEffect, useState } from 'react';
import JeopardyHome from './JeopardyHome';
// import axios from 'axios';
// import JeopardyHome from './JeopardyHome';

// export default function App() {
// 	const [currentQuestion, updateQuestions] = useState([]);

// 	useEffect(() => {
// 		axios.get('http://jservice.io/api/random').then(
// 			res => {
// 				updateQuestions(res.data.question.map(jquestion => jquestion.question));
// 			},
// 			error => {
// 				console.log(error);
// 			}
// 		);
// 	}, []);

// 	return (
// 		<div>
// 			<h1>Jeopardy Trivia Game!</h1>
// 			{currentQuestion.map(question => {
// 				return (
// 					<JeopardyHome
// 						key={`${question.id}-${question.airdate}`}
// 						question={question}
// 					/>
// 				);
// 			})}
// 		</div>
// 	);
// }

export default function App(props) {
	const [query, updateQuery] = useState({
		baseURL: 'http://jservice.io/api/random',
		random: '',
		score: 0
	});

	const [currentQuestion, updateQuestion] = useState({});
	useEffect(() => {
		async () => {
			if (query.random) {
				try {
					const response = await fetch(query.random);
					const data = await response.json();
					await updateQuestion(data);
				} catch (error) {
					console.error(error);
				}
			}
		};
	}, []);
	return (
		<div>
			<h1>Jeopardy Trivia Game!</h1>
			<div>
				<h1>Question</h1>
				{/* {Object.keys(currentQuestion).length ? (
					<JeopardyHome currentQuestion={currentQuestion} />
				) : (
					''
				)} */}
				{currentQuestion.map(questions => {
					return (
						<JeopardyHome
							key={`${questions.id}${questions.airdate}`}
							questions={q}
						/>
					);
				})}
			</div>
		</div>
	);
}
