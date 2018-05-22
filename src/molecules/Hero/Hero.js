import React from 'react';
import { node, string, object } from 'prop-types';
import { css } from 'react-emotion';

const content = css({
	height: '100%',
	padding: 45,
});

const Hero = ({ children, className, style }) => (
	<section className={className} style={style}>
		<div css={content}>{children}</div>
	</section>
);

Hero.propTypes = {
	children: node,
	className: string,
	style: object,
};

export default Hero;
