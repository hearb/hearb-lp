import * as React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger = require('redux-logger');
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import reducer from '../modules/rootReducer';
import routes from '../routes';


interface ExWindow extends Window {
	devToolsExtension?: Function;
}
const extension = (window as ExWindow).devToolsExtension;

const store = createStore(
	reducer,
	compose(
		applyMiddleware(
			thunk,
			logger()
		),
		extension && process.env.NODE_ENV !== 'production' ? extension() : f => f
	)
);

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
