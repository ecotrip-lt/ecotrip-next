'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { SearchBox } from './SearchBox';

type AddressesFormType = {
	addressFrom: string;
	addressTo: string;
};

const AddressesForm = () => {
	const { register, setValue, watch, getValues } = useForm<AddressesFormType>({
		defaultValues: {},
	});

	const form = watch();
	console.log('form ===', form);
	return (
		<div>
			<h2>From</h2>
			<SearchBox
				{...register('addressFrom')}
				// onSelectAddress={(address) => {
				// 	setValue('addressFrom', address);
				// }}
				defaultValue=''
			/>
			<h2>to</h2>
			<SearchBox
				{...register('addressTo')}
				// onSelectAddress={(address) => {
				// 	setValue('addressTo', address);
				// }}
				defaultValue=''
			/>
		</div>
	);
};

export default AddressesForm;
