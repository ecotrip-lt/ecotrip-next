'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { SearchBox } from './SearchBox';
import Step from './Step';
import { Address } from '../utils/types';
import PrimaryButton from './PrimaryButton';
import FieldContainer from './FieldContainer';
import CustomInput from './CustomInput';

type AddressFormProps = {
	addressFrom: string;
	addressTo: string;
};

const AddressForm = () => {
	const { register, setValue, watch, getValues, handleSubmit } =
		useForm<AddressFormProps>({
			defaultValues: {},
		});

	const form = watch();
	console.log('form ===', form);

	const onTestClick = () => {
		const values = getValues();
		console.log('values ===', values);
	};

	const onSubmit = (data: AddressFormProps) => {
		console.log('data', data);
	};

	const onChange = (name: Address, value: string) => {
		setValue(name, value);
	};

	return (
		<Step
			title='Paėmimo ir pristatymo adresai'
			step={1}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex gap-[22px] items-center mb-[30px]'>
					<FieldContainer
						label='Paėmimo adresas:'
						description='Adresas iš kur paįmama siunta arba perduodama EcoTrip komandai.'>
						<SearchBox
							name={Address.From}
							defaultValue=''
							onChange={onChange}
						/>
					</FieldContainer>
					<FieldContainer
						label='Paėmimo pašto kodas:'
						description='Pašto kodas sugeneruojamas automatiškai, suvedus tikslų adresą. Pasitikrinkite ar teisingas pašto kodas.'>
						<CustomInput
							type='text'
							placeholder='Pašto kodas'
						/>
					</FieldContainer>
				</div>

				<div className='flex gap-[22px] items-center mb-[30px]'>
					<FieldContainer
						label='Pristatymo adresas:'
						description='Adresas, kuriame gavėjas galės atsiimti siuntą arba kuriame siunta bus palikta po pristatymo.'>
						<SearchBox
							name={Address.To}
							defaultValue=''
							onChange={onChange}
						/>
					</FieldContainer>
					<FieldContainer
						label='Pristatymo pašto kodas:'
						description='Pašto kodas sugeneruojamas automatiškai, suvedus tikslų adresą. Pasitikrinkite ar teisingas pašto kodas.'>
						<CustomInput
							type='text'
							placeholder='Pašto kodas'
						/>
					</FieldContainer>
				</div>

				<PrimaryButton type='submit'>Click</PrimaryButton>
			</form>
		</Step>
	);
};

export default AddressForm;
