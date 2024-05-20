import usePlacesAutocomplete from 'use-places-autocomplete';
import { useGoogleMapsScript, Libraries } from 'use-google-maps-script';
import Select from 'react-select';
import { Control, Controller } from 'react-hook-form';
import { Address, AddressesFormType } from '../utils/types';
import { OptionType } from '../utils/types';

interface ISearchBoxProps {
	defaultValue: string;
	name: Address;
	control: Control<AddressesFormType, any>;
	country: string[];
}

const libraries: Libraries = ['places'];

export function SearchBox({
	defaultValue,
	name,
	control,
	country,
}: ISearchBoxProps) {
	const { isLoaded, loadError } = useGoogleMapsScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '',
		libraries,
	});

	if (!isLoaded) return null;
	if (loadError) return <div>Error loading</div>;

	return (
		<ReadySearchBox
			defaultValue={defaultValue}
			control={control}
			name={name}
			country={country}
		/>
	);
}

function ReadySearchBox({
	defaultValue,
	name,
	control,
	country,
}: ISearchBoxProps) {
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
			componentRestrictions: { country },
		},
	});

	const handleChange = (value: string) => {
		setValue(value);
	};

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => {
				return (
					<div className='w-96 p-4 m-4'>
						<label htmlFor=''>Search your location</label>
						<Select
							className='w-full'
							isDisabled={!ready}
							isClearable={true}
							onInputChange={(value) => {
								handleChange(value);
							}}
							{...field}
							onChange={(newValue, actionMeta) => {
								field.onChange(newValue);
								const val = newValue as unknown as OptionType;
								if (newValue && val.label) {
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
						/>
					</div>
				);
			}}
		/>
	);
}
