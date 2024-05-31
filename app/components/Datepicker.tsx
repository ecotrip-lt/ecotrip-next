'use client';

import React from 'react';
import StyledSelect from './StyledSelect';
import FieldContainer from './FieldContainer';

type Props = {
	fiedsDisabled: boolean;
	label: string;
	handleDateChange?: (date: 'year' | 'month' | 'day', value: string) => void;
	options?: {
		years: { label: string; value: string }[];
		months: { label: string; value: string }[];
		days: { label: string; value: string }[];
	};
	className?: string;
};

const Datepicker = ({
	fiedsDisabled,
	label,
	handleDateChange,
	options,
	className,
}: Props) => {
	return (
		<FieldContainer
			label={label}
			className={className}>
			<div className='flex gap-4 w-full'>
				<div className='flex-1'>
					<StyledSelect
						placeholder='YYYY'
						options={options?.years || []}
						onChange={(newValue) => {
							// @ts-ignore
							const year = (newValue?.value as string) || '';
							handleDateChange?.('year', year);
						}}
						isDisabled={fiedsDisabled}
					/>
				</div>
				<div className='flex-1'>
					<StyledSelect
						placeholder='MM'
						options={options?.months || []}
						onChange={(newValue) => {
							// @ts-ignore
							const month = (newValue?.value as string) || '';
							handleDateChange?.('month', month);
						}}
						isDisabled={fiedsDisabled}
					/>
				</div>
				<div className='flex-1'>
					<StyledSelect
						placeholder='DD'
						options={options?.days || []}
						onChange={(newValue) => {
							// @ts-ignore
							const day = (newValue?.value as string) || '';
							handleDateChange?.('day', day);
						}}
						isDisabled={fiedsDisabled}
					/>
				</div>
			</div>
		</FieldContainer>
	);
};

export default Datepicker;
