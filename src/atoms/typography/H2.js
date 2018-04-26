import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { text } from './H1';

const H2 = styled('h2')`
	${base};
	${font};
	${text};

	font-size: ${props => props.fontSize || '2rem'};
	line-height: ${props => props.lineHeight || '2.2rem'};
	font-weight: ${props => props.fontWeight || 300};
`;

export default H2;
