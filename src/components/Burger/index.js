import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import classes from './Burger.module.css';

const Burger = (props) => {
	let transformedIngredients = Object.keys(props.ingredients)
		.map((ingredientKey) => {
			return [...Array(props.ingredients[ingredientKey])].map(
				(_, index) => {
					return (
						<BurgerIngredient
							key={ingredientKey + index}
							type={ingredientKey}
						/>
					);
				}
			);
		})
		.reduce((arr, current) => {
			return arr.concat(current);
		}, []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients!</p>;
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default Burger;
