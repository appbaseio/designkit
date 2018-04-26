import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from '../Logo';
import Flex from '../../layouts/Flex';

storiesOf('Logo', module)
	.add('default', () => (
		<Logo>
			<Logo.Icon>
				<img src="./icon.svg" alt="Icon" />
			</Logo.Icon>
			<Logo.Light>Reactive</Logo.Light>
			<Logo.Dark>Maps</Logo.Dark>
		</Logo>
	))
	.add('light', () => (
		<Flex backgroundColor="#333" padding="30px">
			<Logo light>
				<Logo.Icon>
					<img src="./icon.svg" alt="Icon" />
				</Logo.Icon>
				<Logo.Light>Reactive</Logo.Light>
				<Logo.Dark>Maps</Logo.Dark>
			</Logo>
		</Flex>
	));
