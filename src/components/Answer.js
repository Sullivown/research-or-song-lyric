import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AnswerDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	min-height: 10rem;
	background-color: red;
	visibility: ${(props) => (props.answered ? 'visible' : 'hidden')};
`;

function Answer(props) {
	return (
		<AnswerDiv answered={props.question.answered}>
			<div>{props.question.answer}!</div>
			<div> {props.question.source}</div>
		</AnswerDiv>
	);
}

Answer.propTypes = {
	question: PropTypes.object,
};

export default Answer;
