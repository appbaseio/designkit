import styled from 'react-emotion';
import queries, { getProperty } from '../../shared/mediaQueries';

const double = prop => `calc(${prop} * 2)`;

const Grid = styled('div')`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;

	& > * {
		width: ${props => `calc(${100 / props.size}% - ${props.gutter})`};
		margin-bottom: ${props => double(props.gutter)};

		${queries('lg')} {
			width: ${props => `calc(${100 / getProperty(props, 'size', 'lg')}% - ${getProperty(props, 'gutter', 'lg')})`};
			margin-bottom: ${props => double(getProperty(props, 'gutter', 'lg'))};
		}

		${queries('md')} {
			width: ${props => `calc(${100 / getProperty(props, 'size', 'md')}% - ${getProperty(props, 'gutter', 'md')})`};
			margin-bottom: ${props => double(getProperty(props, 'gutter', 'md'))};
		}

		${queries('sm')} {
			width: ${props => `calc(${100 / getProperty(props, 'size', 'sm')}% - ${getProperty(props, 'gutter', 'sm')})`};
			margin-bottom: 15px;
		}
	}
`;

export default Grid;
