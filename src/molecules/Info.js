import React from 'react';
import { oneOf, node } from 'prop-types';

import { H3, media } from '..';

const Info = ({ direction, children }) => (
	<article
		css={{
			display: 'grid',
			gridGap: 20,
			gridTemplateColumns: direction === 'row' ? 'auto 1fr' : '1fr',
			alignItems: 'center',
			[media('md')]: {
				gridTemplateColumns: '1fr',
				justifyItems: 'center',
			},
		}}
	>
		{children}
	</article>
);

Info.Title = ({ children }) => <H3>{children}</H3>;
Info.Image = props => <img alt="Info" width="50px" {...props} />;

Info.defaultProps = {
	direction: 'row',
};

Info.propTypes = {
	direction: oneOf(['row', 'column']),
	children: node,
};

Info.Title.propTypes = {
	children: node,
};

export default Info;
