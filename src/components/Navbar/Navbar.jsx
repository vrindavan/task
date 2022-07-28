import './navbar.scss';

import React from 'react';

const Navbar = () => {
	return (
		<header className='header'>
			<div className='navbar-container'>
				<div className='left-navbar'>
					<h1 className='navbar-logo'>
						ATools<span className='colored-navbar-title'>.</span>
					</h1>
				</div>
				<div className='right-navbar'>
					<ul className='navbar-btns'>
						<li className='navbar-btn btn1'>
							<a href='#' className='btn'>
								Start Free Trial
							</a>
						</li>
						<li className='navbar-btn btn2'>
							<a href='#' className='btn'>
								Login
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
