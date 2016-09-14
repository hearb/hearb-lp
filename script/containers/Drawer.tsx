import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classnames = require('classnames');

import {closeDrawer, selectItem, Item} from '../modules/drawer';
import DrawerItem from '../components/DrawerItem';


export interface Props {
	opened:      boolean;
	docked:      boolean;
	rightDrawer: boolean;
	items:       Array<Item>;
	selected:    string;

	closeDrawer: Function;
	selectItem:  Function;
}

class Drawer extends React.Component<Props, {}> {
	onClickHandler = (id: string): Function => {
		const {selectItem} = this.props;

		return () => {
			selectItem(id);
			closeDrawer();
		}
	}

	render(): React.ReactElement<any> {
		const {opened, docked, rightDrawer, selected} = this.props;
		const {onClickHandler} = this;

		const items = this.props.items.map((item): React.ReactElement<any> => {
			return (
				<DrawerItem
					key={item.id}
					icon={item.icon}
					text={item.text}
					href={item.href}
					selected={item.id === selected}
					onClick={onClickHandler(item.id)} />
			)
		})

		const clsContainer = classnames('drawer-container', {
			'opened': opened,
			'docked': docked,
			'right':  rightDrawer
		})

		const clsDrawer = classnames('drawer', {
			'right': rightDrawer
		})

		return (
			<div className={clsContainer}>
				<div className="drawer-bg" onClick={this.props.closeDrawer}></div>
				<div className={clsDrawer}>
					{items}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		opened:      state.drawer.opened,
		docked:      state.drawer.docked,
		rightDrawer: state.drawer.rightDrawer,
		items:       state.drawer.items,
		selected:    state.drawer.selected
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		closeDrawer: closeDrawer,
		selectItem: selectItem
	}, dispatch)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Drawer)
