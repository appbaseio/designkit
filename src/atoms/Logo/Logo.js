import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { getTextColor } from '../../shared/utils';

const StyledLogo = styled('a')`
	${base};
	${font};

	display: inline-flex;
	height: 32px;
	font-size: 20px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: ${props => getTextColor(props)};

	& > * {
		height: 100%;
		display: inline-flex;
		align-items: center;
	}
`;

const icon = css`
	margin-right: 8px;
`;

const lightText = css`
	font-weight: 300;
	margin-right: 4px;
`;

const darkText = css`
	font-weight: 600;
`;

class Logo extends Component {
	static Icon = ({ children }) => (<span className={icon}>{children}</span>)
	static Light = ({ children }) => (<span className={lightText}>{children}</span>);
	static Dark = ({ children }) => (<span className={darkText}>{children}</span>);

	render() {
		const { children, ...logoProps } = this.props;
		return <StyledLogo {...logoProps}>{this.props.children}</StyledLogo>;
	}
}

Logo.propTypes = {
	children: PropTypes.any, // eslint-disable-line
};

export default Logo;
