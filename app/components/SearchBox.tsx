import usePlacesAutocomplete from 'use-places-autocomplete';
import { useGoogleMapsScript, Libraries } from 'use-google-maps-script';
import Select from 'react-select';

interface ISearchBoxProps {
	onSelectAddress?: (address: string) => void;
	defaultValue: string;
}

const libraries: Libraries = ['places'];

export function SearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
	const { isLoaded, loadError } = useGoogleMapsScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '',
		libraries,
	});

	if (!isLoaded) return null;
	if (loadError) return <div>Error loading</div>;

	return (
		<ReadySearchBox
			onSelectAddress={onSelectAddress}
			defaultValue={defaultValue}
		/>
	);
}

function ReadySearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
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
		// if (value === '') {
		// 	onSelectAddress('');
		// }
	};

	const handleSelect = async (address: string) => {
		setValue(address, true);
		clearSuggestions();
	};

	console.log('value ===', value);

	return (
		<div className='w-96 p-4 m-4'>
			<label htmlFor=''>Search your location</label>
			<Select
				className='w-full'
				isDisabled={!ready}
				isClearable={true}
				onInputChange={(newValue, actionMeta) => {
					console.log('actionMeta On Input change ===', actionMeta);
					handleChange(newValue);
				}}
				onChange={async (newValue, actionMeta) => {
					console.log('actionMeta On Select change ===', actionMeta);

					if (newValue && newValue.label)
						handleSelect(newValue.label as string);
				}}
				inputValue={value}
				options={
					data
						? data.map((place) => ({
								label: place.description,
								value: place.description,
						  }))
						: []
				}
				defaultInputValue=''
			/>
		</div>
		// <Combobox onSelect={handleSelect}>
		// 	<ComboboxInput
		// 		id='search'
		// 		value={value}
		// 		onChange={handleChange}
		// 		disabled={!ready}
		// 		placeholder='Search your location'
		// 		className='w-full p-2'
		// 		autoComplete='off'
		// 	/>
		// 	<ComboboxPopover>
		// 		<ComboboxList>
		// 			{status === 'OK' &&
		// 				data.map(({ place_id, description }) => (
		// 					<ComboboxOption
		// 						key={place_id}
		// 						value={description}
		// 					/>
		// 				))}
		// 		</ComboboxList>
		// 	</ComboboxPopover>
		// </Combobox>
	);
}
