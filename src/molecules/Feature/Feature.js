import React, { Component } from 'react';
import { node, oneOfType, string, object } from 'prop-types';
import { css, cx } from 'react-emotion';

import { H3 } from '../../atoms/typography';
import queries from '../../shared/mediaQueries';

const Image = props => <img alt="Feature" {...props} />;
const Title = ({ children }) => (
	<H3 css={{ fontSize: '1.2rem', lineHeight: '1.7rem', fontWeight: 600 }}>
		{children}
	</H3>
);
const Description = ({ children }) => (
	<p css={{ fontSize: '1.025rem', maxWidth: 300, margin: '15px auto' }}>
		{children}
	</p>
);

const feat = css({
	textAlign: 'center',
	[queries('lg')]: {
		margin: 30,
	},
	img: {
		width: 200,
		height: 165,
		objectFit: 'contain',
	},
});

class Feature extends Component {
	static Image = Image;
	static Title = Title;
	static Description = Description;
	render() {
		const { children, className, style } = this.props;
		return (
			<div className={cx(feat, className)} style={style}>
				{children}
			</div>
		);
	}
}

Title.propTypes = {
	children: oneOfType([node, string]),
};

Description.propTypes = {
	children: oneOfType([node, string]),
};

Feature.propTypes = {
	children: node,
	className: string,
	style: object,
};

export default Feature;
