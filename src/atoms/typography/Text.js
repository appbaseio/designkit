import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { text } from './H1';

const Text = styled('p')`
	${base};
	${font};
	${text}

	margin: ${props => props.margin || '0.5rem 0'};
	font-size: ${props => props.fontSize || '0.9rem'};
	line-height: ${props => props.lineHeight || '1.1rem'};
	font-weight: ${props => props.fontWeight || 'normal'};
	text-transform: ${props => (props.uppercase ? 'uppercase' : 'inherit')};
`;

export default Text;
