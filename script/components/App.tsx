import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import classnames = require('classnames');

import ToastList from '../containers/ToastList';
import Drawer from '../containers/Drawer';

export default class App extends React.Component<{}, {}> {
	handleChange = (dest: string) => {
		browserHistory.push(`/${dest}`);
	}

	render(): React.ReactElement<any> {
		return (
			<div className="app">
				<Drawer />
				{this.props.children}
				<ToastList />
			</div>
		);
	}
}
