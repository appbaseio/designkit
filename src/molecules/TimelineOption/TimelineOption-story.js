import React from 'react';
import { storiesOf } from '@storybook/react';
import { Play } from 'react-feather';
import TimelineOption from './TimelineOption';

storiesOf('TimelineOption', module).add('default', () => (
	<TimelineOption
		onClick={chapter => console.log(chapter)}
		items={{
			'1': {
				title: 'Topic 1',
				subtitle: 'Waltkhrough of appbase',
				icon: <Play />,
				chapters: [
					{
						title: 'Chapter 1',
						duration: 12,
						description:
							'Adding dependencies jgjh jhghjgjhghj hjgjhghjg',
						link: 'google.com',
					},
					{
						title: 'Chapter 2',
						duration: 32,
						description: 'Checking docs',
					},
					{
						title: 'Chapter 3',
						duration: 23,
					},
				],
			},
			'2': {
				title: 'Topic 2',
				subtitle:
					'Development Setup, eslint, prettier, babel ,webpack ',
				chapters: [
					{
						title: 'Topic 2 Chapter 1',
						duration: 2,
					},
					{
						title: 'Topic 2 Chapter 2',
						duration: 21,
					},
					{
						title: 'Topic 2 Chapter 3',
						duration: 23,
					},
					{
						title: 'Topic 2 Chapter 4',
						duration: 3,
					},
					{
						title: 'Topic 2 Chapter 23',
						duration: 34,
					},
					{
						title: 'Topic 2 Chapter 33',
						duration: 45,
					},
				],
			},
		}}
	/>
));
