import styled from 'react-emotion';

const GridLayout = styled('div')(props => ({
	display: 'grid',
	gridTemplateColumns: props.gridTemplateColumns || '1fr',
}));

export default GridLayout;
