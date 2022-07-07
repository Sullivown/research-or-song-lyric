import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import H2 from '../elements/H2';
import Button from '../elements/Button';
import Answer from './Answer';

const QuestionDiv = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 2rem;
`;

const OptionsDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	text-align: center;
`;

const AnswerButton = styled(Button)`
	color: #4d5b9e;
	border: 1px solid #4d5b9e;
	background-color: ${(props) => {
		if (props.answered) {
			if (props.correct && props.answered === props.answer) {
				return '#94D7A2';
			} else if (!props.correct && props.answered === props.answer) {
				return '#F8BCBC';
			} else {
				return '#f5f7fb';
			}
		} else {
			return '#f5f7fb';
		}
	}};

	&:disabled {
		cursor: not-allowed;
	}

	&:active {
		box-shadow: ${(props) => props.answered && 'none'};
	}
`;

function Question(props) {
	return (
		<QuestionDiv>
			<H2>"{props.question.quote}"</H2>
			<OptionsDiv>
				<AnswerButton
					disabled={props.question.answered}
					data-answer='research'
					answer={'research'}
					answered={props.question.answered}
					correct={props.question.answer === 'research'}
					onClick={(e) =>
						props.handleAnswerClick(
							props.question.id,
							e.target.dataset.answer
						)
					}
				>
					Research
				</AnswerButton>
				<AnswerButton
					disabled={props.question.answered}
					correct={props.question.answer === 'lyric'}
					data-answer='lyric'
					answer={'lyric'}
					answered={props.question.answered}
					onClick={(e) =>
						props.handleAnswerClick(
							props.question.id,
							e.target.dataset.answer
						)
					}
				>
					Lyrics
				</AnswerButton>
			</OptionsDiv>
			<Answer question={props.question} />
		</QuestionDiv>
	);
}

Question.propTypes = {
	question: PropTypes.object,
};

export default Question;
