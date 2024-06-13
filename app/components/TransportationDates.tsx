'use client';

import React, { useState } from 'react';
import Step from './Step';
import Datepicker from './Datepicker';
import getDateOptions from '../utils/getDateOptions';
import CheckboxWithLabel from './CheckboxWithLabel';

type TransportationDatesProps = {};

const TransportationDates = ({}: TransportationDatesProps) => {
	const [selectedYear, setSelectedYear] = useState<string>('');
	const [selectedMonth, setSelectedMonth] = useState<string>('');
	const [selectedDay, setSelectedDay] = useState<string>('');

	const options = getDateOptions(selectedMonth);

	const handleDateChange = (date: 'year' | 'month' | 'day', value: string) => {
		switch (date) {
			case 'year':
				setSelectedYear(value);
				break;
			case 'month':
				setSelectedMonth(value);
				break;
			case 'day':
				setSelectedDay(value);
				break;
			default:
				break;
		}
	};

	return (
		<Step
			step={3}
			title='Siuntos pervežimo datos'>
			<div className='flex justify-between datepicker-fields-wrapper'>
				<Datepicker
					className='w-1/2'
					fiedsDisabled={false}
					label='Siuntos paėmimo data'
					handleDateChange={handleDateChange}
					options={options}
				/>
				<Datepicker
					className='w-1/2'
					fiedsDisabled={true}
					label='Siuntos pristatymo data (numatoma)'
				/>
			</div>
		</Step>
	);
};

export default TransportationDates;
