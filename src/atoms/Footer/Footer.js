import React, { Component } from 'react';
import { any, string, object } from 'prop-types';
import styled, { css } from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';

const Section = styled('div')`
	${base};
	${font};

	width: 100%;
	padding: 80px 0;
	background-color: #062033;
	text-align: center;

	p {
		font-size: 18px;
	}
`;

const Layout = styled('div')`
	width: 100%;
	max-width: 1200px;
	padding: 0 15px;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media all and (max-width: 640px) {
		flex-direction: column;
		justify-content: flex-start;

		img {
			max-width: 200px;
			margin-bottom: 40px;
		}
	}
`;

const left = css`
	width: 240px;
	padding: 20px;

	@media all and (max-width: 640px) {
		width: 100%;
	}
`;

const right = css`
	width: calc(100% - 300px);
	padding: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;

	@media all and (max-width: 640px) {
		width: 100%;
		flex-direction: column;
		justify-content: flex-start;
		flex-wrap: nowrap;
	}
`;

const list = css`
	padding: 0 20px;
	margin: 0;
	list-style: none;
	text-align: left;
	display: flex;
	flex: 1;
	flex-direction: column;

	h4 {
		margin-top: 0;
		color: #5f678a;
		text-transform: uppercase;
		font-size: 0.85rem;
		letter-spacing: 0.05rem;
		font-weight: 600;
	}

	a {
		color: #899fc6;
		line-height: 2.2rem;
		letter-spacing: 0.01rem;
		font-size: 14px;
		border-bottom: 1px solid transparent;
		text-decoration: none;

		&:hover {
			color: #eee;
			border-bottom: 1px solid #eee;
		}
	}

	@media all and (max-width: 768px) {
		margin-bottom: 50px;

		h4 {
			font-size: 0.95rem;
		}

		a {
			font-size: 16px;
			line-height: 38px;
		}
	}

	@media all and (max-width: 640px) {
		text-align: center;
	}
`;

export default class Footer extends Component {
	static Brand = ({ children }) => <div className={left}>{children}</div>;
	static Links = ({ children }) => <div className={right}>{children}</div>;
	static List = ({ children }) => <ul className={list}>{children}</ul>;

	render() {
		const { className, style, children } = this.props;
		return (
			<Section className={className} style={style}>
				<Layout>{children}</Layout>
			</Section>
		);
	}
}

Footer.propTypes = {
	children: any,
	className: string,
	style: object,
};
