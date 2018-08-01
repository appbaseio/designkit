import styled from 'react-emotion';

import media from '../shared/mediaQueries';

const HeroSection = styled('section')(props => ({
	background: props.background || 'transparent',
	minHeight: '100%',
	height: '100vh',
	padding: 50,
	display: 'flex',
	alignItems: 'center',
	[media('md')]: {
		padding: '50px 25px',
		height: '100%',
	},
}));

export default HeroSection;
