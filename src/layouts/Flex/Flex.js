import styled from "react-emotion";

import base from "../../shared/base";
import font from "../../shared/font";

const Flex = styled("div")`
	${base};
	${font};

	display: flex;

	flex-wrap: ${props => props.flexWrap ? props.flexWrap : "nowrap"};
	justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start"};
	flex-direction: ${props => props.flexDirection ? props.flexDirection : "row"};
	align-items: ${props => props.alignItems ? props.alignItems : "stretch"};
	align-content: ${props => props.alignContent ? props.alignContent : "stretch"};

	background-color: ${props => props.backgroundColor ? props.backgroundColor : "transparent"};
	border: ${props => props.border ? props.border : 0};
	box-shadow: ${props => props.boxShadow ? props.boxShadow : "none"};

	margin: ${props => props.margin ? props.margin : 0};
	padding: ${props => props.padding ? props.padding : 0};
`;

export default Flex;
