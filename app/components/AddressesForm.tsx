import React from 'react';
import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';
import { SearchBox } from './SearchBox';
import { useRouter } from 'next/navigation';
import { checkPostCodes } from '../utils/checkPostCodes';
import { Address, AddressesFormType } from '../utils/types';
import PrimaryButton from './buttons/PrimaryButton';

const AddressesForm = ({
	methods,
}: {
	methods: UseFormReturn<AddressesFormType, any, undefined>;
}) => {
	const router = useRouter();
	const { watch, control, handleSubmit } = methods;
	const form = watch();

	// console.log('form ===', form);

	const isDisabled = !(!!form.addressFrom && !!form.addressTo);

	const navigate = (href: string) => {
		router.push(href);
	};

	const onSubmit: SubmitHandler<AddressesFormType> = (data) => {
		// TODO Response should return navigation path
		const { path } = checkPostCodes({
			address: {
				from: data.addressFrom?.label ?? '',
				to: data.addressTo?.label ?? '',
			},
		});
		if (path) {
			navigate(path);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2>From</h2>
			{/* pirmam UK antram LT */}
			<SearchBox
				control={control}
				name={Address.From}
				defaultValue=''
				country={['uk']}
			/>
			<h2>to</h2>
			<SearchBox
				control={control}
				name={Address.To}
				defaultValue=''
				country={['lt']}
			/>
			<PrimaryButton isDisabled={isDisabled}>Patvirtinti Adresus</PrimaryButton>
		</form>
	);
};

export default AddressesForm;
