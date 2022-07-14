import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import H2 from '../elements/H2';
import P from '../elements/P';
import Button from '../elements/Button';
import Answer from './Answer';

const QuestionDiv = styled.div`
	display: flex;
	color: #4d5b9e;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: 2rem;
	max-width: 750px;
	padding-top: 100px;
	@media (max-width: 768px) {
		padding-top: 0;
		font-size: 20px !important;
	}
`;

const OptionsDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 15px;
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
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [props]);

	return (
		<QuestionDiv>
			<H2>
				Quote {props.currentQuestionNum + 1} / {props.totalQuestions}:
			</H2>
			<P>"{props.question.quote}"</P>
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
			<Answer
				question={props.question}
				currentQuestionNum={props.currentQuestionNum}
				totalQuestions={props.totalQuestions}
				handleNextQuestionClick={props.handleNextQuestionClick}
			/>
		</QuestionDiv>
	);
}

Question.propTypes = {
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

export default Question;
