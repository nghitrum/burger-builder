import React, { Fragment, Component } from 'react';
import Button from '../../UI/Button';

class OrderSummary extends Component {
	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map(
			(ingredientKey) => {
				return (
					<li key={ingredientKey}>
						<span style={{ textTransform: 'capitalize' }}>
							{ingredientKey}
						</span>
						: {this.props.ingredients[ingredientKey]}
					</li>
				);
			}
		);
		return (
			<Fragment>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul>{ingredientSummary}</ul>
				<p>
					<strong>
						Total prices: €{this.props.price.toFixed(2)}
					</strong>
				</p>
				<p>Continue to Checkout?</p>
				<Button
					btnType={'Danger'}
					clicked={this.props.purchaseCanceled}
				>
					CANCEL
				</Button>
				<Button
					btnType={'Success'}
					clicked={this.props.purchaseContinued}
				>
					CONTINUE
				</Button>
			</Fragment>
		);
	}
}

export default OrderSummary;
