import CustomLink from '@/app/components/CustomLink';
import React from 'react';

type Props = {};

const StandartPrices = (props: Props) => {
	return (
		<div>
			<p>Siunta ar Kiti Produktai?</p>
			<p>Depends on path</p>
			<p>Buttons will be removed</p>
			<div className='flex items-center gap-4'>
				<CustomLink
					href='/address-form/standart-prices/shipment'
					label='Siunta'
				/>
				<CustomLink
					href='/address-form/standart-prices/other-products'
					label='Kiti produktai'
				/>
			</div>
		</div>
	);
};

export default StandartPrices;
