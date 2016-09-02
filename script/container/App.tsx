import * as React from 'react';

import Drawer from './Drawer';
// import Explore from './component/Explore';

export default class App extends React.Component<{}, {}> {
	render(): React.ReactElement<any> {
		return (
			<div>
				<Drawer />
			</div>
		) as React.ReactElement<any>;

		// <Explore value={inputValue} onChange={handleChange} />
	}
}
