import React from 'react';
import { css } from 'emotion';
import { string } from 'prop-types';

const getRandomColor = () => {
	const colors = [
		'#f6d8d8',
		'#ffe4ff',
		'#dcebff',
		'#bbffbb',
		'#ffffd2',
		'#ffb3b3',
		'#d1b3ff',
		'#ddff99',
		'#99ddff',
		'#ffd9b3',
	];

	const index = parseInt(Math.random() * colors.length, 10);
	return colors[index];
};

const placeholder = isLoading => css`
	transition: background 0.2s ease;
	background: ${isLoading ? getRandomColor() : 'inherit'};
`;

const imageStyles = isLoading => css`
	opacity: ${isLoading ? 0 : 1};
	transition: opacity ease 0.4s;
`;

class LazyImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
		};
	}

	componentDidMount() {
		const { src } = this.props;
		this.handleImage(src);
	}

	handleImage(src) {
		const image = new Image();
		image.src = src;
		image.onload = () => {
			this.setState({ src, isLoading: false });
		};
	}

	render() {
		const { alt, ...rest } = this.props;
		const { isLoading, src } = this.state;
		return (
			<div css={placeholder(isLoading)}>
				<img
					src={src}
					alt={alt}
					css={imageStyles(isLoading)}
					{...rest}
				/>
			</div>
		);
	}
}

LazyImage.propTypes = {
	alt: string,
	src: string,
};

export default LazyImage;
