import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { storiesOf } from '@storybook/react';
import Testimonials from '.';

storiesOf('Testimonials', module).add('default', () => (
	<Testimonials
		primaryColor="#b89aea"
		leftIcon={<ChevronLeft />}
		rightIcon={<ChevronRight />}
		testimonials={[
			{
				image:
					'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
				from: 'John Toe',
				role: 'Photographer',
				description:
					'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
			},
			{
				image:
					'http://brianvogel.photography/wp-content/uploads/2014/09/Ryan-round.png',
				from: 'Paul Meteor',
				role: 'Scientist',
				description:
					'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
		]}
	/>
));
