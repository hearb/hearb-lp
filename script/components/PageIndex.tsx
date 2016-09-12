import * as React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {generateToast} from '../modules/toast';

interface Props {
	generateToast: Function;
}

class PageIndex extends React.Component<Props, {}> {
	generateToast = () => {
		this.props.generateToast('テスト', 'info');
	}


	render(): React.ReactElement<any> {
		return (
			<main>
				index page
				<button type="button" onClick={this.generateToast}>generate toast</button>
			</main>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		generateToast: generateToast
	}, dispatch)
};

export default connect(() => {return {}}, mapDispatchToProps)(PageIndex);
