import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { cx } from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { shade, getProperty } from '../../shared/utils';

const Nav = styled('nav')`
	${base};
	${font};

	position: absolute;
	width: 100%;
	height: ${props => props.height || '60px'};
	top: 0;
	left: 0;
	padding: 0 15px;
	display: flex;
	z-index: 10;
	justify-content: space-between;
	align-items: center;
	background: ${props =>
		props.dark
			? 'linear-gradient(180deg, #041723 0%, rgba(2,16,25,0) 100%)'
			: 'transparent'};
	transition: all 0.3s ease;

	&.fixed {
		position: fixed;
		background: ${props => (props.dark ? '#021019' : '#fff')};
		box-shadow: ${props =>
			props.dark
				? '0px 2px 4px 0 rgba(0,0,0,0.3)'
				: '0px 2px 4px 0 rgba(0,0,0,0.08)'};
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
			margin: ${props =>
				props.gutter ? `0 0 0 ${props.gutter}` : '0 0 0 40px'};
		}

		a {
			text-decoration: none;
			color: ${props => (props.dark ? '#eee' : '#383E43')};
			transition: all 0.3s ease;
			font-size: 14px;
			font-weight: ${props => (props.bold ? '600' : '400')};
			text-transform: ${props =>
				props.uppercase ? 'uppercase' : 'none'};
			letter-spacing: 0.02rem;
			padding-top: 2px;
			padding-bottom: 2px;
			border-bottom: 2px solid transparent;
			transition: all 0.3s ease;

			&:hover,
			&:focus {
				color: ${props =>
					props.dark ? '#fff' : shade('#383E43', -0.2)};
			}
		}

		li.button a {
			color: #fff;
			line-height: 15px;
		}

		li.active a {
			border-bottom: 2px solid
				${props => (props.dark ? '#eee' : '#383E43')};
		}
	}

	.mobile-nav {
		display: none;
	}

	@media all and (max-width: 767px) {
		.mobile-nav {
			display: block;
		}

		.list {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100vh;
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
			transition: all 0.3s ease;
			overflow-y: auto;

			li {
				margin: 0;
				width: 100%;
				padding: 12px 0;
			}

			&.with-mobile-nav {
				display: none;
			}

			&.mobile-nav {
				justify-content: flex-start;
				padding-top: 80px;
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

			li.active a {
				border-bottom: 2px solid transparent;
				color: ${props => getProperty(props, 'primaryColor')};
			}
		}
	}
`;

const ToggleMenu = styled('button')`
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
		background: ${props => (props.dark ? '#cdcdcd' : '#333')};
		border-radius: 3px;
		z-index: 1;
		transform-origin: 4px 0px;
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

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

class Navbar extends Component {
	static Logo = ({ children }) => <Fragment>{children}</Fragment>;
	static List = ({ children, renderMobileNav }) =>
		renderMobileNav ? (
			<Fragment>
				<div className="list mobile-nav">{renderMobileNav()}</div>
				<ul className="list with-mobile-nav">{children}</ul>
			</Fragment>
		) : (
			<ul className="list">{children}</ul>
		);

	state = {
		showMenu: false,
	};

	componentDidMount() {
		if (!this.props.notFixed) {
			this.isFixed = false;
			const nav = document.getElementById('nav');
			if (this.props.fixed) {
				nav.classList.add('fixed');
			} else {
				window.addEventListener('scroll', this.handleScroll);
			}
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		const nav = document.getElementById('nav');
		const threshold = this.props.fixOffset || 0;
		if (window.pageYOffset <= threshold) {
			nav.classList.remove('fixed');
			this.isFixed = false;
		} else {
			nav.classList.add('fixed');
			this.isFixed = true;
		}
	};

	toggleMenu = () => {
		this.setState(({ showMenu }) => ({
			showMenu: !showMenu,
		}));
	};

	render() {
		const {
			children,
			className,
			fixOffset,
			toggleMenu,
			...props
		} = this.props;
		const isOpen = this.state.showMenu ? 'is-open' : '';
		const toggleMenuClass = this.state.showMenu
			? cx(toggleMenu.className, 'active')
			: toggleMenu.className;
		return (
			<Nav
				id="nav"
				fixOffset={fixOffset}
				{...props}
				className={`${className || ''} ${isOpen} ${
					this.isFixed ? 'fixed' : ''
				}`}
			>
				{children}

				<ToggleMenu
					className={toggleMenuClass}
					onClick={this.toggleMenu}
					dark={this.props.dark}
				>
					<span />
					<span />
					<span />
				</ToggleMenu>
			</Nav>
		);
	}
}

Navbar.defaultProps = {
	toggleMenu: {},
};

Navbar.propTypes = {
	className: PropTypes.string,
	fixed: PropTypes.bool,
	notFixed: PropTypes.bool,
	fixOffset: PropTypes.number,
	dark: PropTypes.bool,
	toggleMenu: PropTypes.object,
	children: PropTypes.any, // eslint-disable-line
};

export default Navbar;
