import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { text } from './H1';
import queries from '../../shared/mediaQueries';

const Title = styled('h4')`
	${base};
	${font};
	${text};

	font-size: ${props => props.fontSize || '1rem'};
	line-height: ${props => props.lineHeight || '1.5rem'};
	font-weight: ${props => props.fontWeight || 'normal'};

	${queries('md')} {
		font-size: 0.75rem;
		line-height: 1.065rem;
	}
`;

export default Title;
