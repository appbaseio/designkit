import React from 'react';
import { node, string, object } from 'prop-types';
import styled, { css } from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { getProperty } from '../../shared/utils';
import queries from '../../shared/mediaQueries';

const label = props =>
	css(
		{
			background: getProperty(props, 'accentColor'),
			padding: '3px 15px',
			borderRadius: 12.5,
			marginLeft: 20,
			fontSize: '0.9rem',
		},
		{
			[queries('sm')]: {
				height: 10,
				width: 10,
				borderRadius: '50%',
				fontSize: 0,
				padding: 0,
			},
		},
	);

const container = css({
	display: 'grid',
	gridTemplateColumns: 'auto auto auto',
	alignItems: 'center',
	justifyItems: 'center',
	gridGap: 20,
	maxWidth: 680,
	background: 'rgba(255, 255, 255, 0.5)',
	padding: '15px 0',
	borderRadius: 4,
});

const Label = styled.div(label);

const Container = styled.section(base, font, container);

const News = ({ children, className, style }) => (
	<Container className={className} style={style}>
		<Label>NEW</Label>
		<div css={{ fontSize: '1rem', fontWeight: 600 }}>{children}</div>
		<div css={{ margin: '0 20px 0 0' }}>▶</div>
	</Container>
);

News.propTypes = {
	children: node,
	className: string,
	style: object,
};

export default News;
