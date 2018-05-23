import React from 'react';
import { storiesOf } from '@storybook/react';
import ToggleButton from './ToggleButton';

storiesOf('ToggleButton', module)
	.add('default', () => (
		<ToggleButton options={['MONTHLY', 'ANNUALLY (save 33%)']} />
	))
	.add('with more options', () => (
		<ToggleButton
			options={[
				'MONTHLY',
				'QUARTERLY',
				'HALF-YEARLY',
				'ANNUALLY (save 33%)',
			]}
		/>
	));
