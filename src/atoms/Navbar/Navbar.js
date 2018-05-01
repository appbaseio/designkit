import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { getProperty, shade } from '../../shared/utils';

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
	z-index: 10;
	justify-content: space-between;
	align-items: center;
	background: ${props => (props.dark ? 'linear-gradient(180deg, #041723 0%, rgba(2,16,25,0) 100%)' : 'transparent')};
	transition: all .3s ease;

	&.fixed {
		background: ${props => (props.light ? '#fff' : '#021019')};
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

		a {
			text-decoration: none;
			color: ${props => (props.dark ? '#eee' : getProperty(props, 'primaryColor'))};
			transition: all .3s ease;
			font-size: 14px;
			font-weight: ${props => (props.bold ? '600' : '400')};
			text-transform: ${props => (props.bold ? 'uppercase' : 'none')};
			letter-spacing: 0.02rem;

			&:hover, &:focus {
				color: ${props => (props.dark ? '#fff' : (shade(getProperty(props, 'primaryColor'), -0.2)))};
			}
		}

		li.button a {
			color: #fff;
		}
	}

	@media all and (max-width: 767px) {
		.list {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			max-width: 400px;
			right: -400px;
			color: #424242;
			margin: 0;
			padding: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: #f3f3f3;
			transition: all .3s ease;

			li {
				margin: 0;
				width: 100%;
				padding: 12px 0;
			}
		}

		&.is-open .list {
			right: 0;

			li a {
				color: #424242;
			}

			li.button a {
				color: #fff;
			}
		}
	}
`;

const toggleMenu = css`
	display: none;
	border: 0;
	background-color: transparent;
	box-shadow: none;
	outline: none;
	user-select: none;
	z-index: 1;
	margin-top: 7px;
	cursor: pointer;

	@media all and (max-width: 767px) {
		display: block;
	}

	span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;
		background: #cdcdcd;
		border-radius: 3px;
		z-index: 1;
		transform-origin: 4px 0px;
		transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
					background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
					opacity 0.55s ease;

		&:first-child {
			transform-origin: 0% 0%;
		}

		&:nth-last-child(3) {
			transform-origin: 0% 100%;
		}
	}

	&.active span {
		opacity: 1;
		transform: rotate(-45deg) translate(-2px, -1px);
		background: #232323;

		&:nth-last-child(2) {
			opacity: 0;
			transform: rotate(0deg) scale(0.2, 0.2);
		}

		&:nth-last-child(3) {
			transform: rotate(45deg) translate(-2px, -1px);
		}
	}
`;

const handleScroll = () => {
	const nav = document.getElementById('nav');
	if (window.pageYOffset === 0) {
		nav.classList.remove('fixed');
	} else {
		nav.classList.add('fixed');
	}
};

class Navbar extends Component {
	static Logo = ({ children }) => (<div>{children}</div>);
	static List = ({ children }) => (<ul className="list">{children}</ul>);

	state = {
		showMenu: false,
	};

	componentDidMount() {
		const nav = document.getElementById('nav');
		if (this.props.fixed) {
			nav.classList.add('fixed');
		} else {
			window.addEventListener('scroll', handleScroll);
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', handleScroll);
	}

	toggleMenu = () => {
		this.setState(({ showMenu }) => ({
			showMenu: !showMenu,
		}));
	}

	render() {
		const { children, className, ...props } = this.props;
		const isOpen = this.state.showMenu ? 'is-open fixed' : '';
		return (
			<Nav id="nav" {...props} className={`${className || ''} ${isOpen}`}>
				{children}

				<button
					className={`${toggleMenu} ${this.state.showMenu ? 'active' : ''}`}
					onClick={this.toggleMenu}
				>
					<span />
					<span />
					<span />
				</button>
			</Nav>
		);
	}
}

Navbar.propTypes = {
	className: PropTypes.string,
	fixed: PropTypes.bool,
	children: PropTypes.any, // eslint-disable-line
};

export default Navbar;
