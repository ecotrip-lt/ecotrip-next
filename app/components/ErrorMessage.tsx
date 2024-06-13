import React from 'react';
import '../styles/error-message.css';

type Props = {
	message: string;
};

const ErrorMessage = ({ message }: Props) => {
	return (
		<div className='flex items-center gap-1'>
			<div className='circle' />
			<span className='error-message'>{message}</span>
		</div>
	);
};

export default ErrorMessage;
