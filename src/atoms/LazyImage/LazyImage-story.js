import React from 'react';
import { storiesOf } from '@storybook/react';
import LazyImage from '.';
import Grid from '../Grid/Grid';

storiesOf('LazyImage', module).add('default', () => (
	<Grid size={4} gutter="20px" lgGutter="12px" lgSize={4} smSize={2}>
		<LazyImage
			src="https://images.unsplash.com/photo-1553618551-fba689030290?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=100"
			alt="Nature Photo"
			style={{ width: '100%' }}
		/>
		<LazyImage
			src="https://images.unsplash.com/photo-1551334787-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3951&q=100"
			alt="Nature Photo"
			style={{ width: '100%' }}
		/>
		<LazyImage
			src="https://images.unsplash.com/photo-1551464885-21348ccc8b67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4951&q=100"
			alt="Nature Photo"
			style={{ width: '100%' }}
		/>
		<LazyImage
			src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&auto=format&fit=crop&w=6950&q=100"
			alt="Nature Photo"
			style={{ width: '100%' }}
		/>
	</Grid>
));
