import './hero.scss';

import React from 'react';

const Hero = () => {
	return (
		<div className='hero-container'>
			<div className='hero-wrapper'>
				<div className='left-hero'>
					<div className='form-wrapper'>
						<h1 className='form-title'>Welcome Back</h1>
						<div className='sub-title'>
							Sub-title text goes here
						</div>
						<input
							type='email'
							className='form-input'
							placeholder='Email Address*'
							required
						/>
						<input
							type='password'
							className='form-input'
							placeholder='Password*'
							required
						/>
						<button className='form-submit-btn'>Login</button>
					</div>
					<div className='more'>
						<div className='more-links'>
							<div className='more-link1 links'>
								<input
									type='checkbox'
									className='more-link-checkbox'
								/>
								Remember Password
							</div>
							<div className='more-link2 links'>
								Forgot Password?
							</div>
						</div>
					</div>
				</div>
				<div className='right-hero'></div>
			</div>
		</div>
	);
};

export default Hero;
