import React from 'react';

export default function JeopardyHome({ q }) {
	return (
		<div key={`${questions.id}${questions.airdate}`}>
			<h1>{q.question}</h1>
			<h1>{q.airdate}</h1>
		</div>
	);
}
