import React from 'react';
import { string, oneOfType, node } from 'prop-types';
import { css } from 'react-emotion';

const item = css`
	position: relative;
	&:hover .item-overlay.top {
		top: 0;
	}
	.item-overlay {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		background: #fff;
		overflow: hidden;
		/* fix text transition issue for .left and .right but need to overwrite left and right properties in .right */
		width: 100%;

		-moz-transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s;
		-webkit-transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s;
		transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s;
	}
	.item-overlay.top {
		top: 100%;
	}
	.item-overlay.left {
		top: 100%;
	}
`;

const Overlay = ({ content, children }) => (
	<div className={item}>
		{children}
		<div className="item-overlay top">{content}</div>
	</div>
);

Overlay.propTypes = {
	content: oneOfType([node, string]),
	children: oneOfType([node, string]),
};

export default Overlay;
