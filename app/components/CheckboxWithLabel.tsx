import React from 'react';
import '../styles/checkbox.css';

type Props = {
	children: React.ReactNode;
	className?: string;
};

const CheckboxWithLabel = ({ children, className }: Props) => {
	return (
		<div className={`form-control ${className ? className : ''}`}>
			<label className='label cursor-pointer'>
				<input
					type='checkbox'
					className='checkbox checkbox-primary'
				/>
				<div className='custom-label-text'>{children}</div>
			</label>
		</div>
	);
};

export default CheckboxWithLabel;
