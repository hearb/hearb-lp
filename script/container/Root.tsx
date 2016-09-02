import * as React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import reducer from '../reducer';
import routes from '../route';

const store = createStore(reducer);
const history = syncHistoryWithStore(browserHistory, store);

export default class Root extends React.Component<{}, {}> {
	render(): React.ReactElement<any> {
		return (
			<Provider store={store}>
				<Router history={history} routes={routes} />
			</Provider>
		) as React.ReactElement<any>;
	}
}
