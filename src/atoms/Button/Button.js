import { css } from "emotion";
import styled from "react-emotion";

import base from "../../shared/base";
import font from "../../shared/font";
import shade from "../../shared/utils";
import theme from "../../theme";

/* Todo: Move these inside utils */
const evalColor = (props) => {
	return props.light ?
		(props.theme.textLight ? props.theme.textLight: theme.textLight) :
		(props.theme.textDark ? props.theme.textDark: theme.textDark);
};

const evalColorType = (props, color) => {
	return props.theme[color] ? props.theme[color] : theme[color];
}

const transparent = props => css`
	border: 1px solid ${shade(evalColor(props), 0.7)};
	background-color: transparent;

	&:hover, &:focus {
		background-color: transparent;
		color: ${shade(evalColor(props), -0.1)};
		border-color: ${shade(evalColor(props), 0.5)};
	}
`;

const primary = props => css`
	background-color: ${evalColorType(props, "primaryColor")};

	&:hover, &:focus {
		background-color: ${shade(evalColorType(props, "primaryColor"), -0.1)};
	}
`;

const success = props => css`
	background-color: ${evalColorType(props, "successColor")};

	&:hover, &:focus {
		background-color: ${shade(evalColorType(props, "successColor"), -0.1)};
	}
`;

const warning = props => css`
	background-color: ${evalColorType(props, "warningColor")};

	&:hover, &:focus {
		background-color: ${shade(evalColorType(props, "warningColor"), -0.1)};
	}
`;

const alert = props => css`
	background-color: ${evalColorType(props, "alertColor")};

	&:hover, &:focus {
		background-color: ${shade(evalColorType(props, "alertColor"), -0.1)};
	}
`;

const disabled = props => css`
	color: #fafafa;
	background-color: #dedede;
	cursor: not-allowed;
`;

const shadow = props => css`
	box-shadow: 0 5px 10px rgba(0,0,0,.1);

	&:hover, &:focus {
		box-shadow: ${props.disabled ? "0 5px 10px rgba(0,0,0,.1)" : "0 5px 10px rgba(0,0,0,.15)"};
	}
`;

const small = props => css`
	padding: 0 10px;
	height: 28px;
	font-size: 0.88rem;
`;

const Button = styled("a")`
	${base};
	${font};
	font-size: 0.9rem;
	line-height: 0.9rem;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 0 16px;
	height: 38px;
	border-radius: ${props => props.theme.borderRadius ? props.theme.borderRadius : "4px"};
	cursor: pointer;
	background-color: #f5f5f5;
	user-select: none;
	color: ${props => evalColor(props)};
	transition: all .3s ease;

	&:hover, &:focus {
		background-color: ${shade("#f5f5f5", -0.1)};
	}

	${props => props.small  ? small  : null}
	${props => props.transparent ? transparent : null}
	${props => props.primary ? primary : null}
	${props => props.success ? success : null}
	${props => props.warning ? warning : null}
	${props => props.alert  ? alert  : null}
	${props => props.shadow ? shadow : null}
	${props => props.disabled  ? disabled  : null}
`;

export default Button;
