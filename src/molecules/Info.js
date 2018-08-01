import React from 'react';
import { oneOf, node } from 'prop-types';

import { H3, Title, media } from '..';

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
				textAlign: 'center',
			},
		}}
	>
		{children}
	</article>
);

// description renders title intentionally because of design inconsistencies 🤦‍
Info.Title = ({ children, ...props }) => <H3 {...props}>{children}</H3>;
Info.Description = ({ children, ...props }) => (
	<Title {...props}>{children}</Title>
);
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

Info.Description.propTypes = {
	children: node,
};

export default Info;
