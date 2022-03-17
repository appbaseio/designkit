import React from 'react';
import { string, arrayOf, bool, shape, object } from 'prop-types';
import { css } from 'react-emotion';
import Flex from '../../layouts/Flex';
import Title from '../typography/Title';
import Footer from '../Footer';
import queries from '../../shared/mediaQueries';

const infoStyle = css({
	color: '#fff',
	fontSize: 13,
	fontWeight: 600,
	[queries('lg')]: {
		textAlign: 'center',
		fontWeight: 100,
	},
});

const titleStyle = {
	margin: '0.9rem 0px',
};

const mask = css`
	height: 20px;
	width: 20px;
	border-radius: 3px;
	background-color: rgba(255, 255, 255, 0.1);
	margin: 20px 10px 0 0;
	img {
		width: 100%;
	}
`;
const imgPath = 'https://opensource.appbase.io/reactivesearch/images';

const FooterBrand = ({ brandLinksConfig }) => (
	<React.Fragment>
		<img
			width="100%"
			src="https://cdn.jsdelivr.net/gh/appbaseio/cdn@dev/appbase/logos/reactivesearch-color.svg"
			alt="appbase.io"
		/>
		<div
			className={css({
				textAlign: 'left',
				marginTop: '10px',
				[queries('lg')]: {
					textAlign: 'center',
					marginTop: '0',
				},
			})}
		>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="mailto:info@appbase.io"
				className={infoStyle}
			>
				info@appbase.io
			</a>
		</div>

		<Flex
			alignItems="center"
			className={css({
				[queries('lg')]: {
					justifyContent: 'center',
				},
			})}
		>
			{brandLinksConfig.map(brand => (
				<a
					key={brand.title}
					target="_blank"
					rel="noopener noreferrer"
					href={brand.href}
				>
					<div className={mask}>
						<img alt={brand.title} srcSet={brand.image} />
					</div>
				</a>
			))}
		</Flex>
	</React.Fragment>
);
FooterBrand.propTypes = {
	brandLinksConfig: arrayOf(object),
};

const AppFooter = ({ linksConfig, brandLinksConfig, ...props }) => (
	<div {...props} css="background-color: rgb(6, 32, 51)">
		<Footer
			className={css({
				padding: '60px 0',
				[queries('md')]: {
					paddingBottom: '0',
				},
			})}
		>
			<Footer.Brand
				className={css({
					[queries('lg')]: {
						display: 'none',
					},
				})}
			>
				<FooterBrand brandLinksConfig={brandLinksConfig} />
			</Footer.Brand>
			<Footer.Links
				className={css({
					[queries('lg')]: {
						width: '100%',
					},
				})}
			>
				{linksConfig.map(footerList => (
					<Footer.List key={footerList.title}>
						<Title
							style={{
								...titleStyle,
							}}
							className="heading"
						>
							{footerList.title}
						</Title>
						{footerList.list.map((list, index) => (
							// eslint-disable-next-line
							<li key={index}>
								<a
									{...(list.openWithTab
										? {
												target: '_blank',
												rel: 'noopener noreferrer',
										} // prettier-ignore
										: {})}
									href={list.href}
								>
									{list.title}
								</a>
							</li>
						))}
					</Footer.List>
				))}
			</Footer.Links>
		</Footer>
		<div
			className={css({
				width: 200,
				margin: '0 auto',
				paddingBottom: 100,
				display: 'none',
				[queries('lg')]: {
					display: 'block',
				},
			})}
		>
			<FooterBrand brandLinksConfig={brandLinksConfig} />
		</div>
	</div>
);

AppFooter.defaultProps = {
	linksConfig: [],
	brandLinksConfig: [
		{
			title: 'Github',
			href: 'https://github.com/appbaseio/',
			image: `${imgPath}/footer/Github@3x.svg 3x, ${imgPath}/footer/Github@2x.png 2x, ${imgPath}/footer/Github@1x.png`,
		},
		{
			title: 'Medium',
			href: 'https://medium.appbase.io/',
			image: `${imgPath}/footer/Medium@3x.svg 3x, ${imgPath}/footer/Medium@2x.png 2x, ${imgPath}/footer/Medium@1x.png`,
		},
		{
			title: 'Twitter',
			href: 'https://twitter.com/appbaseio',
			image: `${imgPath}/footer/Twitter%20Copy@3x.svg 3x, ${imgPath}/footer/Twitter%20Copy@2x.png 2x, ${imgPath}/footer/Twitter%20Copy@1x.png`,
		},
	],
};

AppFooter.propTypes = {
	brandLinksConfig: arrayOf(
		shape({
			title: string,
			href: string,
			image: string,
		}),
	),
	linksConfig: arrayOf(
		shape({
			title: string,
			list: arrayOf(
				shape({
					title: string,
					href: string,
					openWithTab: bool,
				}),
			),
		}),
	),
};

export default AppFooter;
