'use client';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AddressesFormType, UKPostcodeType } from '../utils/types';

type GlobalFormProps = {
	addressForm: AddressesFormType;
	foundPostCodeAddress: UKPostcodeType | null;
};

const GlobalForm = () => {
	const methods = useForm<GlobalFormProps>();

	const setGlobalFormValues = (
		name:
			| 'addressForm'
			| 'addressForm.addressFrom'
			| 'addressForm.addressTo'
			| 'addressForm.addressFrom.label'
			| 'addressForm.addressFrom.value'
			| 'addressForm.addressTo.label'
			| 'addressForm.addressTo.value',
		value: any
	) => {
		methods.setValue(name, value);
	};

	const addressMethods = useForm<AddressesFormType>({
		defaultValues: {
			addressFrom: null,
			addressTo: null,
		},
	});

	const globalFormValues = methods.watch();
	console.log('globalFormValues ===', globalFormValues);

	return (
		<>
			<FormProvider {...methods}>
				{/* <AddressesForm
					methods={addressMethods}
					setGlobalFormValues={setGlobalFormValues}
				/> */}
			</FormProvider>
		</>
	);
};

export default GlobalForm;
