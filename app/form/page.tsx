import React from 'react';
import Breadcrumds from '../components/Breadcrumds';
import Divider from '../components/Divider';
import AddressForm from '../components/AddressForm';
import '../styles/main.css';
import TransportationDates from '../components/TransportationDates';
import SenderInformation from '../components/SenderInformation';
import RecipientInformation from '../components/RecipientInformation';
import PayerInformation from '../components/PayerInformation';

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
			<SenderInformation />
			<Divider />
			<RecipientInformation />
			<Divider />
			<PayerInformation />
			<Divider />
		</div>
	);
};

export default Form;
