import * as React from 'react';

export default class PageIndex extends React.Component<{}, {}> {
	render(): React.ReactElement<any> {
		return (
			<main>
				<div className="heading">
					<h1><img src="/img/logo.svg" alt="hearb" /></h1>
					<p>
						HAL生のHAL生による<br/>
						HAL生のためのポータル
					</p>
				</div>

				<div className="heading-panel">
					<h2>HALのポータルサイト、使ってますか？</h2>
					<p>使ってないよね笑</p>
				</div>
			</main>
		)
	}
}
