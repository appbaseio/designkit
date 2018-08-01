import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { text } from './H1';
import queries from '../../shared/mediaQueries';

const H4 = styled('h4')`
	${base};
	${font};
	${text};

	font-size: ${props => props.fontSize || '1.25rem'};
	line-height: ${props => props.lineHeight || '2rem'};
	font-weight: ${props => props.fontWeight || 300};
	text-align: ${props => (props.center ? 'center' : 'inherit')};

	${queries('md')} {
		font-size: 0.875rem;
		line-height: 1.5rem;
	}
`;

export default H4;
