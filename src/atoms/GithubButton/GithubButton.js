import React from 'react';
import { string, any, bool } from 'prop-types';
import styled from 'react-emotion';

import Icon from './Icon';
import base from '../../shared/base';
import font from '../../shared/font';

const Button = styled('a')`
	${base};
	${font};

	height: 44px;
	border-radius: 2px;
	font-weight: 600;
	color: #30373C;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	box-shadow: ${props => (props.shadow ? '0 3px 3px 0 rgba(0,0,0,0.1)' : 'none')};
	font-size: 14px;
	cursor: pointer;
	background-color: #fff;
	transition: all .3s ease;

	&:hover, &:focus {
		background-color: #fafafa;
	}

	& > span {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 14px;
		text-transform: uppercase;

		img {
			margin-right: 5px;
		}
	}

	.count {
		background-color: #D6E2E6;
		text-transform: none;
		letter-spacing: 0.02rem;
	}
`;

const GithubButton = props => (
	<Button href={props.href} target={props.target} shadow={props.shadow}>
		<span>
			{props.icon || <Icon />}
			{props.label}
		</span>
		<span className="count">{props.count}</span>
	</Button>
);

GithubButton.defaultProps = {
	target: '_self',
	label: 'Star on GitHub',
	shadow: false,
};

GithubButton.propTypes = {
	href: string,
	target: string,
	icon: any, // eslint-disable-line
	label: any, // eslint-disable-line
	count: string,
	shadow: bool,
};

export default GithubButton;
