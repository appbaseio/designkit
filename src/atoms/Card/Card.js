import { string } from 'prop-types';
import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';

const Card = styled('a')`
	${base};
	${font};

	font-family: ${props => (props.font ? props.font : `'Inter', sans-serif`)};
	display: block;
	height: auto;
	padding: ${props => (props.big ? '60px 45px 32px' : '32px 45px')};
	border-radius: 2px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
	background-color: ${props => (props.theme === 'dark' ? '#2a3644' : '#fff')};
	text-align: center;
	color: ${props => (props.theme === 'dark' ? '#dfdfdf' : '#424242')};
	text-decoration: none;
	cursor: ${props => (props.href ? 'pointer' : 'default')};

	h4 {
		color: ${props => (props.theme === 'dark' ? '#dfdfdf' : '#424242')};
		transition: all 0.3s ease;
	}

	img {
		height: 120px;
		margin-bottom: 12px;
	}

	p {
		font-size: 14px;
		width: 100%;
		max-width: 200px;
		margin: 0 auto 20px;
	}

	&:hover,
	&:focus {
		h4 {
			color: ${props =>
				props.href ? props.theme.primaryColor || 'blue' : '#424242'};
		}
	}
`;

Card.defaultProps = {
	theme: 'light',
};

Card.propTypes = {
	theme: string,
};

export default Card;
