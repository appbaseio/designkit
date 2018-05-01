import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../Card';

import Title from '../typography/Title';

storiesOf('Card', module)
	.add('default', () => (
		<Card big href="https://opensource.appbase.io/reactive-manual" style={{ width: 300 }}>
			<img
				src="https://i.imgur.com/5pu5hmQ.png"
				alt="Documentation"
			/>
			<Title>Documentation</Title>
			<p>Dive in to learn all about <span style={{ color: '#0033FF' }}>Reactive X</span> development for all platforms.</p>
		</Card>
	));
