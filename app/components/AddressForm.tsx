'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { SearchBox } from './SearchBox';
import Step from './Step';
import { Address } from '../utils/types';
import PrimaryButton from './PrimaryButton';
import FieldContainer from './FieldContainer';
import CustomInput from './CustomInput';
import CheckboxWithLabel from './CheckboxWithLabel';
import SecondaryButton from './SecondaryButton';

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
				<div className='flex gap-[22px] items-center mb-[30px] address-fields-wrapper'>
					<FieldContainer
						label='Paėmimo adresas:'
						description='Adresas iš kur paįmama siunta arba perduodama EcoTrip komandai.'>
						<SearchBox
							name={Address.From}
							defaultValue=''
							onChange={onChange}
							placeholder='Įveskite gatvę, namo numerį, miestą'
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

				<div className='flex gap-[22px] items-center mb-[30px] address-fields-wrapper'>
					<FieldContainer
						label='Pristatymo adresas:'
						description='Adresas, kuriame gavėjas galės atsiimti siuntą arba kuriame siunta bus palikta po pristatymo.'>
						<SearchBox
							name={Address.To}
							defaultValue=''
							onChange={onChange}
							placeholder='Įveskite gatvę, namo numerį, miestą'
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

				<CheckboxWithLabel>
					<p>
						Noriu užsakyti prekės nupirkimo paslaugą.{' '}
						<a
							href='/'
							className='text-primary underline'>
							Kas yra prekės nupirkimo paslauga ir kaip ją naudotis?
						</a>
					</p>
				</CheckboxWithLabel>
				<CheckboxWithLabel className='mb-[30px]'>
					<p>
						Noriu pasinaudoti EcoTrip adreso paslauga.{' '}
						<a
							href='/'
							className='text-primary underline'>
							Kas yra EcoTrip adreso paslauga ir kaip ją naudotis?
						</a>
					</p>
				</CheckboxWithLabel>

				<div className='w-full flex'>
					<SecondaryButton
						type='submit'
						className='ml-auto'>
						Patvirtintinti adresus
					</SecondaryButton>
				</div>
			</form>
		</Step>
	);
};

export default AddressForm;
