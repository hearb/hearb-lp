import * as React from 'react';
import classnames = require('classnames');

export interface DrawerProps {
	opened: boolean;
	docked: boolean;
}

export default class Drawer extends React.Component<DrawerProps, {}> {
	render(): React.ReactElement<any> {
		const {opened, docked} = this.props;

		const classname = classnames('drawer', {
			'opened': opened,
			'docked': docked
		});

		return (
			<div className={classname}></div>
		);
	}
}
