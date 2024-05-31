'use client';
import React from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { useGoogleMapsScript, Libraries } from 'use-google-maps-script';
import { Address } from '../utils/types';
import { OptionType } from '../utils/types';
import StyledSelect from './StyledSelect';

interface ISearchBoxProps {
	defaultValue: string;
	name: Address;
	placeholder?: string;
	onChange: (name: Address, value: string) => void;
}

const libraries: Libraries = ['places'];

export const SearchBox = ({
	defaultValue,
	name,
	onChange,
	placeholder,
}: ISearchBoxProps) => {
	const { isLoaded, loadError } = useGoogleMapsScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '',
		libraries,
	});

	if (!isLoaded) return null;
	if (loadError) return <div>Error loading</div>;

	return (
		<ReadySearchBox
			defaultValue={defaultValue}
			name={name}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

const ReadySearchBox = ({
	defaultValue,
	name,
	onChange,
	placeholder,
}: ISearchBoxProps) => {
	const {
		ready,
		value,
		setValue,
		suggestions: { status, data },
		clearSuggestions,
	} = usePlacesAutocomplete({
		debounce: 300,
		defaultValue,
		requestOptions: {
			componentRestrictions: { country: ['uk', 'lt'] },
		},
	});

	const handleChange = (value: string) => {
		setValue(value);
	};

	return (
		<div className='w-full'>
			<StyledSelect
				name={name}
				className='w-full placeholder-{#7a777680}'
				isDisabled={!ready}
				isClearable={true}
				onInputChange={(value) => {
					handleChange(value);
				}}
				onChange={(newValue, actionMeta) => {
					const val = newValue as unknown as OptionType;
					if (newValue && val.label) {
						onChange(name, val.label);
						clearSuggestions();
					}
				}}
				inputValue={value}
				// @ts-ignore
				options={
					data
						? data.map((place) => ({
								label: place.description as string,
								value: place.description as string,
						  }))
						: []
				}
				defaultInputValue=''
				placeholder={placeholder}
			/>
		</div>
	);
};
