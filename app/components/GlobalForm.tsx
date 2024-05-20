'use client';
import React from 'react';
import AddressesForm from './AddressesForm';
import { FormProvider, useForm } from 'react-hook-form';
import { AddressesFormType } from '../utils/types';

type GlobalFormProps = {
	addressForm: AddressesFormType;
};

const GlobalForm = () => {
	const pathname = window.location.pathname;
	console.log('pathname ===', pathname);
	const methods = useForm<GlobalFormProps>();

	const addressMethods = useForm<AddressesFormType>({
		defaultValues: {
			addressFrom: null,
			addressTo: null,
		},
	});

	return (
		<div>
			<FormProvider {...methods}>
				<AddressesForm methods={addressMethods} />
			</FormProvider>
		</div>
	);
};

export default GlobalForm;
