import React, { Fragment } from 'react';
import Button from '../../UI/Button';

const OrderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map(
		(ingredientKey) => {
			return (
				<li key={ingredientKey}>
					<span style={{ textTransform: 'capitalize' }}>
						{ingredientKey}
					</span>
					: {props.ingredients[ingredientKey]}
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
				<strong>Total prices: €{props.price.toFixed(2)}</strong>
			</p>
			<p>Continue to Checkout?</p>
			<Button btnType={'Danger'} clicked={props.purchaseCanceled}>
				CANCEL
			</Button>
			<Button btnType={'Success'} clicked={props.purchaseContinued}>
				CONTINUE
			</Button>
		</Fragment>
	);
};

export default OrderSummary;
