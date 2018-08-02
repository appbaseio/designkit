import React, { Component, Children, cloneElement } from 'react';
import { node, bool, func } from 'prop-types';
import styled, { css } from 'react-emotion';
import ChevronUp from 'react-feather/dist/icons/chevron-up';
import ChevronDown from 'react-feather/dist/icons/chevron-down';

import queries from '../shared/mediaQueries';
import base from '../shared/base';
import font from '../shared/font';

const question = css`
	background: white;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 600;
	cursor: pointer;
`;

const answer = css`
	background: rgba(255, 255, 255, 0.6);
	padding: 20px;
`;

const Container = styled.div`
	${base};
	${font};
	margin: 20px 0;
	${queries('md')} {
		font-size: 0.875rem;
	}
`;

const QuestionBlock = ({ open, children, toggleState }) => (
	<div
		className={question}
		onClick={toggleState}
		role="button"
		tabIndex="0"
		onKeyPress={toggleState}
	>
		<div>{children}</div>
		{open ? <ChevronUp /> : <ChevronDown />}
	</div>
);

const AnswerBlock = ({ open, children }) =>
	open ? <div className={answer}>{children}</div> : null;

class Faq extends Component {
	// compound components
	static Question = QuestionBlock;
	static Answer = AnswerBlock;

	state = {
		open: false,
	};

	toggleState = () => {
		this.setState(({ open }) => ({ open: !open }));
	};

	render() {
		// map over children to provide implicit state and props
		const children = Children.map(this.props.children, child =>
			cloneElement(child, {
				open: this.state.open,
				toggleState: this.toggleState,
			}),
		);
		return <Container>{children}</Container>;
	}
}

QuestionBlock.propTypes = {
	open: bool,
	children: node,
	toggleState: func,
};

AnswerBlock.propTypes = {
	children: node,
	open: bool,
};

Faq.propTypes = {
	children: node,
};

export default Faq;
