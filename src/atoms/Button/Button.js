import React, { Fragment } from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import Arrow from 'react-feather/dist/icons/arrow-right';
import Link from 'react-feather/dist/icons/external-link';
import { node, bool } from 'prop-types';

import base from '../../shared/base';
import font from '../../shared/font';
import { shade, getTextColor, getProperty } from '../../shared/utils';

const transparent = props => css`
	color: ${getTextColor(props, true)};
	background-color: transparent;
	padding: 0;

	&:hover,
	&:focus {
		background-color: transparent;
		color: ${shade(getTextColor(props, true), -0.1)};
	}
`;

const primary = props => css`
	color: ${getProperty(props, 'textLight')};
	background-color: ${getProperty(props, 'primaryColor')};

	&:hover,
	&:focus {
		background-color: ${shade(getProperty(props, 'primaryColor'), -0.1)};
	}
`;

const success = props => css`
	color: ${getProperty(props, 'textLight')};
	background-color: ${getProperty(props, 'successColor')};

	&:hover,
	&:focus {
		background-color: ${shade(getProperty(props, 'successColor'), -0.1)};
	}
`;

const warning = props => css`
	color: ${getProperty(props, 'textLight')};
	background-color: ${getProperty(props, 'warningColor')};

	&:hover,
	&:focus {
		background-color: ${shade(getProperty(props, 'warningColor'), -0.1)};
	}
`;

const alert = props => css`
	color: ${getProperty(props, 'textLight')};
	background-color: ${getProperty(props, 'alertColor')};

	&:hover,
	&:focus {
		background-color: ${shade(getProperty(props, 'alertColor'), -0.1)};
	}
`;

const dark = props => css`
	color: ${getProperty(props, 'textLight')};
	background-color: ${getProperty(props, 'darkColor')};

	&:hover,
	&:focus {
		background-color: ${shade(getProperty(props, 'darkColor'), -0.1)};
	}
`;

const disabled = css`
	color: #fafafa;
	background-color: #dedede;
	cursor: not-allowed;
`;

const shadow = props => css`
	box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);

	&:hover,
	&:focus {
		box-shadow: ${props.disabled
			? '0 3px 3px 0 rgba(0,0,0,.1)'
			: '0 6px 6px 0 rgba(0,0,0,.1)'};
	}
`;

const small = css`
	padding: 0 14px;
	height: 28px;
	font-size: 0.88rem;
`;

const big = css`
	padding: 0 25px;
	height: 44px;
	font-size: 1rem;
	line-height: 1rem;
`;

const block = css`
	display: flex;
`;

const ghost = props => css`
	background: transparent;
	border: 1px solid ${getProperty(props, 'primaryColor')};
	color: ${getProperty(props, 'primaryColor')} !important;
	&:hover,
	&:focus {
		background: transparent;
	}
`;

const arrowStyles = css`
	svg {
		height: 1.3rem;
		margin-left: 5px;
		transition: 0.3s ease-in-out;
	}

	&:hover,
	&:focus {
		svg {
			padding-left: 3px;
		}
	}
`;

const linkStyles = css`
	svg {
		height: 1.3rem;
		margin-right: 5px;
		transition: 0.3s ease-in-out;
	}
`;

const Button = styled('a')`
	${base};
	${font};
	font-size: 1rem;
	line-height: 1rem;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 0 22px;
	height: 40px;
	border-radius: ${props =>
		props.theme.borderRadius ? props.theme.borderRadius : '3px'};
	cursor: pointer;
	background-color: #eeeded;
	user-select: none;
	color: ${props => getTextColor(props)};
	transition: all .3s ease;
	font-weight: ${props => (props.bold ? '600' : '400')};
	text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
	letter-spacing: 0.01rem;
	text-decoration: none;
	white-space: nowrap;

	&:hover, &:focus {
		text-decoration: none;
		background-color: ${shade('#eeeded', -0.1)};
	}

	${props => (props.small ? small : null)}
	${props => (props.big ? big : null)}
	${props => (props.block ? block : null)}
	${props => (props.primary ? primary : null)}
	${props => (props.success ? success : null)}
	${props => (props.warning ? warning : null)}
	${props => (props.alert ? alert : null)}
	${props => (props.dark ? dark : null)}
	${props => (props.shadow ? shadow : null)}
	${props => (props.disabled ? disabled : null)}
	${props => (props.ghost ? ghost : null)}
	${props => (props.transparent ? transparent : null)}
	${props => (props.arrow ? arrowStyles : null)}
	${props => (props.link ? linkStyles : null)}
`;

const StyledButton = ({ children, arrow, link, ...props }) => (
	<Button arrow={arrow} link={link} {...props}>
		<Fragment>
			{link && (
				// eslint-disable-next-line
				<Link />
			)}
			{children}
			{arrow && <Arrow />}
		</Fragment>
	</Button>
);

StyledButton.propTypes = {
	children: node,
	arrow: bool,
	link: bool,
};

export default StyledButton;
