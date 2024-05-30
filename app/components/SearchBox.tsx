'use client';
// import usePlacesAutocomplete from "use-places-autocomplete";
// import { useGoogleMapsScript, Libraries } from "use-google-maps-script";
// import Select from "react-select";

// interface ISearchBoxProps {
//   onSelectAddress?: (address: string) => void;
//   defaultValue: string;
// }

// const libraries: Libraries = ["places"];

// export function SearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
//   const { isLoaded, loadError } = useGoogleMapsScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
//     libraries,
//   });

//   if (!isLoaded) return null;
//   if (loadError) return <div>Error loading</div>;

//   return (
//     <ReadySearchBox
//       onSelectAddress={onSelectAddress}
//       defaultValue={defaultValue}
//     />
//   );
// }

// function ReadySearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     debounce: 300,
//     defaultValue,
//     requestOptions: {
//       componentRestrictions: { country: ["uk", "lt"] },
//     },
//   });

//   const handleChange = (value: string) => {
//     setValue(value);
//   };

//   const handleSelect = async (address: string) => {
//     setValue(address, true);
//     clearSuggestions();
//   };

//   console.log("value ===", value);

//   return (
//     <div className='w-96 p-4 m-4'>
//       <label htmlFor=''>Search your location</label>
//       <Select
//         className='w-full'
//         isDisabled={!ready}
//         isClearable={true}
//         onInputChange={(newValue, actionMeta) => {
//           console.log("actionMeta On Input change ===", actionMeta);
//           handleChange(newValue);
//         }}
//         onChange={async (newValue, actionMeta) => {
//           console.log("actionMeta On Select change ===", actionMeta);

//           if (newValue && newValue.label)
//             handleSelect(newValue.label as string);
//         }}
//         inputValue={value}
//         options={
//           data
//             ? data.map((place) => ({
//                 label: place.description,
//                 value: place.description,
//               }))
//             : []
//         }
//         defaultInputValue=''
//       />
//     </div>
//   );
// }

import React from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { useGoogleMapsScript, Libraries } from 'use-google-maps-script';
import { Address, AddressesFormType } from '../utils/types';
import { OptionType } from '../utils/types';
import StyledSelect from './StyledSelect';

interface ISearchBoxProps {
	defaultValue: string;
	name: Address;
	onChange: (name: Address, value: string) => void;
}

const libraries: Libraries = ['places'];

export const SearchBox = ({
	defaultValue,
	name,
	onChange,
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
		/>
	);
};

const ReadySearchBox = ({ defaultValue, name, onChange }: ISearchBoxProps) => {
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
				className='w-full'
				isDisabled={!ready}
				isClearable={true}
				onInputChange={(value) => {
					handleChange(value);
				}}
				// {...field}
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
			/>
		</div>
	);
};
