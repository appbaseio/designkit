import React from 'react';
import { storiesOf } from '@storybook/react';
import { H1, H2, H3, Title, Text, A } from '../typography';
import Flex from '../../layouts/Flex';

storiesOf('typography', module)
	.add('Headings', () => (
		<Flex flexDirection="column">
			<H1>Heading 1</H1>
			<H2>Heading 2</H2>
			<H3>Heading 3</H3>
			<Title>Title</Title>
			<Text>Body</Text>
			<A>Link</A>
		</Flex>
	))
	.add('Light Headings', () => (
		<Flex flexDirection="column" backgroundColor="#333">
			<H1 light>Heading 1</H1>
			<H2 light>Heading 2</H2>
			<H3 light>Heading 3</H3>
			<Title light>Title</Title>
			<Text light>Body</Text>
			<A>Link</A>
		</Flex>
	));
