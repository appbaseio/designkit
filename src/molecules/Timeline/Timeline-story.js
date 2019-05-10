import React from 'react';
import { storiesOf } from '@storybook/react';
import Timeline from './Timeline';
import Button from '../../atoms/Button';

storiesOf('Timeline', module)
	.add('default', () => (
		<Timeline
			primaryColor="#1804ff"
			itemsToShow={2}
			onClick={item => alert(`Clicked ${item.title}`)}
			items={[
				{
					title: 'Item 1',
					subtitle: 'Item 1 Subtitle',
				},
				{
					title: 'Item 2',
					subtitle: 'Item 2 Subtitle',
					description: 'Item 2 Description',
				},
				{
					title: 'Item 3',
					subtitle: 'Item 3 Subtitle',
					description: 'Item 3 Description',
				},
				{
					title: 'Item 4',
					subtitle: 'Item 4 Subtitle',
				},
			]}
		/>
	))
	.add('with Custom Components', () => (
		<Timeline
			primaryColor="#d9534f"
			onClick={item => alert(`Clicked ${item.title}`)}
			items={[
				{
					title: 'Item 1',
					subtitle: 'I have Subtitle',
					description: <h2>I am H2 element</h2>,
				},
				{
					title: 'Item 2',
					description: 'I am simple description',
				},
				{
					title: 'Item 3',
					subtitle: 'I have button',
					description: <Button>Call to Action</Button>,
				},
				{
					title: 'Item 4',
					subtitle: 'I have basic subtitle',
					description: 'I have simple descrtiption',
				},
				{
					title: ' No description & subtitle',
				},
				{
					title: 'Item 6',
					description: (
						<Button
							big
							success
							onClick={e => {
								e.preventDefault();
								e.stopPropagation();
								alert('Success Clicked');
							}}
						>
							Big Success Button with No subtitle
						</Button>
					),
				},
			]}
		/>
	));
