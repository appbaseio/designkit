import React from 'react';
import { css } from 'emotion';
import { array, string, object } from 'prop-types';
import { ChevronRight, ChevronLeft } from 'react-feather';
import Quote from './Quotes';

const container = css`
	font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		'Roboto', 'Noto Sans', 'Ubuntu', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	position: relative;
	&:focus,
	&:active {
		outline: 0;
	}
	.arrow {
		color: #2d1a5a;
		padding: 10px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 50%;
		z-index: 2;
		cursor: pointer;
		transform: translateY(-50%);
		transition: all ease 0.2s;
		box-shadow: 0 0px 4px 1px rgba(0, 0, 0, 0.3);
		@media (max-width: 576px) {
			padding: 6px;
		}
	}
	.arrow:hover {
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
	}
	.arrow.left {
		left: 0px;
		@media (max-width: 576px) {
			left: 33%;
			top: 110%;
		}
	}
	.arrow.right {
		right: 0px;
		@media (max-width: 576px) {
			right: 33%;
			top: 110%;
		}
	}
`;

const testimonial = css`
	width: 70%;
	background: white;
	border: 1px solid #e8e8e8;
	border-radius: 5px;
	box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.05);
	padding: 20px;
	position: relative;
	@media (max-width: 576px) {
		width: 90%;
	}
	@media (max-width: 320px) {
		width: 100%;
		padding: 10px;
		.quotes {
			width: 25px;
			height: 25px;
		}
	}
	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	p {
		width: 90%;
		margin: 40px auto;
		text-align: center;
		color: #595959;
		opacity: 0;
		animation: show 0.5s forwards ease-in;
	}
	.avatar {
		margin: 10px auto;
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		opacity: 0;
		animation: show 0.5s forwards ease;
		animation-delay: 0.4s;
		.image {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			overflow: hidden;
			img {
				margin: 0 auto;
				max-width: 100%;
				max-height: 100%;
			}
		}
		h4 {
			margin: 15px 0 5px;
			font-weight: 400;
			color: #262626;
		}
		h5 {
			margin: 0;
			font-weight: 400;
			color: #8c8c8c;
		}
	}
	.quotes {
		position: absolute;
		width: 40px;
		z-index: 0;
	}
	.quotes.start {
		transform: rotate(180deg);
		top: 20px;
		left: 20px;
	}
	.quotes.end {
		bottom: 20px;
		right: 20px;
	}
`;

class Testimonials extends React.Component {
	state = {
		selectedIndex: 0,
	};

	handleNext = () => {
		const { selectedIndex } = this.state;
		const { testimonials } = this.props;
		let nextIndex = selectedIndex + 1;
		if (selectedIndex === testimonials.length - 1) {
			nextIndex = 0;
		}
		this.setState({
			selectedIndex: nextIndex,
		});
	};

	handlePrevious = () => {
		const { selectedIndex } = this.state;
		const { testimonials } = this.props;
		let nextIndex = selectedIndex - 1;
		if (selectedIndex === 0) {
			nextIndex = testimonials.length - 1;
		}

		this.setState({
			selectedIndex: nextIndex,
		});
	};

	handleKey = e => {
		if (e.key === 'ArrowLeft') {
			this.handlePrevious();
		}
		if (e.key === 'ArrowRight') {
			this.handleNext();
		}
	};

	render() {
		const { selectedIndex } = this.state;
		const { testimonials } = this.props;
		const item = testimonials[selectedIndex];
		return (
			<div
				className={container}
				role="button"
				tabIndex="0"
				onKeyDown={this.handleKey}
			>
				{testimonials.length > 1 && (
					<div
						className="arrow left"
						onClick={this.handlePrevious}
						role="button"
						tabIndex="0"
						onKeyDown={this.handleKey}
						style={{ background: this.props.primaryColor }}
					>
						{this.props.leftIcon}
					</div>
				)}

				<div key={item.from} className={testimonial}>
					<div className="quotes start">
						{' '}
						<Quote fill={this.props.primaryColor} />
					</div>
					<div className="quotes end">
						{' '}
						<Quote fill={this.props.primaryColor} />
					</div>

					<p>{item.description}</p>
					<div className="avatar">
						<div className="image">
							<img src={item.image} alt={item.from} />
						</div>
						<h4>{item.from}</h4>
						<h5>{item.role}</h5>
					</div>
				</div>
				{testimonials.length > 1 && (
					<div
						className="arrow right"
						onClick={this.handleNext}
						role="button"
						tabIndex="0"
						onKeyDown={this.handleKey}
						style={{ background: this.props.primaryColor }}
					>
						{this.props.rightIcon}
					</div>
				)}
			</div>
		);
	}
}

Testimonials.defaultProps = {
	primaryColor: '#b89aea',
	leftIcon: <ChevronLeft />,
	rightIcon: <ChevronRight />,
};

Testimonials.propTypes = {
	style: object,
	className: string,
	testimonials: array,
	rightIcon: object,
	leftIcon: object,
	primaryColor: string,
};

export default Testimonials;
