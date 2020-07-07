import React, { Component } from 'react';
import Button from '../../../components/UI/Button';
import classes from './ContactData.module.css';

class ContactData extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			address: {
				street: '',
				zipCode: ''
			},
			email: ''
		};
	}

	render() {
		return (
			<div className={classes.ContactData}>
				<h4>Enter your info</h4>
				<form>
					<input
						className={classes.Input}
						type="text"
						name="name"
						placeholder="Your name"
					/>
					<input
						className={classes.Input}
						type="email"
						name="email"
						placeholder="Your email"
					/>
					<input
						className={classes.Input}
						type="street"
						name="name"
						placeholder="Your street"
					/>
					<input
						className={classes.Input}
						type="text"
						name="zipCode"
						placeholder="Your zipCode"
					/>
					<Button btnType="Success">ORDER</Button>
				</form>
			</div>
		);
	}
}

export default ContactData;
