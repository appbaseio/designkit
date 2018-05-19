import { css } from 'emotion';
import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { shade, getTextColor, getProperty } from '../../shared/utils';

const transparent = props => css`
	color: ${getProperty(props, 'textDark')};
	border: 1px solid ${shade(getTextColor(props), 0.7)};
	background-color: transparent;

	&:hover,
	&:focus {
		background-color: transparent;
		color: ${shade(getTextColor(props), -0.1)};
		border-color: ${shade(getTextColor(props), 0.5)};
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

const Button = styled('a')`
	${base};
	${font};
	font-size: 0.9rem;
	line-height: 0.9rem;
	display: inline-flex;
	justify-content: center
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

	&:hover, &:focus {
		text-decoration: none;
		background-color: ${shade('#eeeded', -0.1)};
	}

	${props => (props.small ? small : null)}
	${props => (props.big ? big : null)}
	${props => (props.block ? block : null)}
	${props => (props.transparent ? transparent : null)}
	${props => (props.primary ? primary : null)}
	${props => (props.success ? success : null)}
	${props => (props.warning ? warning : null)}
	${props => (props.alert ? alert : null)}
	${props => (props.dark ? dark : null)}
	${props => (props.shadow ? shadow : null)}
	${props => (props.disabled ? disabled : null)}
`;

export default Button;
