import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from '../Navbar';
import Logo from '../Logo';
import Button from '../Button';

storiesOf('Navbar', module)
	.add('default', () => (
		<Navbar gutter="60px">
			<Navbar.Logo>
				<Logo>
					<Logo.Icon>
						<img src="./icon.svg" alt="Icon" />
					</Logo.Icon>
					<Logo.Light>Reactive</Logo.Light>
					<Logo.Dark>Maps</Logo.Dark>
				</Logo>
			</Navbar.Logo>
			<Navbar.List>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
				<li><Button dark>Get started</Button></li>
			</Navbar.List>
		</Navbar>
	));
