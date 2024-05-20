'use client';

import React from 'react';
import CustomLink from '../components/CustomLink';
import { useForm, useFormContext, UseFormReturn } from 'react-hook-form';
import { AddressesFormType } from '../utils/types';
import GlobalForm from '../components/GlobalForm';
import '../styles/main.css';
import Spinner from '../components/Spinner';

const Form = () => {
	if (typeof window === 'undefined') {
		return <Spinner />;
	} else {
		return (
			<div className='main'>
				<GlobalForm />
			</div>
		);
	}
};

export default Form;
