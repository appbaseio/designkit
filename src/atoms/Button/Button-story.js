import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';

storiesOf('Button', module)
	.add('default', () => (
		<Button>Get started</Button>
	))
	.add('small', () => (
		<Button small>Get started</Button>
	))
	.add('big', () => (
		<Button big>Get started</Button>
	))
	.add('block', () => (
		<Button block>Get started</Button>
	))
	.add('primary', () => (
		<Button primary>Get started</Button>
	))
	.add('dark', () => (
		<Button dark>Get started</Button>
	))
	.add('success', () => (
		<Button success>Get started</Button>
	))
	.add('warning', () => (
		<Button warning>Get started</Button>
	))
	.add('alert', () => (
		<Button alert>Get started</Button>
	))
	.add('transparent', () => (
		<Button transparent>Get started</Button>
	))
	.add('disabled', () => (
		<Button disabled>Get started</Button>
	))
	.add('shadow', () => (
		<Button shadow>Get started</Button>
	));
