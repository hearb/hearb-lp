import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classnames = require('classnames');

import {openDrawer} from '../modules/drawer';


interface Props {
	docked: boolean;
	openDrawer: Function;
}

class Header extends React.Component<Props, {}> {
	render(): React.ReactElement<any> {
		const {docked, openDrawer} = this.props;

		const clsHeader = classnames({
			'hidden': docked
		})

		return (
			<header className={clsHeader}>
				<i className="material-icons" onClick={openDrawer}>menu</i>
			</header>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		docked: state.drawer.docked
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		openDrawer: openDrawer
	}, dispatch)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)
