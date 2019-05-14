import React from 'react';
import { css } from 'emotion';
import { node } from 'prop-types';

const container = css`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 10px;
	font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		'Roboto', 'Noto Sans', 'Ubuntu', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}

	.card-container {
		padding: 5px;
		display: grid;
		grid-gap: 10px;
		.card {
			width: 100%;
			height: 110px;
			padding: 5px;
			display: grid;
			height: 110px;
			grid-template-columns: auto 1fr;
			grid-gap: 5px;
			align-items: center;
			border-left: 3px solid transparent;
			border-radius: 2px;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
			transition: all ease 0.2s;
			text-align: center;

			.subtitle {
				height: 0;
				overflow: hidden;
			}
			&:hover {
				border-left-color: blue;
				.subtitle {
					height: 100%;
				}
			}
		}
	}
`;

const middleSection = css`
	height: 235px;
	overflow: hidden;
	text-overflow: ellipsis;
	@media (max-width: 576px) {
		display: none;
	}
`;

const Context = React.createContext(null);

class InfoCards extends React.Component {
	state = {
		selectedItem: null,
	};

	mouseEnter = item => {
		this.setState({
			selectedItem: item,
		});
	};

	mouseLeave = () => {
		this.setState({
			selectedItem: null,
		});
	};

	static Card = props => (
		<Context.Consumer>
			{({ onMouseEnter, onMouseLeave }) => (
				<div
					className="card"
					onMouseEnter={() => onMouseEnter(props)}
					onMouseLeave={onMouseLeave}
				>
					{props.icon &&
						!props.iconAtRight && <div>{props.icon}</div>}
					<div>
						<h2 className="title">{props.title}</h2>
						{props.subtitle && (
							<p className="subtitle">{props.subtitle}</p>
						)}
					</div>
					{props.icon && props.iconAtRight && <div>{props.icon}</div>}
				</div>
			)}
		</Context.Consumer>
	);

	static Section = ({ children, ...props }) => (
		<div className="card-container">
			{React.Children.map(children, child =>
				React.cloneElement(child, { ...props }),
			)}
		</div>
	);

	static MainSection = props => (
		<div className={middleSection}>
			<Context.Consumer>
				{({ selectedItem }) => props.children(selectedItem)}
			</Context.Consumer>
		</div>
	);

	render() {
		const { children, ...props } = this.props;
		const { selectedItem } = this.state;
		return (
			<div className={container}>
				<Context.Provider
					value={{
						selectedItem,
						onMouseEnter: this.mouseEnter,
						onMouseLeave: this.mouseLeave,
					}}
				>
					{React.Children.map(this.props.children, child =>
						React.cloneElement(child, { ...props }),
					)}
				</Context.Provider>
			</div>
		);
	}
}

InfoCards.propTypes = {
	children: node,
};

export default InfoCards;
