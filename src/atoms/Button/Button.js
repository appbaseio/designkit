import { css } from "emotion";
import styled from "react-emotion";

import base from "../../shared/base";
import font from "../../shared/font";
import shade from "../../shared/utils";
import theme from "../../theme";

const transparent = props => css`
	border: 1px solid ${props.theme.textDark ? shade(props.theme.textDark, 0.7) : shade(theme.textDark, 0.7)};
	background-color: transparent;

	&:hover, &:focus {
		background-color: transparent;
		color: ${shade(props.theme.textDark ? props.theme.textDark : theme.textDark, -0.1)};
		border-color: ${shade(props.theme.textDark ? props.theme.textDark : theme.textDark, 0.5)};
	}
`;

const primary = props => css`
	background-color: ${props.theme.primaryColor ? props.theme.primaryColor : theme.primaryColor};

	&:hover, &:focus {
		background-color: ${shade(props.theme.primaryColor ? props.theme.primaryColor : theme.primaryColor, -0.1)};
	}
`;

const success = props => css`
	background-color: ${props.theme.successColor ? props.theme.successColor : theme.successColor};

	&:hover, &:focus {
		background-color: ${shade(props.theme.successColor ? props.theme.successColor : theme.successColor, -0.1)};
	}
`;

const warning = props => css`
	background-color: ${props.theme.warningColor ? props.theme.warningColor : theme.warningColor};

	&:hover, &:focus {
		background-color: ${shade(props.theme.warningColor ? props.theme.warningColor : theme.warningColor, -0.1)};
	}
`;

const alert = props => css`
	background-color: ${props.theme.alertColor ? props.theme.alertColor : theme.alertColor};

	&:hover, &:focus {
		background-color: ${shade(props.theme.alertColor ? props.theme.alertColor : theme.alertColor, -0.1)};
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
	color: ${props => props.light
		? (props.theme.textLight ? props.theme.textLight : props.textLight)
		: (props.theme.textDark ? props.theme.textDark : theme.textDark)};
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
