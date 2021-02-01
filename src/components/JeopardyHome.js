import React from 'react';

export default function JeopardyHome({ currentQuestion }) {
	return (
		<div className={'container'}>
			<h2>Yes, it is in fact a Trivia Game!</h2>
			<h2>Score</h2>
			<button type="button">Add Points</button>
			<button type="button">Lower Points</button>
			<div className={'questions-card'}>
				<div className="category">
					<h2>CATEGORY: {currentQuestion[0].category.title}</h2>
				</div>
				<h2> QUESTION: {currentQuestion[0].question}</h2>
				<div className={'hintBox'}>
					<h2>HINT: {}</h2>
				</div>
				<div className={'answers'}>
					<h2>ANSWER: {currentQuestion[0].answer}</h2>
				</div>
			</div>
		</div>
	);
}
