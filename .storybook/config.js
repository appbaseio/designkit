import React from 'react';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
	name: 'appbase.io',
	url: 'https://github.com/appbaseio/designkit',
	goFullScreen: false,
	showLeftPanel: true,
	showDownPanel: true,
	showSearchBox: false,
	downPanelInRight: false,
});

function loadStories() {
	const req = require.context('../lib', true, /[a-zA-Z0-9]\-story\.js$/);
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
