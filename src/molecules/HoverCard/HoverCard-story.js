import React from 'react';
import { storiesOf } from '@storybook/react';
import HoverCard from './HoverCard';
import Button from '../../atoms/Button';

storiesOf('HoverCard', module).add('default', () => (
	<HoverCard
		style={{ width: 280 }}
		cover="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
	>
		<HoverCard.Title>Product Search</HoverCard.Title>
		<HoverCard.Description>
			Lorem ipsum dolor sit amet, ipsum dolor consectetur adipiscing elit.
		</HoverCard.Description>

		<HoverCard.Actions likes={25} href="Frfr" />
		<HoverCard.Overlay>
			<HoverCard.Title>Product Search</HoverCard.Title>
			<HoverCard.Description>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
				ac euismod arcu. Phasellus sit amet blandit ante, sit amet
				rutrum nulla. Fusce ut nibh nibh.
			</HoverCard.Description>
			<HoverCard.Description>Total sales: 11</HoverCard.Description>
			<HoverCard.Description>
				Last Modified: November, 20 - 2018
			</HoverCard.Description>
			<Button
				style={{
					background: '#FF307A',
					marginTop: 20,
					color: '#fff',
				}}
				block
			>
				Buy Now
			</Button>
		</HoverCard.Overlay>
	</HoverCard>
));
