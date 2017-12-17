import styled from "react-emotion";

import base from "../../shared/base";
import font from "../../shared/font";
import shade from "../../shared/utils";
import theme from "../../theme";
import { text } from "./H1";

const A = styled("a")`
	${base};
	${font};
	${text}

	text-decoration: none;
	color: ${props => props.theme.primaryColor ? props.theme.primaryColor : theme.primaryColor};
	margin: ${props => props.margin || "0"};
	font-size: ${props => props.fontSize || "0.9rem"};
	line-height: ${props => props.lineHeight || "1.1rem"};
	font-weight: ${props => props.fontWeight || "normal"};
	cursor: pointer;
	transition: all .3s ease;

	&:hover, &:focus {
		color: ${props => props.theme.primaryColor ? shade(props.theme.primaryColor, -0.2) : shade(theme.primaryColor, -0.2)}
	}
`;

export default A;
