import React from 'react';
import '../styles/input.css';
import ErrorMessage from './ErrorMessage';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	errorMessage?: string;
};

const CustomInput = (props: InputProps) => {
	return (
		<>
			<div className={`input-container ${props.errorMessage ? 'error' : ''}`}>
				<input {...props}></input>
			</div>

			{props.errorMessage ? (
				<ErrorMessage message={props.errorMessage} />
			) : null}
		</>
	);
};

export default CustomInput;
