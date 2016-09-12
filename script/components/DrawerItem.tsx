import * as React from 'react';
import {browserHistory} from 'react-router';
import classnames = require('classnames');


interface Props {
	icon:     string;
	text:     string;
	href:     string;
	selected: boolean;
	onClick:  Function;
}


export default class DrawerItem extends React.Component<Props, {}> {
	onClick = (e: Event) => {
		e.stopPropagation();

		const {href, selected} = this.props;

		if(selected) {
			e.preventDefault();
			return;
		}

		if(href.slice(0, 4) !== 'http') {
			e.preventDefault();
			this.props.onClick();
			browserHistory.push(href);
		}
	}

	render(): React.ReactElement<any> {
		const {icon, text, href, selected} = this.props;

		const classname = classnames('drawer-item', icon, {
			'selected': selected
		});

		return (
			<a className={classname} href={href} onClick={this.onClick}>{text}</a>
		);
	}
}
