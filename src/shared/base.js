import { css } from 'emotion';

const base = css`
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	text-rendering: optimizeLegibility;
	-moz-osx-font-smoothing: grayscale;
	-moz-font-feature-settings: "liga" on;

	*, *:after, *:before {
		box-sizing: border-box;
	}
`;

export default base;
