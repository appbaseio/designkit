import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';

const Nav = styled('nav')`
	${base};
	${font};

	position: fixed;
	width: 100%;
	height: ${props => (props.height || '60px')};
	top: 0;
	left: 0;
	padding: 0 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: transparent;
	transition: all .3s ease;

	&.fixed {
		background-color: ${props => (props.light ? '#fff' : '#424242')};
		box-shadow: 0px 2px 4px 0 rgba(0,0,0,0.3);
	}

	.list {
		display: inline-flex;
		flex-grow: 1;
		list-style: none;
		justify-content: flex-end;
		flex-direction: row;
		max-width: 600px;

		li {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: ${props => (props.gutter ? `0 0 0 ${props.gutter}` : '0 0 0 40px')};
		}
	}
`;


class Navbar extends Component {
	static Logo = ({ children }) => (<div>{children}</div>)
	static List = ({ children }) => (<ul className="list">{children}</ul>)

	render() {
		const { children, ...props } = this.props;
		return (
			<Nav {...props}>
				{children}
			</Nav>
		);
	}
}

Navbar.propTypes = {
	children: PropTypes.any, // eslint-disable-line
};

export default Navbar;
