import React from 'react';
import { storiesOf } from '@storybook/react';
import Flex from '../Flex';

storiesOf('Flex', module)
	.add('default', () => (
		<Flex>
			<p>Left Paragraph</p>
			<p>Right Paragraph</p>
		</Flex>
	))
	.add('With backgroundColor', () => (
		<Flex backgroundColor="coral">
			<p>Left Paragraph</p>
			<p>Right Paragraph</p>
		</Flex>
	))
	.add('With margin', () => (
		<Flex margin="20px" backgroundColor="coral">
			<p>Left Paragraph</p>
			<p>Right Paragraph</p>
		</Flex>
	))
	.add('With padding', () => (
		<Flex padding="20px" backgroundColor="coral">
			<p>Left Paragraph</p>
			<p>Right Paragraph</p>
		</Flex>
	))
	.add('With flexDirection', () => (
		<Flex flexDirection="column" backgroundColor="coral">
			<p>Left Paragraph</p>
			<p>Right Paragraph</p>
		</Flex>
	))
	.add('With justifyContent', () => (
		<Flex justifyContent="space-between" backgroundColor="coral">
			<p>Left Paragraph</p>
			<p>Right Paragraph</p>
		</Flex>
	))
	.add('With alignItems', () => (
		<Flex alignItems="flex-end" backgroundColor="coral" style={{ height: '300px' }}>
			<p>Left Paragraph</p>
			<p>Right Paragraph</p>
		</Flex>
	))
	.add('With border', () => (
		<Flex border="1px solid coral">
			<p>Left Paragraph</p>
			<p>Right Paragraph</p>
		</Flex>
	))
	.add('With boxShadow', () => (
		<Flex boxShadow="1px 1px 12px 0 rgba(0,0,0,0.3)">
			<p>Left Paragraph</p>
			<p>Right Paragraph</p>
		</Flex>
	));
