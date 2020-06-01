import React, { Fragment } from 'react';

const Layout = (props) => {
	return (
		<Fragment>
			<div>Toolbar, SideDrawer, BackDrop</div>
			<main>{props.children}</main>
		</Fragment>
	);
};

export default Layout;
