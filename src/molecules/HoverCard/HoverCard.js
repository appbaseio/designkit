import React from 'react';
import { FaHeart as Heart } from 'react-icons/fa';
import {
	string,
	oneOfType,
	node,
	number,
	func,
	object,
	bool,
} from 'prop-types';
import { css } from 'emotion';
import queries from '../../shared/mediaQueries';
import Flex from '../../layouts/Flex';
import { H3 } from '../../atoms/typography';
import Overlay from '../../atoms/Overlay';
import LazyImage from '../../atoms/LazyImage/LazyImage';

const main = css`
	border-radius: 1px;
	background-color: #ffffff;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
	padding: 4px;
`;
const image = css`
	width: 100%;
`;
const titleCls = css({
	color: '#545761',
	fontWeight: 'bold',
	lineHeight: '24px',
	fontSize: '1.2rem',
	[queries('md')]: {
		fontSize: '1.125rem',
	},
});
const descriptionCls = css({
	fontSize: '1.025rem',
	maxWidth: 300,
	margin: '10px auto 0 auto',
	[queries('md')]: {
		fontSize: '0.875rem',
	},

	color: '#545761',
	lineHeight: '19px',
});

const linkCls = css`
	color: #7136d5;
	font-size: 14px;
	font-weight: 600;
	line-height: 19px;
	text-align: center;
`;

const Title = ({ children, ...props }) => (
	<H3 css={titleCls} {...props}>
		{children}
	</H3>
);
const Description = ({ children, ...props }) => (
	<p css={descriptionCls} {...props}>
		{children}
	</p>
);
const Actions = ({
	likes,
	href,
	linkText,
	handleIconClick,
	iconStyle,
	...props
}) => (
	<Flex
		css={css({
			justifyContent: 'space-between',
			padding: '15px 16px 15px 16px',
		})}
		{...props}
	>
		<p
			css={css({
				margin: 0,
			})}
		>
			{href && (
				<a css={linkCls} href={href}>
					{linkText}
				</a>
			)}
		</p>
		{likes && (
			<Flex>
				<span
					css={css({
						opacity: 0.45,
						color: '#545761',
						fontSize: 14,
						fontWeight: 600,
						lineHeight: '19px',
					})}
				>
					{likes}
				</span>{' '}
				<span>
					<Heart
						onClick={handleIconClick || (() => null)}
						style={{
							color: '#B2B4B8',
							marginLeft: 5,
							cursor: handleIconClick ? 'pointer' : undefined,
							...iconStyle,
						}}
						size={15}
					/>
				</span>
			</Flex>
		)}
	</Flex>
);
Actions.displayName = 'Actions';

const OverlayContent = ({ children }) => (
	<div css="padding: 15px 16px 15px 16px">{children}</div>
);
OverlayContent.displayName = 'OverlayContent';
class HoverCard extends React.Component {
	static Title = Title;
	static Description = Description;
	static Actions = Actions;
	static Overlay = OverlayContent;
	render() {
		const { cover, children, showImagePlaceholder, ...props } = this.props;
		const filteredChilds =
			children &&
			children.filter(
				e =>
					e.type.displayName !== 'Actions' &&
					e.type.displayName !== 'OverlayContent',
			);
		const actionChild =
			children && children.find(e => e.type.displayName === 'Actions');
		const overlayChild =
			children &&
			children.find(e => e.type.displayName === 'OverlayContent');
		return (
			<div css={main} {...props}>
				<Overlay content={overlayChild}>
					{showImagePlaceholder ? (
						<LazyImage
							style={{ width: '100%' }}
							alt="product"
							src={cover}
						/>
					) : (
						<img css={image} alt="product" src={cover} />
					)}

					<div css="padding: 15px 16px 15px 16px">
						{filteredChilds}
					</div>
				</Overlay>
				{actionChild}
			</div>
		);
	}
}

Actions.defaultProps = {
	linkText: 'VIEW MORE',
};
Actions.propTypes = {
	likes: oneOfType([number, string]),
	href: string,
	handleIconClick: func,
	linkText: string,
	iconStyle: object,
};
HoverCard.propTypes = {
	cover: string,
	children: oneOfType([node, string]),
	showImagePlaceholder: bool,
};
Title.propTypes = {
	children: oneOfType([node, string]),
};
Description.propTypes = {
	children: oneOfType([node, string]),
};
OverlayContent.propTypes = {
	children: oneOfType([node, string]),
};

export default HoverCard;
