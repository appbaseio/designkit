import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { text } from './H1';
import queries from '../../shared/mediaQueries';

const H2 = styled('h2')`
	${base};
	${font};
	${text};

	font-size: ${props => props.fontSize || '2.25rem'};
	line-height: ${props => props.lineHeight || '2.75rem'};
	font-weight: ${props => props.fontWeight || 300};
	text-align: ${props => (props.center ? 'center' : 'inherit')};

	${queries('md')} {
		font-size: 1.375rem;
		line-height: 2.25rem;
	}
`;

export default H2;
