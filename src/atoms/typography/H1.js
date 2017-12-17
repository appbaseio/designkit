import styled from "react-emotion";
import { css } from "emotion";

import base from "../../shared/base";
import font from "../../shared/font";
import theme from "../../theme";

const text = props => css`
	margin: ${props.margin || "1.4rem 0 0.5rem"};
	padding: ${props.padding || "0"};
	color: ${props.light
		? props.theme.textLight
			? props.theme.textLight
			: theme.textLight
		: props.theme.textDark
			? prop.theme.textDark
			: theme.textDark};
`;

const H1 = styled("h1")`
	${base};
	${font};
	${text};

	font-size: ${props => props.fontSize || "2.2rem"};
	line-height: ${props => props.lineHeight || "2.4rem"};
	font-weight: ${props => props.fontWeight || "normal"};
`;

export default H1;
export { text };
