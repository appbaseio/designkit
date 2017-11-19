import React, { Component } from "react";
import { ThemeProvider } from "emotion-theming";

import theme from "../src/theme";

export default class Container extends Component {
	render() {
		const { story } = this.props;

		return (
			<ThemeProvider theme={theme}>
				{ story() }
			</ThemeProvider>
		);
	}
}
