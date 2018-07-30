import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { text } from './H1';

const H4 = styled('h4')`
	${base};
	${font};
	${text};

	font-size: ${props => props.fontSize || '1.25rem'};
	line-height: ${props => props.lineHeight || '2rem'};
	font-weight: ${props => props.fontWeight || 300};
`;

export default H4;
