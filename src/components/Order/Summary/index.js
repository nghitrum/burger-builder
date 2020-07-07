import React from 'react';
import Burger from '../../Burger';
import Button from '../../UI/Button';
import classes from './Summary.module.css';

const Summary = (props) => {
	return (
		<div className={classes.Summary}>
			<h1>We hope it tastes well!</h1>
			<div style={{ width: '100%', margin: 'auto' }}>
				<Burger ingredients={props.ingredients} />
			</div>
			<Button btnType="Danger" clicked>
				CANCEL
			</Button>
			<Button btnType="Success" clicked>
				CONTINUE
			</Button>
		</div>
	);
};

export default Summary;
