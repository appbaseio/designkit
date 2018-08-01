import styled from 'react-emotion';

const GridLayout = styled('div')(props => ({
	display: 'grid',
	gridTemplateColumns: props.gridTemplateColumns || '1fr',
	gridTemplateRows: props.gridTemplateRows || 'auto',
	gridGap: props.gridGap || 0,
	margin: props.margin || 0,
}));

export default GridLayout;
