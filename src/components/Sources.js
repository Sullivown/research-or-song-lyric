import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SourceItem from './SourceItem';

import H2 from '../elements/H2';

const SourcesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	margin-top: 25px;
`;

function Sources(props) {
	const sourceElements = props.sources.map((source) => (
		<SourceItem key={source.id} source={source} />
	));

	return (
		<SourcesContainer>
			<H2>Answers and Sources:</H2>
			{sourceElements}
		</SourcesContainer>
	);
}

Sources.propTypes = {
	sources: PropTypes.array.isRequired,
};

export default Sources;
