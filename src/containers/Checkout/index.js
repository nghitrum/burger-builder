import React, { Component } from 'react';
import Summary from '../../components/Order/Summary';

class Checkout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ingredients: {
				salad: 1,
				meat: 1,
				cheese: 1
			}
		};
	}

	render() {
		return (
			<div>
				<Summary ingredients={this.state.ingredients} />
			</div>
		);
	}
}

export default Checkout;
