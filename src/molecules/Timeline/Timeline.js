import React from 'react';
import { css } from 'emotion';
import { Circle } from 'react-feather';
import { string, array, func, number } from 'prop-types';
import Button from '../../atoms/Button';

const container = (primaryColor, secondaryColor) => css`
	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		'Roboto', 'Noto Sans', 'Ubuntu', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	.timeline {
		@media (max-width: 768px) {
			margin: 20px 0;
		}
	}
	.item {
		display: grid;
		grid-template-columns: 0fr 1fr;
		grid-gap: 20px;
		position: relative;
		align-items: start;
		padding: 20px 0;
		cursor: pointer;
		opacity: 0;
		animation: show 0.5s ease forwards;
		animation-delay: 0.1s;
		svg {
			color: ${secondaryColor};
			z-index: 1;
			stroke-width: 4px;
			fill: white;
			transition: color ease 0.2s;
		}
		.content {
			h3 {
				margin: 0;
				line-height: 0.9;
				color: #54666d;
				font-weight: 400;
				display: flex;
				align-items: start;
				transition: color ease 0.5s;
			}
			h3 span {
				font-size: 16px;
				margin-left: 10px;
				transition: margin 0.4s ease;
			}
			p {
				margin: 12px 0;
				color: #8c8c8c;
			}
			.description {
				margin-top: 20px;
				color: #595959;
			}
		}
		&::before {
			position: absolute;
			top: -20px;
			left: 9px;
			height: 100%;
			width: 2px;
			content: '';
			z-index: 0;
			transition: background ease 0.5s;
			background: ${secondaryColor};
			background: -webkit-linear-gradient(
				to bottom,
				${secondaryColor},
				${secondaryColor}
			);
			background: linear-gradient(
				to bottom,
				${secondaryColor},
				${secondaryColor}
			);
		}
		:first-child {
			::before {
				background: ${secondaryColor};
				background: -webkit-linear-gradient(
					to bottom,
					#fff,
					${secondaryColor}
				);
				background: linear-gradient(
					to bottom,
					transparent,
					${secondaryColor}
				);
			}
		}
		:last-child {
			::before {
				height: 40%;
				background: ${secondaryColor};
				background: -webkit-linear-gradient(
					to bottom,
					${secondaryColor},
					${secondaryColor}
				);
				background: linear-gradient(
					to bottom,
					${secondaryColor},
					${secondaryColor}
				);
			}
		}
		&:hover {
			h3 {
				color: ${primaryColor};
			}
			svg {
				color: ${primaryColor};
			}
			h3 span {
				margin-left: 15px;
			}
			&::before {
				background: ${primaryColor};
				background: -webkit-linear-gradient(
					to bottom,
					${secondaryColor},
					${primaryColor},
					${secondaryColor}
				);
				background: linear-gradient(
					to bottom,
					${secondaryColor},
					${primaryColor},
					${secondaryColor}
				);
			}
			:first-child {
				::before {
					background: ${secondaryColor};
					background: -webkit-linear-gradient(
						to bottom,
						transparent,
						${primaryColor},
						${secondaryColor}
					);
					background: linear-gradient(
						to bottom,
						transparent,
						${primaryColor},
						${secondaryColor}
					);
				}
			}
			:last-child {
				::before {
					background: ${secondaryColor};
					background: -webkit-linear-gradient(
						to bottom,
						${secondaryColor},
						${primaryColor}
					);
					background: linear-gradient(
						to bottom,
						${secondaryColor},
						${primaryColor}
					);
				}
			}
		}
	}
`;

const getStringTime = time => {
	const hour = parseInt(time / 60, 10);
	const minutes = time % 60;

	if (hour && minutes) {
		return `${hour} hr ${minutes} min`;
	}
	if (hour) {
		return `${hour} hr`;
	}
	return `${minutes} mins`;
};

class Timeline extends React.Component {
	constructor(props) {
		super(props);
		const { items, itemsToShow } = props;
		const hideAll = items.length > itemsToShow;
		this.state = {
			hideAll,
		};
	}

	handleShowItems = e => {
		e.preventDefault();
		this.setState(prevState => ({
			hideAll: !prevState.hideAll,
		}));
	};

	componentDidUpdate(prevProps) {
		if (prevProps.items.length !== this.props.items.length) {
			const { items, itemsToShow } = this.props;
			const hideAll = items.length > itemsToShow;
			// eslint-disable-next-line
			this.setState({
				hideAll,
			});
		}
	}

	render() {
		const {
			items,
			primaryColor,
			secondaryColor,
			onClick,
			itemsToShow,
		} = this.props;
		const { hideAll } = this.state;
		return (
			<div className={container(primaryColor, secondaryColor)}>
				<div className="timeline">
					{items.map((chapter, index) => {
						if (hideAll && index > itemsToShow - 1) {
							return null;
						}
						return (
							// eslint-disable-next-line
							<div
								className="item"
								key={chapter.title}
								onClick={() => onClick && onClick(chapter)}
							>
								<Circle size={20} />
								<div className="content">
									<h3>
										{chapter.title} <span>→</span>
									</h3>
									{chapter.duration && (
										<p>{getStringTime(chapter.duration)}</p>
									)}
									{chapter.subtitle && (
										<p>{chapter.subtitle}</p>
									)}
									{chapter.description && (
										<div className="description">
											{chapter.description}
										</div>
									)}
								</div>
							</div>
						);
					})}
				</div>
				{items.length - itemsToShow > 0 && (
					<Button
						style={{
							zIndex: 2,
							background: primaryColor,
							color: 'white',
						}}
						shadow
						onClick={this.handleShowItems}
					>
						{hideAll
							? `Show ${items.length - itemsToShow} more`
							: 'Hide items'}
					</Button>
				)}
			</div>
		);
	}
}

Timeline.defaultProps = {
	itemsToShow: 3,
	primaryColor: '#7136d5',
	secondaryColor: '#d9d9d9',
};

Timeline.propTypes = {
	itemsToShow: number,
	secondaryColor: string,
	primaryColor: string,
	items: array,
	onClick: func,
};

export default Timeline;
