
import React, {Component} from 'react';
import {render} from 'react-dom';

import './index.less';

import Table from '../components/Table';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>table组件</h1>
				<Table />
			</div>
		);
	}
}


render(<Home/>, document.getElementById('root'));