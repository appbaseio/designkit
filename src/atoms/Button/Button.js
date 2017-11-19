import { css } from "emotion";
import styled from "react-emotion";

import font from "../../shared/font";

const primary = props => css`
	color: ${props.theme.primaryTextColor};
	background-color: ${props.theme.primaryColor};
`;

const Button = styled("a")`
	${font};
	font-size: 0.9rem;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 0 15px;
	height: 40px;
	border-radius: 4px;
	cursor: pointer;
	background-color: #eee;
	color: ${props => props.theme.textColor};

	${props => props.primary ? primary : null}
	${props => props.secondary ? secondary : null}
	${props => props.disabled  ? disabled  : null}
`;

export default Button;
