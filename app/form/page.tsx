import React from 'react';
import Breadcrumds from '../components/Breadcrumds';
import Divider from '../components/Divider';
import AddressForm from '../components/AddressForm';
import '../styles/main.css';

// formos suma - 10% + additionalCharges
const Form = () => {
	return (
		<div className='main'>
			{/* <GlobalForm /> */}
			<Breadcrumds />
			<Divider />
			<AddressForm />
			<Divider />
		</div>
	);
};

export default Form;
