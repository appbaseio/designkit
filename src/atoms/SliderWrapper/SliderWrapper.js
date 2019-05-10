import React from 'react';
import { css } from 'emotion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronRight, ChevronLeft } from 'react-feather';

export const arrowStyles = background => css`
	box-shadow: 0px 10px 35px -16px rgba(0, 0, 0, 1);
	border-radius: 50%;
	z-index: 9;
	outline: none;
	top: 50%;
	position: absolute;
	transform: translate(0, -50%);
	cursor: pointer;
	display: flex;
	vertical-align: middle;
	background: ${background};
	padding: 10px;
	transition: all ease 0.1s;
	&:hover {
		box-shadow: 0px 5px 8px -4px rgba(0, 0, 0, 0.2);
	}
`;

function NextArrow(props) {
	// onClick from rc-slider
	const { onClick, arrowBackground } = props;
	return (
		<div
			onClick={onClick}
			className={arrowStyles(arrowBackground)}
			style={{
				right: '-20px',
			}}
		>
			{props.rightIcon}
		</div>
	);
}

function PrevArrow(props) {
	// onClick from rc-slider
	const { onClick, arrowBackground } = props;
	return (
		<div
			onClick={onClick}
			className={arrowStyles(arrowBackground)}
			style={{ left: '-20px' }}
		>
			{props.leftIcon}
		</div>
	);
}

const SliderWrapper = props => {
	const slidesToShow = props.settings.slidesToShow;
	const childrenCount = React.Children.count(props.children);
	return (
		<Slider
			nextArrow={<NextArrow {...props} />}
			prevArrow={<PrevArrow {...props} />}
			{...props.settings}
			slidesToShow={
				slidesToShow > childrenCount ? childrenCount : slidesToShow
			}
		>
			{props.children}
		</Slider>
	);
};

SliderWrapper.defaultProps = {
	settings: {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		adaptiveHeight: true,
	},
	arrowBackground: 'white',
	leftIcon: <ChevronLeft />,
	rightIcon: <ChevronRight />,
};

export default SliderWrapper;
