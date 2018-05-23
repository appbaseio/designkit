import React, { Component } from 'react';
import { string, object, arrayOf, number, func } from 'prop-types';
import styled, { css, cx } from 'react-emotion';

import Button from '../../atoms/Button';
import base from '../../shared/base';
import font from '../../shared/font';
import { shade } from '../../shared/utils';
import theme from '../../theme';
import media from '../../shared/mediaQueries';

const accent = css({
	background: theme.accentColor,
	'&:hover': {
		background: shade(theme.accentColor, -0.1),
	},
});

const curve = ({ curveLeft, curveRight }) =>
	css({
		borderTopLeftRadius: curveLeft ? 3 : 0,
		borderBottomLeftRadius: curveLeft ? 3 : 0,
		borderTopRightRadius: curveRight ? 3 : 0,
		borderBottomRightRadius: curveRight ? 3 : 0,
		minWidth: 185,
		[media('xs')]: {
			minWidth: 'auto',
		},
	});

const Inactive = styled('button')(
	base,
	font,
	{
		background: '#86DDF8',
		color: '#052B37',
		border: 0,
		borderRadius: '3px 0 0 3px',
		padding: '8px 16px',
		cursor: 'pointer',
		fontSize: '0.9rem',
		fontWeight: 'bold',
	},
	curve,
);

class ToggleButton extends Component {
	state = {
		value: this.props.defaultValue,
	};

	handleClick = index => {
		const { value } = this.state;
		const { onChange } = this.props;
		if (value !== index) {
			this.setState({
				value: index,
			});
			if (onChange) {
				onChange(index);
			}
		}
	};

	render() {
		const { value } = this.state;
		const { options, className, style } = this.props;
		return (
			<div className={className} style={style}>
				{options.map((option, index) => {
					const curveLeft = index === 0;
					const curveRight = index === options.length - 1;
					return index === value ? (
						<Button
							key={option}
							big
							shadow
							bold
							css={cx(curve({ curveLeft, curveRight }), accent)}
							onClick={() => this.handleClick(index)}
						>
							{option}
						</Button>
					) : (
						<Inactive
							key={option}
							curveLeft={curveLeft}
							curveRight={curveRight}
							onClick={() => this.handleClick(index)}
						>
							{option}
						</Inactive>
					);
				})}
			</div>
		);
	}
}

ToggleButton.defaultProps = {
	defaultValue: 0,
};

ToggleButton.propTypes = {
	style: object,
	className: string,
	options: arrayOf(string).isRequired,
	defaultValue: number,
	onChange: func,
};

export default ToggleButton;
