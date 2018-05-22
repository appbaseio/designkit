import React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from './Hero';

import Button from '../../atoms/Button';
import { H1, H2 } from '../../atoms/typography';
import Flex from '../../layouts/Flex';

const styles = {
	style: {
		background: 'skyblue',
	},
};

storiesOf('Hero', module)
	.add('default', () => (
		<Hero {...styles}>
			<H1>Build native mobile apps with appbase.io and ReactiveSearch</H1>
			<H2>Appbase Design System</H2>
		</Hero>
	))
	.add('with child components', () => (
		<Hero {...styles}>
			<H1>Build native mobile apps with appbase.io and ReactiveSearch</H1>
			<H2>Appbase Design System</H2>
			<Flex alignItems="center" justifyContent="space-between">
				<div css={{ marginRight: 50 }}>I have a flux capacitor!</div>
				<Button
					href="https://www.youtube.com/watch?v=yX4ZguOZjhs"
					target="_blank"
					dark
				>
					Great Scott!
				</Button>
			</Flex>
		</Hero>
	));
