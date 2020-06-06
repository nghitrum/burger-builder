import React from 'react';
import BuildControl from './BuildControl';
import classes from './BuildControls.module.css';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meet', type: 'meat' }
];

const BuildControls = (props) => {
	return (
		<div className={classes.BuildControls}>
			<p>
				Current Price: <strong>{props.price.toFixed(2)}</strong>
			</p>
			{controls.map((control) => (
				<BuildControl
					key={control.label}
					label={control.label}
					added={() => props.ingredientAdded(control.type)}
					removed={() => props.ingredientRemoved(control.type)}
					disabled={props.disabled[control.type]}
				/>
			))}
		</div>
	);
};

export default BuildControls;
