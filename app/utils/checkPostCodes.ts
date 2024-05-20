import UK_POST_CODES from './ukPostCodes';

type CheckPostCodesProps = {
	address: {
		from: string;
		to: string;
	};
};

export const checkPostCodes = ({ address }: CheckPostCodesProps) => {
	let path: string = '';

	const formattedData = Object.entries(address).map(([key, value]) => {
		return {
			direction: key,
			value,
		};
	});

	const filteredPostcodes: string[] = UK_POST_CODES.map((obj) => obj.postcode)
		.filter((code) => {
			const postCodesArray: string[] = [];
			if (postCodesArray.includes(code)) {
				return false;
			} else {
				postCodesArray.push(code);
			}
			return postCodesArray;
		})
		.sort((a, b) => a.localeCompare(b));

	const fromObj = formattedData.find((obj) => obj.direction === 'from');

	const isStandartPrices = !filteredPostcodes.some((code) =>
		fromObj?.value.toUpperCase().includes(code)
	);

	if (isStandartPrices) {
		path = '/address-form/standart-prices';
	} else {
		path = '/address-form/parcel-force-prices';
	}

	return {
		path,
	};
};
