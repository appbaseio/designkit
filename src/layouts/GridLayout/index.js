import styled from 'react-emotion';

const GridLayout = styled('div')(props => ({
	display: 'grid',
	gridTemplateColumns: props.gridTemplateColumns || '1fr',
	gridTemplateRows: props.gridTemplateRows || 'auto',
	gridGap: props.gridGap || 0,
	margin: props.margin || 0,
	alignItems: props.alignItems || 'stretch',
	justifyItems: props.justifyItems || 'stretch',
	justifyContent: props.justifyItems || 'normal',
	gridAutoFlow: props.gridAutoFlow || 'row',
}));

export default GridLayout;
