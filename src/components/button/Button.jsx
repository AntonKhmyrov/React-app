import React from 'react'
import './button.css'

export const Button = ({ children, onClick, className }) => {
	const buttonClasses = `btn ${className || ''}`;

	return (
		<button className={buttonClasses} onClick={onClick}>
			{children}
		</button>
	);
};