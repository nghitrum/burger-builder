import React, { Fragment } from 'react';
import Logo from '../Logo';
import NavigationItems from '../NavigationItems';
import Backdrop from '../../UI/Backdrop';
import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
	const attachedClasses = props.open
		? [classes.SideDrawer, classes.Open].join(' ')
		: [classes.SideDrawer, classes.Close].join(' ');

	return (
		<Fragment>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Fragment>
	);
};

export default SideDrawer;
