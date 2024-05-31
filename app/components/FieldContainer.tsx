import React from 'react';
import '../styles/field-container.css';

type Props = {
	label?: string;
	children: React.ReactNode;
	description?: string;
};

const FieldContainer = ({ label, children, description }: Props) => {
	return (
		<div className='field-container'>
			{label ? <label htmlFor=''>{label}</label> : null}
			{children}
			{description ? <p>{description}</p> : null}
		</div>
	);
};

export default FieldContainer;
