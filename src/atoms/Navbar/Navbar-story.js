import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from '../Navbar';
import Logo from '../Logo';
import Button from '../Button';

storiesOf('Navbar', module)
	.add('default', () => (
		<Navbar gutter="60px" bold>
			<Navbar.Logo>
				<Logo>
					<Logo.Icon>
						<img
							src="https://cdn.jsdelivr.net/gh/appbaseio/cdn@dev/appbase/logos/reactivesearch-black.svg"
							alt="Icon"
							width={250}
						/>
					</Logo.Icon>
				</Logo>
			</Navbar.Logo>
			<Navbar.List>
				<li className="active">
					<a href="/">Item 1</a>
				</li>
				<li>
					<a href="/">Item 2</a>
				</li>
				<li>
					<a href="/">Item 3</a>
				</li>
				<li className="button">
					<Button dark>Get started</Button>
				</li>
			</Navbar.List>
		</Navbar>
	))
	.add('light', () => (
		<Navbar gutter="60px" bold>
			<Navbar.Logo>
				<Logo>
					<Logo.Icon>
						<img
							src="https://cdn.jsdelivr.net/gh/appbaseio/cdn@dev/appbase/logos/reactivesearch-black.svg"
							alt="Icon"
							width={250}
						/>
					</Logo.Icon>			
				</Logo>
			</Navbar.Logo>
			<Navbar.List>
				<li className="active">
					<a href="/">Item 1</a>
				</li>
				<li>
					<a href="/">Item 2</a>
				</li>
				<li>
					<a href="/">Item 3</a>
				</li>
				<li className="button">
					<Button dark>Get started</Button>
				</li>
			</Navbar.List>
		</Navbar>
	))
	.add('dark', () => (
		<Navbar gutter="60px" bold dark>
			<Navbar.Logo>
				<Logo light>
					<Logo.Icon>
						<img
							src="https://cdn.jsdelivr.net/gh/appbaseio/cdn@dev/appbase/logos/reactivesearch-white.svg "
							alt="Icon"
							width={250}
						/>
					</Logo.Icon>			
				</Logo>
			</Navbar.Logo>
			<Navbar.List>
				<li className="active">
					<a href="/" style={{ color: '#efefef' }}>Item 1</a>
				</li>
				<li>
					<a href="/" style={{ color: '#efefef' }}>Item 2</a>
				</li>
				<li>
					<a href="/" style={{ color: '#efefef' }}>Item 3</a>
				</li>
				<li className="button">
					<Button dark>Get started</Button>
				</li>
			</Navbar.List>
		</Navbar>
	));
