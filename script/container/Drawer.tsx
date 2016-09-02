import * as React from 'react';

export interface DrawerProps {
	opened: boolean;
	docked: boolean;
}

export default class Drawer extends React.Component<DrawerProps, {}> {
	render(): React.ReactElement<any> {
		const {opened, docked} = this.props;

		let className = 'drawer';
		if(opened) {
			className += ' opened';
		}
		if(docked) {
			className += ' docked';
		}

		return (
			<div className={className}></div>
		) as React.ReactElement<any>;
	}
}
