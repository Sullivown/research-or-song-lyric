import React from 'react';
import styled from 'styled-components';

import Button from '../elements/Button';

const StyledLinkButton = styled(Button)`
	font-size: 1rem;
	padding: 1rem;
	min-width: 10px;
`;

function SourceLinkButton(props) {
	return (
		<a href={props.url} target='_blank' rel='noreferrer'>
			<StyledLinkButton>View Source</StyledLinkButton>
		</a>
	);
}

export default SourceLinkButton;
