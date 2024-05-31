import React from 'react';
import '../styles/field-container.css';

type Props = {
	label?: string;
	children: React.ReactNode;
	description?: string;
	className?: string;
};

const FieldContainer = ({ label, children, description, className }: Props) => {
	return (
		<div className={`field-container ${className ? className : ''}`}>
			{label ? <label htmlFor=''>{label}</label> : null}
			{children}
			{description ? <p>{description}</p> : null}
		</div>
	);
};

export default FieldContainer;
