import * as React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../components/App';
import PageIndex from '../components/PageIndex';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={PageIndex} />
	</Route>
) as React.ReactElement<any>;

export default routes;
