import React from 'react';
import { storiesOf } from '@storybook/react';
import { Play } from 'react-feather';
import InfoCards from './InfoCards';
import LazyImage from '../../atoms/LazyImage';
import { Title } from '../../atoms/typography';
import Card from '../../atoms/Card';

storiesOf('InfoCards', module).add('default', () => (
	<InfoCards
		color={{
			primary: '#180Aff',
			title: '#262626',
			subtitle: '#595959',
			description: '#bfbfbf',
			activeDescription: 'white',
		}}
	>
		<InfoCards.Section>
			<InfoCards.Card
				title="Card title"
				description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				subtitle="Subtitle"
				iconAtRight
			/>
			<InfoCards.Card
				icon={<Play />}
				title="Card Icon"
				description="I am the description"
				iconAtRight
			/>
		</InfoCards.Section>

		<InfoCards.MainSection>
			{selectedItem =>
				selectedItem ? (
					<div style={{ textAlign: 'left' }}>
						<Title>{selectedItem.title}</Title>
						<p>{selectedItem.description}</p>
					</div>
				) : (
					<LazyImage
						src="https://images.unsplash.com/photo-1551464885-21348ccc8b67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=951&q=100"
						alt="Nature Photo"
						style={{ width: '100%' }}
					/>
				)
			}
		</InfoCards.MainSection>

		<InfoCards.Section>
			<InfoCards.Card
				title="Card title"
				description="I am the description"
			/>
			<InfoCards.Card
				icon={<Play />}
				title="Card Icon"
				description="I am the description"
			/>
		</InfoCards.Section>
	</InfoCards>
));
