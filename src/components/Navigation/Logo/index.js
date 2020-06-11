import React from 'react';
import classes from './Logo.module.css';
import logo from '../../../assets/images/logo.png';

const Logo = (props) => {
	return (
		<div className={classes.Logo} style={{ height: props.height }}>
			<img src={logo} alt={'Burger Builder'} />
		</div>
	);
};

export default Logo;
