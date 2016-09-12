import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classnames = require('classnames');

import {selectItem, Item} from '../modules/drawer';
import DrawerItem from '../components/DrawerItem';


export interface Props {
	opened:   boolean;
	docked:   boolean;
	items:    Array<Item>;
	selected: string;
	selectItem: Function;
}

class Drawer extends React.Component<Props, {}> {
	onClickHandler = (id: string): Function => {
		const {selectItem} = this.props;

		return () => {
			selectItem(id);
		}
	}

	render(): React.ReactElement<any> {
		const {opened, docked, selected} = this.props;
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

		const classname = classnames('drawer', {
			'opened': opened,
			'docked': docked
		})

		return (
			<div className={classname}>
				{items}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		opened:   state.drawer.opened,
		docked:   state.drawer.docked,
		items:    state.drawer.items,
		selected: state.drawer.selected
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		selectItem: selectItem
	}, dispatch)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Drawer)
