import styled from 'react-emotion';
import { css } from 'emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { getTextColor } from '../../shared/utils';

const text = props => css`
	margin: ${props.margin || '1.4rem 0 0.5rem'};
	padding: ${props.padding || '0'};
	color: ${getTextColor(props)};
`;

const H1 = styled('h1')`
	${base};
	${font};
	${text};

	font-size: ${props => props.fontSize || '2.5rem'};
	line-height: ${props => props.lineHeight || '2.7rem'};
	font-weight: ${props => props.fontWeight || 300};
`;

export default H1;
export { text };
