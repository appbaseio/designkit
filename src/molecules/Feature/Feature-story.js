import React from 'react';
import { storiesOf } from '@storybook/react';
import Feature from './Feature';

const { Image, Title, Description } = Feature;

storiesOf('Feature', module).add('default', () => (
	<Feature css={{ maxWidth: 300 }}>
		<Image src="https://i.imgur.com/5pu5hmQ.png" />
		<Title>Appbase Design System</Title>
		<Description>
			Build native mobile apps with appbase.io and ReactiveSearch
		</Description>
	</Feature>
));
