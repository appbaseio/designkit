import React from 'react';
import { css } from 'emotion';
import { Book } from 'react-feather';
import Timeline from '../Timeline';

const container = primaryColor => css`
	display: grid;
	grid-template-columns: 1fr 0.8fr;
	grid-gap: 10px;
	padding: 20px 0;

	font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		'Roboto', 'Noto Sans', 'Ubuntu', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	@media (max-width: 1024px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 768px) {
		grid-template-columns: auto;
	}
	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.topic {
		display: grid;
		grid-template-columns: 0fr 1fr;
		align-items: start;
		grid-gap: 20px;
		margin-bottom: 50px;
		cursor: pointer;
		@media (max-width: 768px) {
			margin: 30px 0 0;
		}
		.icon {
			background: rgba(0, 0, 0, 0.02);
			padding: 10px;
			border-radius: 50%;
		}
		&:hover {
			color: ${primaryColor};
		}
		.content {
			h2 {
				margin: 0;
				line-height: 0.9;
				font-weight: 400;
				color: #262626;
			}
			p {
				margin: 10px 0;
			}
			.description {
				color: #8c8c8c;
				margin-top: 12px;
			}
			.subtitle {
				margin-top: 20px;
				color: #595959;
				opacity: 0;
			}
		}
	}
	.topic.active {
		.subtitle {
			animation: show 0.5s ease forwards;
		}
		svg {
			color: ${primaryColor};
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

class TimelineOption extends React.Component {
	constructor(props) {
		super(props);
		const { items } = props;
		const initialItem = Object.keys(items)[0];
		this.state = {
			selectedItem: initialItem,
		};
	}

	handleSelectedItem = item => {
		this.setState({
			selectedItem: item,
		});
	};

	getTotaltime = chapters => {
		const timeTaken = chapters.reduce(
			(total, item) => total + item.duration,
			0,
		);
		return getStringTime(timeTaken);
	};

	render() {
		const { items, primaryColor, itemsToShow } = this.props;
		const { selectedItem } = this.state;
		return (
			<div className={container(primaryColor)}>
				<div className="topics">
					{Object.keys(items).map(item => (
						<React.Fragment key={item}>
							<div
								className={`topic ${
									selectedItem === item ? 'active' : ''
								}`}
								key={items[item].title}
								onClick={() => this.handleSelectedItem(item)}
							>
								{items[item].icon || <Book />}
								<div className="content">
									<h2>{items[item].title}</h2>
									<p className="description">
										{`${
											items[item].chapters.length
										} topics · ${this.getTotaltime(
											items[item].chapters,
										)}`}
									</p>
									<p className="subtitle">
										{items[item].subtitle}
									</p>
								</div>
							</div>
							{window.innerWidth < 768 &&
								selectedItem === item && (
									<Timeline
										itemsToShow={itemsToShow}
										primaryColor={primaryColor}
										items={items[selectedItem].chapters}
									/>
								)}
						</React.Fragment>
					))}
				</div>
				{window.innerWidth > 768 && (
					<Timeline
						itemsToShow={itemsToShow}
						primaryColor={primaryColor}
						items={items[selectedItem].chapters}
					/>
				)}
			</div>
		);
	}
}

TimelineOption.defaultProps = {
	itemsToShow: 3,
	primaryColor: '#7136d5',
};

export default TimelineOption;
