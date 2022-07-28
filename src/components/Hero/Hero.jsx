import axios from 'axios';
import { useState } from 'react';
import './hero.scss';

const Hero = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		await axios
			.post('https://reqres.in/api/login', { email, password })
			.then((response) => {
				alert(
					`Login successful with following Token: ${response.data.token}`
				);
			})
			.catch((error) => {
				alert(
					`Following Error Occurred: ${Object.values(
						error.response.data
					)}`
				);
			});
	};

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
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type='password'
							className='form-input'
							placeholder='Password*'
							required
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							className='form-submit-btn'
							type='submit'
							onClick={handleSubmit}>
							Login
						</button>
					</div>
					<div className='more'>
						<div className='more-links'>
							<div className='more-link1'>
								<input
									type='checkbox'
									className='more-link-checkbox'
								/>
								Remember Password
							</div>
							<div className='more-link2'>Forgot Password?</div>
						</div>
					</div>
				</div>
				<div className='right-hero'></div>
			</div>
		</div>
	);
};

export default Hero;
