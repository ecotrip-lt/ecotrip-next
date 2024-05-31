import React from 'react';
import Step from './Step';
import ClientInformationForm from './ClientInformationForm';

type Props = {};

const RecipientInformation = (props: Props) => {
	return (
		<Step
			title='Siuntos pristatymo / gavėjo informacija'
			step={5}>
			<ClientInformationForm client='recipient' />
		</Step>
	);
};

export default RecipientInformation;
