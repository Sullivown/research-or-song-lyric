import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import H1 from '../elements/H1';

const StyledStartPage = styled.div`
	color: #293264;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 25px;
	text-align: center;
`;

function StartPage(props) {
	return (
		<StyledStartPage>
			<H1>Research Paper or Song Lyric?</H1>
			<Button onClick={props.handleStartClick}>Start Quiz!</Button>
		</StyledStartPage>
	);
}
export default StartPage;
