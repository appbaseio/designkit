import React from 'react';
import styled, { css } from 'react-emotion';
import { node } from 'prop-types';

import media from '../shared/mediaQueries';

const OuterSection = styled('section')(props => ({
	background: props.background || 'transparent',
	padding: '80px 50px',
	display: 'flex',
	alignItems: 'center',
	[media('md')]: {
		padding: '50px 25px',
	},
}));

const innerSection = css({
	maxWidth: 1200,
	margin: '0 auto',
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gridGap: 50,
	alignItems: 'center',
	[media('md')]: {
		gridTemplateColumns: '1fr',
		justifyItems: 'center',
	},
});

const Section = ({ children }) => (
	<OuterSection>
		<div css={innerSection}>{children}</div>
	</OuterSection>
);

Section.propTypes = {
	children: node,
};

export default Section;
