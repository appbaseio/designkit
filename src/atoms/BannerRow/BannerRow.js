import React, { Component } from 'react';
import { any } from 'prop-types';
import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import queries from '../../shared/mediaQueries';

const Row = styled('div')`
	${base};
	${font};

	width: 100%;
	display: flex;
	flex-direction: row;

	${queries('md')} {
		flex-direction: column;
	}
`;

const Column = styled('div')`
	width: 50%;
	background-color: #193244;
	text-align: center;
	padding: 6rem 2rem;

	p {
		color: #ccc;
		max-width: 450px;
		margin: 16px auto 40px;
		line-height: 1.6rem;
	}

	&:last-child {
		background-color: #021019;
	}

	${queries('md')} {
		width: 100%;
		padding: 3rem 2rem;

		p {
			max-width: 400px;
			margin: 20px auto;
		}
	}
`;

export default class BannerRow extends Component {
	static Column = ({ children, ...props }) => (
		<Column {...props}>{children}</Column>
	);

	render() {
		return <Row>{this.props.children}</Row>;
	}
}

BannerRow.propTypes = {
	children: any, // eslint-disable-line
};
