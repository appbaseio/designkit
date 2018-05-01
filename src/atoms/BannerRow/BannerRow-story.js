import React from 'react';
import { storiesOf } from '@storybook/react';
import BannerRow from '../BannerRow';

import H2 from '../typography/H2';
import Button from '../Button';

storiesOf('BannerRow', module)
	.add('default', () => (
		<BannerRow>
			<BannerRow.Column>
				<div>
					<H2 light>Build a live app in 5 minutes</H2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis
						vel nisi ac tincidunt. In vel egestas enim. In bibendum dui eget tristique maximus.
					</p>
					<Button big primary>Get Started</Button>
				</div>
			</BannerRow.Column>
			<BannerRow.Column>
				<div>
					<H2 light>Work with us to build your app</H2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis
						vel nisi ac tincidunt. In vel egestas enim. In bibendum dui eget tristique maximus.
					</p>
					<Button big dark>SUPPORT</Button>
				</div>
			</BannerRow.Column>
		</BannerRow>
	));
