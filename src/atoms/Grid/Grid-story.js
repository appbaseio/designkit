import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '../Grid';

import Card from '../Card';
import Title from '../typography/Title';

storiesOf('Grid', module)
	.add('default', () => (
		<Grid size={4} lgSize={2} smSize={1} gutter="20px" lgGutter="12px">
			<Card big href="https://opensource.appbase.io/reactive-manual">
				<img
					src="https://i.imgur.com/5pu5hmQ.png"
					alt="Documentation"
				/>
				<Title>Documentation</Title>
				<p>Dive in to learn all about <span style={{ color: '#0033FF' }}>Reactive X</span> development for all platforms.</p>
			</Card>
			<Card big href="https://opensource.appbase.io/reactive-manual">
				<img
					src="https://i.imgur.com/5pu5hmQ.png"
					alt="Documentation"
				/>
				<Title>Documentation</Title>
				<p>Dive in to learn all about <span style={{ color: '#0033FF' }}>Reactive X</span> development for all platforms.</p>
			</Card>
			<Card big href="https://opensource.appbase.io/reactive-manual">
				<img
					src="https://i.imgur.com/5pu5hmQ.png"
					alt="Documentation"
				/>
				<Title>Documentation</Title>
				<p>Dive in to learn all about <span style={{ color: '#0033FF' }}>Reactive X</span> development for all platforms.</p>
			</Card>
			<Card big href="https://opensource.appbase.io/reactive-manual">
				<img
					src="https://i.imgur.com/5pu5hmQ.png"
					alt="Documentation"
				/>
				<Title>Documentation</Title>
				<p>Dive in to learn all about <span style={{ color: '#0033FF' }}>Reactive X</span> development for all platforms.</p>
			</Card>
		</Grid>
	));
