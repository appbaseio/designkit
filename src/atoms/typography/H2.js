import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { text } from './H1';

const H2 = styled('h2')`
	${base};
	${font};
	${text};

	font-size: ${props => props.fontSize || '1.9rem'};
	line-height: ${props => props.lineHeight || '2.1rem'};
	font-weight: ${props => props.fontWeight || 'normal'};
`;

export default H2;
