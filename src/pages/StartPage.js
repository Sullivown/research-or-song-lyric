import React from 'react';
import styled from 'styled-components';
import StyledButton from '../components/Button';
import StyledH1 from '../components/StyledH1';

const StyledStartPage = styled.div`
	color: #293264;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 25px;
	text-align: center;
`;

function StartPage() {
	return (
		<StyledStartPage>
			<StyledH1>Research Paper or Song Lyric!</StyledH1>
			<StyledButton>Start Quiz!</StyledButton>
		</StyledStartPage>
	);
}
export default StartPage;
