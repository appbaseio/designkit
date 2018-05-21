import React from 'react';
import { storiesOf } from '@storybook/react';
import News from './News';

import Button from '../../atoms/Button';
import Flex from '../../layouts/Flex';

const styles = {
	style: {
		background: 'aquamarine',
		padding: 25,
	},
};

storiesOf('News', module)
	.add('default', () => (
		<div {...styles}>
			<News>
				Build native mobile apps with appbase.io and ReactiveSearch
			</News>
		</div>
	))
	.add('with child components', () => (
		<div {...styles}>
			<News>
				<Flex alignItems="center" justifyContent="space-between">
					<div css={{ marginRight: 50 }}>
						I have a flux capacitor!
					</div>
					<Button
						href="https://www.youtube.com/watch?v=yX4ZguOZjhs"
						target="_blank"
						dark
					>
						Great Scott!
					</Button>
				</Flex>
			</News>
		</div>
	));
