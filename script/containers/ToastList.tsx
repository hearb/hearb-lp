import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classnames = require('classnames');

import {disableToast, Toast} from '../modules/toast';


interface ItemProps {
	message:   string;
	type:      string;
	animating: boolean;
	disabled:  boolean;
	onTransitionEnd: Function;
}

class ToastItem extends React.Component<ItemProps, {}> {
	render(): React.ReactElement<any> {
		const {message, type, animating, disabled} = this.props;

		const classname = classnames('toast', type, {
			'animate':  animating,
			'disabled': disabled
		});

		return (
			<div
				className={classname}
				onTransitionEnd={this.props.onTransitionEnd}>
				{message}
			</div>
		);
	}
}


interface Props {
	toasts: Array<Toast>;
	disableToast: Function;
}

class ToastList extends React.Component<Props, {}> {
	disableToast = (key: string) => {
		return () => {
			this.props.disableToast(key);
		};
	}

	render(): React.ReactElement<any> {
		const {disableToast} = this;

		const toasts = this.props.toasts.map((result) => {
			return (
				<ToastItem
					key={result.key}
					message={result.message}
					type={result.type}
					animating={result.animating}
					disabled={result.disabled}
					onTransitionEnd={disableToast(result.key)} />
			);
		});

		return (
			<div className="toasts">{toasts}</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		toasts: state.toast
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		disableToast: disableToast
	}, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ToastList);
