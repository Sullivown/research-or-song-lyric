import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SourceLinkButton from './SourceLinkButton';

import P from '../elements/P';
import H3 from '../elements/H3';

const SourceItemDiv = styled.div`
	display: flex;
	max-width: 800px;
	font-size: 1.2rem;
	flex-direction: column;
	gap: 25px;
	border: 1px solid black;
	border-radius: 15px;
	padding: 25px;
	background-color: ${(props) => (props.correct ? '#94D7A2' : '#F8BCBC')};
`;

const SourceBodyTitle = styled(H3)`
	color: #293264;
`;

const SourceBodyText = styled(P)`
	color: #293264;
	font-size: 1.1rem;
`;

function SourceItem(props) {
	return (
		<SourceItemDiv correct={props.source.answered === props.source.answer}>
			<SourceBodyTitle>"{props.source.quote}"</SourceBodyTitle>

			<SourceBodyText>- {props.source.details.title}</SourceBodyText>
			{props.source.details.nsfw && (
				<div>
					Caution! This link may contain{' '}
					<abbr title='Not Safe For Work'>NSFW</abbr> content!
				</div>
			)}
			<SourceLinkButton
				url={props.source.details.source}
			></SourceLinkButton>
		</SourceItemDiv>
	);
}

SourceItem.propTypes = {
	source: PropTypes.exact({
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

export default SourceItem;
