import React from 'react';
import { css } from 'emotion';

const container = css`
	display: grid;
	grid-template-columns: 1fr 0.5fr 1fr;
	grid-gap: 10px;

	.card-container {
		padding: 5px;
		display: grid;
		grid-gap: 10px;
		.card {
			width: 100%;
			display: grid;
			grid-template-columns: auto 1fr;
			grid-gap: 5px;
			align-items: center;
			border-left: 2px solid transparent;
			box-shadow: 0 0 2px #e8e8e8;
			transition: all ease 0.2s;

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
						<h1 className="title">{props.title}</h1>
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
		<Context.Consumer>
			{({ selectedItem }) => props.children(selectedItem)}
		</Context.Consumer>
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

export default InfoCards;
