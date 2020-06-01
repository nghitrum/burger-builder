import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger';

class BurderBuilder extends Component {
	render() {
		return (
			<Fragment>
				<Burger />
				<div>Build Control</div>
			</Fragment>
		);
	}
}

export default BurderBuilder;
