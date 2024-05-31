import React from 'react';
import '../styles/textarea.css';

type CustomTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	label?: string;
	name: string;
};

const CustomTextarea = (props: CustomTextareaProps) => {
	return (
		<div className='flex flex-col custom-textarea gap-[10px]'>
			<label htmlFor='note'>{props.label}</label>
			<textarea
				{...props}
				className='textarea textarea-bordered max-h-[120px] min-h-[60px]'
				placeholder='Pvz.: Nebusiu namie, siuntą paduos mano kaimynas. Arba siuntą rasite paėmimui galiniame kieme ir panašiai.'
				name={props.name}
			/>
		</div>
	);
};

export default CustomTextarea;
