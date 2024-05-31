import React from 'react';
import Breadcrumds from '../components/Breadcrumds';
import Divider from '../components/Divider';
import AddressForm from '../components/AddressForm';
import '../styles/main.css';
import TransportationDates from '../components/TransportationDates';

// formos suma - 10% + additionalCharges
const Form = () => {
	return (
		<div className='main'>
			<Breadcrumds />
			<Divider />
			<AddressForm />
			<Divider />
			<TransportationDates />
			<Divider />
		</div>
	);
};

export default Form;
