# designkit

Design kit for appbaseio ecosystem

# Components

## Footer

Additional props can be passed to `Footer` and its child compound components `Footer.Links`, `Footer.List` and `Footer.Brand`.

```js
import { Footer, Title } from '@appbaseio/designkit';

const AppFooter = ({ theme: { colors } }) => (
	<Footer css={{ backgroundColor: colors.footer }}>
		<Footer.Links>
			<Footer.List>
				<Title>Products</Title>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://appbase.io"
					>
						Appbase.io
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://opensource.appbase.io/reactivemaps"
					>
						Reactive Maps
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://opensource.appbase.io/reactivesearch"
					>
						Reactive Search
					</a>
				</li>
			</Footer.List>
			<Footer.List>
				<Title>Docs</Title>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://docs.appbase.io"
					>
						JS Quick Start
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://docs.appbase.io"
					>
						JS API Reference
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://rest.appbase.io"
					>
						REST Quick Start
					</a>
				</li>
			</Footer.List>
			<Footer.List>
				<Title>Use Cases</Title>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://appbase.io"
					>
						Geolocation Queries
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://appbase.io"
					>
						Personalized Feeds
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://appbase.io"
					>
						Realtime Search
					</a>
				</li>
			</Footer.List>
			<Footer.List>
				<Title className="heading">Company</Title>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://status.appbase.io/"
					>
						Status Page
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://tos.appbase.io/"
					>
						Terms
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://tos.appbase.io/"
					>
						Privacy
					</a>
				</li>
			</Footer.List>
		</Footer.Links>
		<Footer.Brand>
			<img
				width="100%"
				src="/static/svg/jellyfish.svg"
				alt="appbase.io"
			/>
		</Footer.Brand>
	</Footer>
);
```

## News

```js
<News>Build native mobile apps with appbase.io and ReactiveSearch</News>
```

## Hero

A full width and full height section great for highlighting the landing section of new pages.

```js
<Hero style={{ background: 'hotpink' }}>
	<H1>Build native mobile apps with appbase.io and ReactiveSearch</H1>
	<H2>Appbase Design System</H2>
</Hero>
```
