import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '../Footer';
import Title from '../typography/Title';

storiesOf('Footer', module).add('default', () => (
	<Footer>
		<Footer.Brand>
			<img
				width="100%"
				src="https://cdn.jsdelivr.net/gh/appbaseio/cdn@dev/appbase/logos/reactivesearch-color.svg"
				alt="reactivesearch.io"
			/>
		</Footer.Brand>
		<Footer.Links>
			<Footer.List>
				<Title>Documentation</Title>
				<li>
					<a href="https://opensource.appbase.io/reactive-manual/getting-started/reactivesearch.html">
						Quick Start
					</a>
				</li>
				<li>
					<a href="https://opensource.appbase.io/reactive-manual/base-components/textfield.html">
						Base Components
					</a>
				</li>
				<li>
					<a href="https://opensource.appbase.io/reactive-manual/list-components/singlelist.html">
						List Components
					</a>
				</li>
				<li>
					<a href="https://opensource.appbase.io/reactive-manual/search-components/categorysearch.html">
						Search Components
					</a>
				</li>
				<li>
					<a href="https://opensource.appbase.io/reactive-manual/result-components/resultlist.html">
						Result Components
					</a>
				</li>
			</Footer.List>

			<Footer.List>
				<Title>Community</Title>
				<li>
					<a href="https://github.com/appbaseio/reactivesearch/">
						GitHub
					</a>
				</li>
				<li>
					<a href="http://slack.appbase.io">Slack</a>
				</li>
				<li>
					<a href="https://twitter.com/appbaseio">Twitter</a>
				</li>
			</Footer.List>

			<Footer.List>
				<Title>Helpful Tools</Title>
				<li>
					<a href="https://opensource.appbase.io/dejavu/">
						Data Browser
					</a>
				</li>
				<li>
					<a href="https://opensource.appbase.io/mirage/">
						GUI Query Builder
					</a>
				</li>
			</Footer.List>

			<Footer.List>
				<Title className="heading">More</Title>
				<li>
					<a href="https://medium.appbase.io/">Blog</a>
				</li>
				<li>
					<a href="http://docs.appbase.io/">Appbase.io Docs</a>
				</li>
				<li>
					<a href="https://gitter.im/appbaseio/reactivesearch">
						Gitter
					</a>
				</li>
				<li>
					<a href="mailto:support@appbase.io">Support Email</a>
				</li>
			</Footer.List>
		</Footer.Links>
	</Footer>
));
