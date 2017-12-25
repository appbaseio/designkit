import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { getTextColor } from '../../shared/utils';

const Flex = styled('div')`
	${base};
	${font};

	display: flex;

	flex-wrap: ${props => (props.flexWrap ? props.flexWrap : 'nowrap')};
	justify-content: ${props => (props.justifyContent ? props.justifyContent : 'flex-start')};
	flex-direction: ${props => (props.flexDirection ? props.flexDirection : 'row')};
	align-items: ${props => (props.alignItems ? props.alignItems : 'stretch')};
	align-content: ${props => (props.alignContent ? props.alignContent : 'stretch')};

	background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'transparent')};
	color: ${props => (props.color ? props.color : getTextColor(props))};
	border: ${props => (props.border ? props.border : 0)};
	border-radius: ${props => (props.borderRadius ? props.borderRadius : 0)};
	box-shadow: ${props => (props.boxShadow ? props.boxShadow : 'none')};

	margin: ${props => (props.margin ? props.margin : 0)};
	padding: ${props => (props.padding ? props.padding : 0)};
`;

export default Flex;
