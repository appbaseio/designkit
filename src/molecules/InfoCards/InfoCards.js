import React from 'react';
import { css } from 'emotion';
import { node, string } from 'prop-types';

const container = primaryColor => css`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 10px;
	align-items: center;
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
		align-items: center;
		.card {
			height: 110px;
			padding: 20px 30px;
			cursor: pointer;
			box-sizing: border-box;
			display: grid;
			grid-template-columns: auto auto;
			height: 110px;
			overflow: hidden;
			align-items: center;
			border-right: 3px solid transparent;
			border-radius: 4px;
			box-shadow: 0 0px 2px 0 rgba(220, 220, 220, 1);
			transition: all ease 0.2s;
			.title {
				margin: 0;
				color: #262626;
				font-weight: 400;
			}
			.subtitle {
				height: 0;
				overflow: hidden;
				margin: 0;
				white-space: nowrap;
				max-width: 200px;
				text-overflow: ellipsis;
				color: ${primaryColor};
				* {
					color: ${primaryColor};
				}
				@media (max-width: 576px) {
					height: 100%;
				}
			}
			&:hover {
				border-right-color: ${primaryColor};
				box-shadow: 0 1px 4px 0 rgba(220, 220, 220, 1);
				.subtitle {
					height: 100%;
					margin-top: 5px;
				}
			}
		}
		.card.with-icon .icon {
			text-align: left;
			@media (max-width: 576px) {
				text-align: right;
			}
		}
		.card.with-icon .content {
			text-align: right;
			@media (max-width: 576px) {
				grid-row: 1;
				text-align: left;
			}
		}
		.card.right-icon.with-icon .icon {
			text-align: right;
		}
		.card.right-icon.with-icon .content {
			text-align: left;
		}
		.card.right-icon {
			border-left: 3px solid transparent;
			border-right: 0;
		}
		.card.right-icon:hover {
			border-left-color: ${primaryColor};
		}
		.card.row-reverse {
			flex-direction: row-reverse;
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
					className={`card ${props.iconAtRight ? 'right-icon' : ''} ${
						props.icon ? 'with-icon' : ''
					}`}
					onMouseEnter={() => onMouseEnter(props)}
					onMouseLeave={onMouseLeave}
				>
					{props.icon &&
						!props.iconAtRight && (
							<div className="icon">{props.icon}</div>
						)}
					<div className="content">
						<h3 className="title">{props.title}</h3>
						{props.subtitle && (
							<p className="subtitle">{props.subtitle}</p>
						)}
					</div>
					{props.icon &&
						props.iconAtRight && (
							<div className="icon">{props.icon}</div>
						)}
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
			<div className={container(props.primaryColor)}>
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

InfoCards.defaultProps = {
	primaryColor: '#225dd4',
};

InfoCards.propTypes = {
	children: node,
	primaryColor: string,
};

export default InfoCards;
