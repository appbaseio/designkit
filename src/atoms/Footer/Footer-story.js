import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '../Footer';
import Title from '../typography/Title';

storiesOf('Footer', module).add('default', () => (
	<Footer>
		<Footer.Brand>
			<img
				width="100%"
				src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b88a2a8-7b96-4e37-b7ae-109b81df8a5c/textlogo_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220314T123035Z&X-Amz-Expires=86400&X-Amz-Signature=14469d96ac3184792bb8fd8a99ef4859f26a476cba5e33ad8bc73d4a62225edb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22text%252Blogo%2520white.png%22&x-id=GetObject"
				alt="appbase.io"
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
