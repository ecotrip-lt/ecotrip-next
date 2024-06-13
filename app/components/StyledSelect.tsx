/* eslint-disable react/display-name */
// import merge from 'lodash-es/merge';
import Select, { Props } from 'react-select';
import React, { forwardRef } from 'react';
import ErrorMessage from './ErrorMessage';
// import { styleProps } from './ReactSelectStyleProps';
// import SimpleTextError from '../../errors/SimpleTextError';

const customStyles = {
	// @ts-ignore
	placeholder: (provided, state) => {
		return {
			...provided,
			color: '#7a777680',
			fontFamily: 'Arial',
			fontSize: '14px',
			fontWeight: '400',
			lineHeight: '16.1px',
			textAlign: 'left',
		};
	},
	// @ts-ignore
	option: (provided, state) => ({
		...provided,
		color: '#7a7776',
		fontSize: '14px',
		fontWeight: '400',
		lineHeight: '16.1px',
		textAlign: 'left',
	}),
	// @ts-ignore
	singleValue: (provided, state) => ({
		...provided,
		color: '#7a7776',
		fontSize: '14px',
		fontWeight: '400',
		lineHeight: '16.1px',
		textAlign: 'left',
	}),
	// @ts-ignore
	valueContainer: (provided, state) => {
		return {
			...provided,
		};
	},
	// @ts-ignore
	control: (provided, state) => {
		const isError = !!state.selectProps.errorMessage;
		return {
			...provided,
			border: isError ? '1px solid #ff0000' : '1px solid #0000001A',
			'&:hover': {
				border: state.isFocused
					? '1px solid #9aa61e'
					: isError
					? '1px solid #ff0000'
					: '1px solid #0000001A',
			},
			'&:focus-within': {
				border: '1px solid #9aa61e',
				boxShadow: 'none',
			},
		};
	},
};

export default forwardRef(
	(
		props: Props & {
			label?: string;
			testId?: string;
			errorMessage?: string;
		},
		// Type is RefCallBack from react-hook-form
		// Type does not work with spread syntax.
		ref: any
	) => {
		return (
			<div className='w-100 flex flex-col gap-2'>
				<Select
					styles={customStyles}
					ref={ref}
					placeholder={false}
					{...props}
					aria-label={`${props.name}`}
				/>
				{props.errorMessage ? (
					<ErrorMessage message={props.errorMessage} />
				) : null}
			</div>
		);
	}
);
