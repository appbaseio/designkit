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

	p {
		color: #ccc;
		margin-bottom: 40px;
		line-height: 1.6rem;
	}

	& > div {
		padding: 6rem 3rem 6rem 0;
		max-width: 500px;
		text-align: center;
		margin-left: auto;
		margin-right: 0;
	}

	&:last-child {
		background-color: #021019;

		& > div {
			padding: 6rem 0 6rem 3rem;
			margin-left: 0;
			margin-right: auto;
			background-color: #021019;
		}
	}

	${queries('md')} {
		width: 100%;

		& > div {
			padding: 3rem 2rem !important;
			text-align: center;
			margin: 0;
			max-width: none;
		}

		p {
			max-width: 400px;
			margin: 20px auto;
		}
	}
`;

export default class BannerRow extends Component {
	static Column = ({ children, ...props }) => (<Column {...props}>{children}</Column>);

	render() {
		return (<Row>{this.props.children}</Row>);
	}
}

BannerRow.propTypes = {
	children: any, // eslint-disable-line
};
