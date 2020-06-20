import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner';
import withErrorHandler from '../../components/withErrorHandler';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 1,
	meat: 1.5,
	bacon: 0.5
};

class BurgerBuilder extends Component {
	constructor(props) {
		super(props);

		this.state = {
			defaultIngredients: null,
			ingredients: null,
			totalPrice: 4,
			purchasable: false,
			purchasing: false,
			loading: false,
			error: false
		};
	}

	componentDidMount() {
		axios
			.get('/ingredients.json')
			.then((res) => {
				console.log(res);
				this.setState({
					ingredients: res.data,
					defaultIngredients: res.data
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({ error: true });
			});
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map((key) => {
				return ingredients[key];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

		this.setState({ purchasable: sum > 0 });
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};

		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		});

		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];

		if (oldCount <= 0) {
			return;
		}

		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};

		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;

		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		});

		this.updatePurchaseState(updatedIngredients);
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		this.setState({ loading: true });
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'John Connor',
				address: {
					street: 'Isokatu',
					zipCode: '12345',
					country: 'Finland'
				},
				email: 'nghitrum@gmail.com'
			},
			deliveryMethod: 'click and collect'
		};

		axios
			.post('/orders.json', order)
			.then((response) => {
				console.log(response);
				this.setState({ ingredients: this.state.defaultIngredients });
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				this.setState({ loading: false, purchasing: false });
			});
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary = null;
		let burger = this.state.error ? (
			<p>Ingredients can't be loaded!</p>
		) : (
			<Spinner />
		);

		if (this.state.ingredients) {
			orderSummary = (
				<OrderSummary
					price={this.state.totalPrice}
					ingredients={this.state.ingredients}
					purchaseCanceled={this.purchaseCancelHandler}
					purchaseContinued={this.purchaseContinueHandler}
				/>
			);
			burger = (
				<Fragment>
					<Burger ingredients={this.state.ingredients} />
					<BuildControls
						price={this.state.totalPrice}
						disabled={disabledInfo}
						purchasable={this.state.purchasable}
						ingredientAdded={this.addIngredientHandler}
						ingredientRemoved={this.removeIngredientHandler}
						ordered={this.purchaseHandler}
					/>
				</Fragment>
			);
		}

		if (this.state.loading) {
			orderSummary = <Spinner />;
		}

		return (
			<Fragment>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					{orderSummary}
				</Modal>
				{burger}
			</Fragment>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);
