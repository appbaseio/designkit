import React from 'react';
import { storiesOf } from '@storybook/react';
import InfoCards from './InfoCards';
import { H3 } from '../../atoms/typography';

storiesOf('InfoCards', module).add('default', () => (
	<InfoCards>
		<InfoCards.Section>
			<InfoCards.Card
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
				title="Realtime Streaming"
				subtitle={<a href="#">Read More</a>}
				iconAtRight
				icon={
					<img
						style={{ maxHeight: 40 }}
						src="https://appbase.io/static/images/features/Group%2057@2x.png"
					/>
				}
			/>
			<InfoCards.Card
				icon={
					<img src="https://appbase.io/static/images/features/Logs@3x.svg" />
				}
				title="Logs"
				subtitle={<a href="#">Read More</a>}
				description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
				iconAtRight
			/>
			<InfoCards.Card
				icon={
					<img src="https://appbase.io/static/images/features/Secure%20Copy@3x.svg" />
				}
				title="Card Icon"
				subtitle="Read More"
				description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
				iconAtRight
			/>
		</InfoCards.Section>

		<InfoCards.MainSection>
			{selectedItem =>
				selectedItem ? (
					<div
						style={{
							textAlign: 'center',
							padding: '10px',
							height: '100%',
							boxSizing: 'border-box',
							background: '#225dd4',
							borderRadius: 5,
							color: '#eaeaea',
						}}
					>
						<H3 style={{ color: 'white' }}>{selectedItem.title}</H3>
						<p>{selectedItem.description}</p>
					</div>
				) : (
					<div
						style={{
							textAlign: 'center',
							padding: '10px',
							height: 250,
						}}
					>
						<img
							style={{ maxWidth: '100%', maxHeight: '100%' }}
							src="https://appbase.io/static/images/landing-screen@2x.png"
						/>
					</div>
				)
			}
		</InfoCards.MainSection>

		<InfoCards.Section>
			<InfoCards.Card
				title="Card title"
				icon={
					<img
						style={{ maxHeight: 40 }}
						src="https://appbase.io/static/images/features/Group%2059@2x.png"
					/>
				}
				subtitle="Read More"
				description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
			/>
			<InfoCards.Card
				icon={
					<img
						style={{ maxHeight: 40 }}
						src="https://appbase.io/static/images/features/Group%2060@2x.png"
					/>
				}
				title="Card Icon"
				subtitle="Read More"
				description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
			/>
			<InfoCards.Card
				icon={
					<img
						style={{ maxHeight: 40 }}
						src="https://appbase.io/static/images/features/Group%2063@2x.png"
					/>
				}
				title="Card Icon"
				subtitle="Read More"
				description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
			/>
		</InfoCards.Section>
	</InfoCards>
));
