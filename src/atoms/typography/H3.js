import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { text } from './H1';
import queries from '../../shared/mediaQueries';

const H3 = styled('h3')`
	${base};
	${font};
	${text};

	font-size: ${props => props.fontSize || '1.5rem'};
	line-height: ${props => props.lineHeight || '2.065rem'};
	font-weight: ${props => props.fontWeight || 'normal'};
	text-align: ${props => (props.center ? 'center' : 'inherit')};

	${queries('md')} {
		font-size: 1.125rem;
		line-height: 1.5rem;
	}
`;

export default H3;
