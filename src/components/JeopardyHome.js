import { set } from 'mongoose';
import React, { useState } from 'react';

export default function JeopardyHome(props) {
	const [score, updateScore] = useState(0);

	const incrementScore = () =>
		updateScore(score + props.currentQuestion[0].value);

	const decrementScore = () =>
		score === 0
			? updateScore(0)
			: updateScore(score - props.currentQuestion[0].value);

	const [toggle, setToggle] = useState(false);

	const showAnswer = () => {
		toggle ? setToggle(false) : setToggle(true);
	};

	return (
		<div className="container">
			<h2>Yes, it is in fact a Trivia Game!</h2>

			<h2>Lets Play!</h2>

			<div className="score" className="row">
				<h2>Score: {score}</h2>
			</div>

			<div className="score-buttons">
				<button
					className="btn-increment-points"
					type="button"
					onClick={incrementScore}
				>
					Add Points
				</button>

				<button
					className="btn-decrement-points"
					type="button"
					onClick={decrementScore}
				>
					Remove Points
				</button>
			</div>

			<div className="questions-card">
				<form onSubmit={props.handleSubmit}>
					<input
						type="submit"
						value="Get New Question"
						onChange={props.handleChange}
						className="question-btn"
					></input>
				</form>

				<div className="category">
					<h2>CATEGORY: {props.currentQuestion[0].category.title}</h2>
				</div>

				<div className="question">
					<h2> QUESTION: {props.currentQuestion[0].question}</h2>
					<h3> QUESTION VALUE: {props.currentQuestion[0].value}</h3>
				</div>

				<div className="answer-box" className={toggle ? 'answer' : 'no-answer'}>
					<button className="btn-answer" type="button" onClick={showAnswer}>
						See Answer
					</button>
					<h2 className={toggle ? 'show' : 'hide'}>
						<span> ANSWER: </span>
						{props.currentQuestion[0].answer}
					</h2>
				</div>
			</div>
		</div>
	);
}
