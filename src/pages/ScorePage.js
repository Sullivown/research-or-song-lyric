import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

function ScorePage(props) {
	const { width, height } = useWindowSize();

	return (
		<div>
			{props.score === props.maxScore && (
				<Confetti width={width} height={height} />
			)}
			<p>Final score is {props.score}</p>
		</div>
	);
}

export default ScorePage;
