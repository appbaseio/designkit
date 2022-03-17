import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from '../Logo';
import Flex from '../../layouts/Flex';

storiesOf('Logo', module)
	.add('default', () => (
		<Logo>
			<Flex padding="30px">
				<Logo.Icon>
					<img
						src="https://cdn.jsdelivr.net/gh/appbaseio/cdn@dev/appbase/logos/reactivesearch-black.svg "
						alt="Icon"
						width={250}
					/>
				</Logo.Icon>
			</Flex>	
		</Logo>
	))
	.add('light', () => (
		<Flex padding="30px">
			<Logo>
				<Logo.Icon>
					<img
						src="https://cdn.jsdelivr.net/gh/appbaseio/cdn@dev/appbase/logos/reactivesearch-black.svg "
						alt="Icon"
						width={250}
					/>
				</Logo.Icon>			
			</Logo>
		</Flex>
	))
	.add('dark', () => (
		<Flex backgroundColor="#333" padding="30px">
			<Logo>
				<Logo.Icon>
					<img
						src="https://cdn.jsdelivr.net/gh/appbaseio/cdn@dev/appbase/logos/reactivesearch-white.svg "
						alt="Icon"
						width={250}
					/>
				</Logo.Icon>			
			</Logo>
		</Flex>
	));
