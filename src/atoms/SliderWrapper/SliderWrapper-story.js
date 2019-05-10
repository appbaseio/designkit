import React from 'react';
import { storiesOf } from '@storybook/react';
import { ArrowLeft, ArrowRight } from 'react-feather';
import SliderWrapper from './SliderWrapper';
import LazyImage from '../LazyImage';

storiesOf('SliderWrapper', module).add('default', () => (
	<div style={{ padding: 20 }}>
		<SliderWrapper
			arrowBackground="#eeeded"
			leftIcon={<ArrowLeft />}
			rightIcon={<ArrowRight />}
		>
			<LazyImage
				src="https://images.unsplash.com/photo-1553618551-fba689030290?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=100"
				alt="Nature Photo"
			/>
			<LazyImage
				src="https://images.unsplash.com/photo-1551334787-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=100"
				alt="Nature Photo"
			/>
			<LazyImage
				src="https://images.unsplash.com/photo-1551464885-21348ccc8b67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=100"
				alt="Nature Photo"
			/>
			<LazyImage
				src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=100"
				alt="Nature Photo"
			/>
		</SliderWrapper>
	</div>
));
