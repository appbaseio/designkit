import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '../Footer';
import Title from '../typography/Title';

storiesOf('Footer', module).add('default', () => (
	<Footer>
		<Footer.Brand>
			<img
				width="100%"
				src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/22b76c14-4897-464d-a653-6474b2d47a49/textlogo_white_%28600__300_px%29.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220316T063543Z&X-Amz-Expires=86400&X-Amz-Signature=b8f10b1e4cd01e56a5d9c501e336270a59a5117f11a7a84222d1a80c257dba6f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22text%252Blogo%2520white%2520%28600%2520%25C3%2597%2520300%2520px%29.svg%22&x-id=GetObject"
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
