import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import calculatePercentage from '../helpers/calculatePercentage';

import TwitterShareButton from '../components/TwitterShareButton';
import Sources from '../components/Sources';

import H1 from '../elements/H1';
import P from '../elements/P';
import Button from '../elements/Button';

const StyledScorePage = styled.div`
	color: #293264;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 25px;
	align-self: center;
	text-align: center;
`;

function ScorePage(props) {
	const { width, height } = useWindowSize();

	return (
		<StyledScorePage>
			{props.score === props.maxScore && (
				<Confetti width={width} height={height} />
			)}
			<H1>Maths Education Research or Song Lyric?</H1>
			<P>
				You scored {props.score} out of {props.maxScore}
			</P>
			<P>
				which is{' '}
				{Math.ceil(calculatePercentage(props.score, props.maxScore))}%
			</P>
			<Button onClick={props.resetQuiz}>Play Again</Button>
			<TwitterShareButton score={props.score} maxScore={props.maxScore} />
			<Sources sources={props.questions} />
		</StyledScorePage>
	);
}

ScorePage.propTypes = {
	score: PropTypes.number.isRequired,
	maxScore: PropTypes.number.isRequired,
	questions: PropTypes.array.isRequired,
	resetQuiz: PropTypes.func.isRequired,
};

export default ScorePage;
