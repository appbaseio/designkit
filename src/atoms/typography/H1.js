import styled from 'react-emotion';
import { css } from 'emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { getTextColor } from '../../shared/utils';
import queries from '../../shared/mediaQueries';

const text = props => css`
	margin: ${props.margin || '1.4rem 0 0.5rem'};
	padding: ${props.padding || '0'};
	color: ${getTextColor(props)};
`;

const H1 = styled('h1')`
	${base};
	${font};
	${text};

	font-size: ${props => props.fontSize || '3.25rem'};
	line-height: ${props => props.lineHeight || '4rem'};
	font-weight: ${props => props.fontWeight || 300};

	${queries('md')} {
		font-size: 2.5rem;
		line-height: 3rem;
	}
`;

export default H1;
export { text };
