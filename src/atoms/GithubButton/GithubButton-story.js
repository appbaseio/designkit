import React from 'react';
import { storiesOf } from '@storybook/react';
import GithubButton from '../GithubButton';

storiesOf('Github Button', module)
	.add('default', () => (
		<GithubButton shadow count={220} />
	));
