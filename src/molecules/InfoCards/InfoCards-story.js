import React from 'react';
import { storiesOf } from '@storybook/react';
import { Play } from 'react-feather';
import InfoCards from './InfoCards';
import LazyImage from '../../atoms/LazyImage';
import { H3 } from '../../atoms/typography';

storiesOf('InfoCards', module).add('default', () => (
	<InfoCards
		color={{
			primary: '#2971fe',
			title: '#262626',
			subtitle: '#595959',
			description: '#bfbfbf',
			activeDescription: 'white',
		}}
	>
		<InfoCards.Section>
			<InfoCards.Card
				title="Card title"
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
				subtitle="Lorem Ipsum is simply dummy text"
				iconAtRight
			/>
			<InfoCards.Card
				icon={<Play />}
				title="Card Icon"
				description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
				iconAtRight
			/>
		</InfoCards.Section>

		<InfoCards.MainSection>
			{selectedItem =>
				selectedItem ? (
					<div style={{ textAlign: 'center', padding: '10px' }}>
						<H3>{selectedItem.title}</H3>
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
				description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
			/>
			<InfoCards.Card
				icon={<Play />}
				title="Card Icon"
				description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
			/>
		</InfoCards.Section>
	</InfoCards>
));
