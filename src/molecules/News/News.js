import React from 'react';
import { node, string, object } from 'prop-types';
import styled, { css } from 'react-emotion';
import Right from 'react-feather/dist/icons/chevron-right';

import base from '../../shared/base';
import font from '../../shared/font';
import { getProperty } from '../../shared/utils';
import queries from '../../shared/mediaQueries';

const label = props =>
	css({
		background: getProperty(props, 'accentColor'),
		padding: '2px 12px',
		borderRadius: 12.5,
		fontSize: '0.8rem',
		margin: '0 3px',
		[queries('md')]: {
			height: 10,
			width: 10,
			borderRadius: '50%',
			fontSize: 0,
			padding: 0,
			margin: '0 15px',
		},
		[queries('xs')]: {
			margin: '0 10px',
		},
	});

const container = css({
	display: 'grid',
	gridTemplateColumns: 'auto auto auto',
	alignItems: 'center',
	justifyItems: 'center',
	gridGap: 0,
	maxWidth: 550,
	background: 'rgba(255, 255, 255, 0.5)',
	padding: '5px 0',
	borderRadius: 15,
	[queries('md')]: {
		gridTemplateColumns: 'auto 1fr auto',
		padding: '10px 0',
		maxWidth: '100%',
		borderRadius: 0,
	},
});

const Link = styled('a')(({ theme }) => ({
	fontSize: '0.9rem',
	fontWeight: 400,
	textDecoration: 'none',
	color: theme.primaryColor,
	'&:hover': {
		textDecoration: 'underline',
		textDecorationSkipInk: 'auto',
	},
	[queries('md')]: {
		justifySelf: 'start',
	},
}));

const Label = styled.div(label);

const Container = styled.section(base, font, container);

const News = ({ children, className, style, href, target }) => (
	<Container className={className} style={style}>
		<Label>NEW</Label>
		<Link href={href} target={target}>
			{children}
		</Link>
		<Right css={{ margin: '0 10px 0 0', height: '0.9rem' }} />
	</Container>
);

News.propTypes = {
	children: node,
	className: string,
	href: string,
	target: string,
	style: object,
};

export default News;
