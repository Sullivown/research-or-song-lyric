import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SourceLinkButton from './SourceLinkButton';

import Button from '../elements/Button';
import H3 from '../elements/H3';

const AnswerDivContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	min-width: clamp(250px, 515px, 100%);
	visibility: ${(props) => (props.answered ? 'visible' : 'hidden')};
`;

const AnswerDiv = styled.div`
	display: flex;
	color: #4d5b9e;
	font-size: 1.2rem;
	flex-direction: column;
	padding: 1rem;
	gap: 1rem;
	border: 1px solid #4d5b9e;
	border-radius: 15px;
`;

const NextButton = styled(Button)`
	font-size: 1.2rem;
`;

function Answer(props) {
	return (
		<AnswerDivContainer answered={props.question.answered}>
			<AnswerDiv>
				<H3>
					{props.question.answer === props.question.answered
						? 'Correct'
						: 'Incorrect'}
					!
				</H3>
				<div>
					The quote is from{' '}
					{props.question.answer === 'research'
						? 'a research paper'
						: 'song lyrics'}
					.
				</div>

				<H3>Source:</H3>
				<div> {props.question.details.title}</div>

				{props.question.details.nsfw && (
					<div>
						Caution! This link may contain{' '}
						<abbr title='Not Safe For Work'>NSFW</abbr> content!
					</div>
				)}

				<SourceLinkButton url={props.question.details.source} />
			</AnswerDiv>
			<div>
				<NextButton onClick={props.handleNextQuestionClick}>
					{props.currentQuestionNum + 1 === props.totalQuestions
						? 'Show Score Summary'
						: 'Next Quote'}
				</NextButton>
			</div>
		</AnswerDivContainer>
	);
}

Answer.propTypes = {
	question: PropTypes.exact({
		id: PropTypes.number,
		quote: PropTypes.string,
		answer: PropTypes.string,
		details: PropTypes.exact({
			title: PropTypes.string,
			source: PropTypes.string,
			nsfw: PropTypes.bool,
		}),
		answered: PropTypes.string,
	}),
};

export default Answer;
