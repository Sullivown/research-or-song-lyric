import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../elements/Button';

const AnswerDiv = styled.div`
	display: flex;
	color: #4d5b9e;
	font-size: 1.2rem;
	flex-direction: column;
	padding: 1rem;
	gap: 1rem;
	min-height: 10rem;
	border: 1px solid #4d5b9e;
	border-radius: 15px;
	visibility: ${(props) => (props.answered ? 'visible' : 'hidden')};
`;

function Answer(props) {
	return (
		<>
			<AnswerDiv answered={props.question.answered}>
				<div>
					{props.question.answer === props.question.answered
						? 'Correct'
						: 'Incorrect'}
					!
				</div>
				<div>
					The quote is from{' '}
					{props.question.answer === 'research'
						? 'a research paper'
						: 'song lyrics'}
					.
				</div>
				<div>Source:</div>
				<div> {props.question.details.title}</div>
				<div>
					<a href={props.question.details.source}>
						{props.question.details.source}
					</a>
				</div>
				<div>
					<Button onClick={props.handleNextQuestionClick}>
						Next Quote
					</Button>
				</div>
			</AnswerDiv>
		</>
	);
}

Answer.propTypes = {
	question: PropTypes.object,
};

export default Answer;
