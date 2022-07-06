import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

function Question(props) {
	return (
		<QuestionDiv>
			<h2>"{props.question.quote}"</h2>
			<OptionsDiv>
				<Button
					data-answer='research'
					onClick={(e) =>
						props.handleAnswerClick(
							props.question.id,
							e.target.dataset.answer
						)
					}
				>
					Research
				</Button>
				<Button
					data-answer='lyric'
					onClick={(e) =>
						props.handleAnswerClick(
							props.question.id,
							e.target.dataset.answer
						)
					}
				>
					Lyrics
				</Button>
			</OptionsDiv>
			<Answer question={props.question} />
		</QuestionDiv>
	);
}

Question.propTypes = {
	question: PropTypes.object,
};

export default Question;
