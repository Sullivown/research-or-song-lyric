import React from 'react';
import styled from 'styled-components';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import TwitterShareButton from '../components/TwitterShareButton';

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
	text-align: center;
`;

function ScorePage(props) {
	const { width, height } = useWindowSize();

	return (
		<StyledScorePage>
			{props.score === props.maxScore && (
				<Confetti width={width} height={height} />
			)}
			<H1>Research Paper or Song Lyric?</H1>
			<P>
				You scored {props.score} out of {props.maxScore}!
			</P>
			<Button onClick={props.resetQuiz}>Play Again</Button>
			<TwitterShareButton score={props.score} maxScore={props.maxScore} />
		</StyledScorePage>
	);
}

export default ScorePage;
