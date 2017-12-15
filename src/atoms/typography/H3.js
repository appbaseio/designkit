import styled from "react-emotion";

import base from "../../shared/base";
import font from "../../shared/font";
import theme from "../../theme";
import { heading } from "./H1";

const H3 = styled("h3")`
	${base};
	${font};
	${heading};

	font-size: ${props => props.fontSize || "1.5rem"};
	line-height: ${props => props.lineHeight || "1.7rem"};
	font-weight: ${props => props.fontWeight || "normal"};
`;

export default H3;
