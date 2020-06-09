import React from 'react';
import Logo from './../Logo';
import NavigationItems from '../NavigationItems';
import classes from './Toolbar.module.css';

const Toolbar = (props) => {
	return (
		<header className={classes.Toolbar}>
			<div>MENU</div>
			<Logo />
			<NavigationItems />
		</header>
	);
};

export default Toolbar;
