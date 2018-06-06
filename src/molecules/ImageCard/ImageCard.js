import React from 'react';
import styled, { css } from 'react-emotion';
import { string, bool, node } from 'prop-types';

const Wrapper = styled('div')`
	position: relative;
	display: flex;
	min-height: 360px;
	flex-direction: column;
	border-radius: 2px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
	overflow: hidden;
`;

const Image = styled('div')`
	width: 100%;
	height: ${props => (props.big ? '160px' : '120px')};
	background-image: url(${props => props.src});
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
`;

const Card = styled('div')`
	height: auto;
	padding: ${props => (props.big ? '60px 45px 32px' : '32px 45px')};
	background-color: #fff;
	text-align: center;
	padding-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;

	h4 {
		color: #424242;
		margin: 0 0 10px;
	}

	p {
		font-size: 14px;
		width: 100%;
		max-width: 200px;
	}
`;

const primaryColor = ({ theme }) =>
	css({
		color: theme.primaryColor,
	});

const smallFont = css({
	fontSize: '0.875rem',
});

const grayColor = css({
	color: '#545761',
});

const Title = styled('h3')(primaryColor, {
	fontSize: '1rem',
});

const Description = styled('p')(grayColor, smallFont, {
	marginBottom: 40,
});

const Footer = styled('p')(grayColor, smallFont, {});

const Link = styled('a')(primaryColor, smallFont, {
	textDecoration: 'none',
	fontWeight: 600,
});

const ImageCard = ({ src, big, title, description, footer, link }) => (
	<Wrapper>
		<Image src={src} big={big} />
		<Card>
			<Title>{title}</Title>
			<Description>{description}</Description>
			<Footer>{footer}</Footer>
			<Link href={link} target="_blank" rel="noreferrer noopener">
				READ MORE
			</Link>
		</Card>
	</Wrapper>
);

ImageCard.propTypes = {
	src: string,
	title: string,
	description: string,
	footer: string,
	link: string,
	big: bool,
	children: node,
};

export default ImageCard;
