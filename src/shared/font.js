import { css } from "emotion";

import theme from "../theme";

const font = props => css`
	font-family: ${props.theme.fontFamily ? props.theme.fontFamily : theme.fontFamily};
`;

export default font;
