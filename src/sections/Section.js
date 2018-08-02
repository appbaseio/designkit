import React from 'react';
import styled from 'react-emotion';
import { node, object } from 'prop-types';

import media from '../shared/mediaQueries';

const OuterSection = styled('section')(props => ({
	background: props.background || 'transparent',
	padding: '80px 50px',
	display: 'flex',
	alignItems: 'center',
	overflow: 'hidden',
	[media('md')]: {
		padding: '50px 25px',
	},
}));

const InnerSection = styled('div')(props => ({
	maxWidth: props.maxWidth || 1200,
	margin: '0 auto',
	display: 'grid',
	gridTemplateColumns: props.columns || '1fr 1fr',
	gridGap: 50,
	alignItems: 'center',
	[media('md')]: {
		gridTemplateColumns: '1fr',
		justifyItems: 'center',
	},
}));

const Section = ({ children, innerSectionProps, ...props }) => (
	<OuterSection {...props}>
		<InnerSection {...innerSectionProps}>{children}</InnerSection>
	</OuterSection>
);

Section.propTypes = {
	children: node,
	innerSectionProps: object,
};

export default Section;
