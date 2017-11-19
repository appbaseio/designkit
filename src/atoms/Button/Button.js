import { css } from "emotion";
import styled from "react-emotion";
import { lighten } from "polished";

import font from "../../shared/font";

const primary = props => css`
	color: ${props.theme.textLight};
	background-color: ${props.theme.primaryColor};
`;

const success = props => css`
	color: ${props.theme.textLight};
	background-color: ${props.theme.successColor};
`;

const warning = props => css`
	color: ${props.theme.textLight};
	background-color: ${props.theme.warningColor};
`;

const alert = props => css`
	color: ${props.theme.textLight};
	background-color: ${props.theme.alertColor};
`;

const disabled = props => css`
	color: #fafafa;
	background-color: #dedede;
	cursor: not-allowed;

	&:hover, &:focus {
		box-shadow: 0 5px 10px rgba(0,0,0,.1);
	}
`;

const Button = styled("a")`
	${font};
	font-size: 0.9rem;
	line-height: 0.9rem;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 0 16px;
	height: 38px;
	border-radius: 4px;
	cursor: pointer;
	background-color: #f5f5f5;
	box-shadow: 0 5px 10px rgba(0,0,0,.1);
	user-select: none;
	color: ${props => props.theme.textDark};

	&:hover, &:focus {
		box-shadow: 0 5px 10px rgba(0,0,0,.15);
	}

	${props => props.primary ? primary : null}
	${props => props.success ? success : null}
	${props => props.warning ? warning : null}
	${props => props.alert  ? alert  : null}
	${props => props.disabled  ? disabled  : null}
`;

export default Button;
