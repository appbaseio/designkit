import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { text } from './H1';

const Title = styled('h4')`
	${base};
	${font};
	${text};

	margin: ${props => props.margin || '0.9rem 0'};
	font-size: ${props => props.fontSize || '1.1rem'};
	line-height: ${props => props.lineHeight || '1.3rem'};
	font-weight: ${props => props.fontWeight || 'normal'};
`;

export default Title;
