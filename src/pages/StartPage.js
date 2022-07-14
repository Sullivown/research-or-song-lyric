import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../elements/Button';
import H1 from '../elements/H1';

const StyledStartPage = styled.div`
	color: #293264;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: center;
	gap: 25px;
	text-align: center;
	height: 100%;
`;

function StartPage(props) {
	return (
		<StyledStartPage>
			<H1>Maths Education Research or Song Lyric?</H1>
			<Button onClick={props.handleStartClick}>Start Quiz!</Button>
		</StyledStartPage>
	);
}

StartPage.propTypes = {
	handleStartClick: PropTypes.func.isRequired,
};

export default StartPage;
