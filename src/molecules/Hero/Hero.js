import React from 'react';
import { node, string, object, bool } from 'prop-types';
import { css } from 'react-emotion';

const content = css({
	height: '100%',
	padding: 45,
});

// need to design this better, time constraints
const Hero = ({ children, className, style, fullBleed }) => (
	<section className={className} style={style}>
		{fullBleed ? children : <div css={content}>{children}</div>}
	</section>
);

Hero.propTypes = {
	children: node,
	className: string,
	style: object,
	fullBleed: bool,
};

export default Hero;
