import * as React from 'react';
import {Route} from 'react-router';

import App from '../container/App';
import IndexPage from '../page/IndexPage';

const routes = (
	<Route path="/" component={App}>
		<Route path="/" component={IndexPage} />
	</Route>
) as React.ReactElement<any>;

export default routes;
