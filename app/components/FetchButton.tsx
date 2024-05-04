'use client';
import React, { useState } from 'react';

const FetchButton = () => {
	const [testData, setData] = useState([]);

	const getItems = async () => {
		const res = await fetch('http://localhost:3000/api/data');
		const data = await res.json();
		console.log('data ===', data);
		setData(data);
	};

	return <button onClick={getItems}>CLICK</button>;
};

export default FetchButton;
