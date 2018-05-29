import React, { Component } from 'react';
import { node, oneOfType, string, object } from 'prop-types';
import { css, cx } from 'react-emotion';

import { H3 } from '../../atoms/typography';

const Image = props => <img alt="Feature" {...props} />;
const Title = ({ children }) => <H3>{children}</H3>;
const Description = ({ children }) => (
	<p css={{ fontSize: '1.125rem' }}>{children}</p>
);

const feat = css({
	textAlign: 'center',
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
	children: oneOfType(node, string),
};

Description.propTypes = {
	children: oneOfType(node, string),
};

Feature.propTypes = {
	children: node,
	className: string,
	style: object,
};

export default Feature;
