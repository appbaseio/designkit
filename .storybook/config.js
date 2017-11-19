import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import Container from './Container';

setOptions({
	name: "appbase.io",
	url: "https://github.com/appbaseio/designkit",
	goFullScreen: false,
	showLeftPanel: true,
	showDownPanel: true,
	showSearchBox: false,
	downPanelInRight: false,
});

addDecorator(story => <Container story={story} />);

function loadStories() {
	const req = require.context("../src/atoms", true, /\-story\.js$/);
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
