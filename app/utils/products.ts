import { CommonProductTypeExample, OptionType } from './types';
import { getOptions } from './getOptions';

export const automotiveGoodsCategoryProducts: CommonProductTypeExample[] = [
	// setOfWheels
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Ratų komplektas',
			value: 'setOfWheels',
		},
		size: {
			from: 0,
			to: 15,
		},
		volume: 0.08,
		weight: 28,
		specification: false,
		price: 60,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Ratų komplektas',
			value: 'setOfWheels',
		},
		size: {
			from: 0,
			to: 15,
		},
		volume: 0.24,
		weight: 40,
		specification: true,
		price: 70,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Ratų komplektas',
			value: 'setOfWheels',
		},
		size: {
			from: 16,
			to: 17,
		},
		volume: 0.1,
		weight: 32,
		specification: false,
		price: 80,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Ratų komplektas',
			value: 'setOfWheels',
		},
		size: {
			from: 16,
			to: 17,
		},
		volume: 0.3,
		weight: 48,
		specification: true,
		price: 90,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Ratų komplektas',
			value: 'setOfWheels',
		},
		size: {
			from: 18,
			to: 21,
		},
		volume: 0.12,
		weight: 40,
		specification: false,
		price: 100,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Ratų komplektas',
			value: 'setOfWheels',
		},
		size: {
			from: 18,
			to: 21,
		},
		volume: 0.36,
		weight: 60,
		specification: true,
		price: 110,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Ratų komplektas',
			value: 'setOfWheels',
		},
		size: {
			from: 22,
			to: Infinity,
		},
		volume: 0.14,
		weight: 48,
		specification: false,
		price: 120,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Ratų komplektas',
			value: 'setOfWheels',
		},
		size: {
			from: 22,
			to: Infinity,
		},
		volume: 0.44,
		weight: 72,
		specification: true,
		price: 130,
	},
	// Kita sub kategorija

	// doors
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio durys, pvz: Fiat 500',
			value: 'doors',
		},
		size: {
			label: 'Mikro automobiliai',
			value: 'microCars',
		},
		volume: 0.15,
		weight: 15,
		specification: null,
		price: 45,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio durys, pvz: VW Polo',
			value: 'doors',
		},
		size: {
			label: 'Subkompaktiniai automobiliai',
			value: 'subcompactCars',
		},
		volume: 0.18,
		weight: 18,
		specification: null,
		price: 45,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio durys, pvz: VW Golf',
			value: 'doors',
		},
		size: {
			label: 'Kompaktiniai automobiliai',
			value: 'compactCars',
		},
		volume: 0.2,
		weight: 20,
		specification: null,
		price: 50,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio durys, pvz: VW Passat',
			value: 'doors',
		},
		size: {
			label: 'Vidutinio dydžio automobiliai',
			value: 'midSizeCars',
		},
		volume: 0.25,
		weight: 22,
		specification: null,
		price: 50,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio durys, pvz: MB S Class',
			value: 'doors',
		},
		size: {
			label: 'Dideli automobiliai',
			value: 'bigCars',
		},
		volume: 0.3,
		weight: 25,
		specification: null,
		price: 55,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio durys, pvz: BMW X5',
			value: 'doors',
		},
		size: {
			label: 'Visureigiai',
			value: 'suvs',
		},
		volume: 0.35,
		weight: 30,
		specification: null,
		price: 55,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio durys, pvz: Ford Ranger',
			value: 'doors',
		},
		size: {
			label: 'Pikapai',
			value: 'pickupTrucks',
		},
		volume: 0.4,
		weight: 35,
		specification: null,
		price: 60,
	},
	{
		category: {
			label: 'Automobilinės prekės,',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio durys, pvz: VW Caravelle',
			value: 'doors',
		},
		size: {
			label: 'Mikroautobusai',
			value: 'minibuses',
		},
		volume: 0.45,
		weight: 40,
		specification: null,
		price: 85,
	},
	// interior
	// allways need to call manager
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio salonas',
			value: 'interior',
		},
		size: {
			label: 'Mikro automobiliai',
			value: 'microCars',
		},
		callManager: true,
		volume: 0,
		weight: 0,
		specification: null,
		price: 0,
	},
	
	// carQuarter
	// allways need to call manager
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio ketvirtis',
			value: 'carQuarter',
		},
		size: {
			label: 'Mikro automobiliai',
			value: 'microCars',
		},
		callManager: true,
		volume: 0,
		weight: 0,
		specification: null,
		price: 120,
	},
	
	// bumper
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio buferis, pvz: Fiat 500',
			value: 'bumper',
		},
		size: {
			label: 'Mikro automobiliai',
			value: 'microCars',
		},
		volume: 0.12,
		weight: 8,
		specification: null,
		price: 60,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio buferis, pvz: VW Polo',
			value: 'bumper',
		},
		size: {
			label: 'Subkompaktiniai automobiliai',
			value: 'subcompactCars',
		},
		volume: 0.15,
		weight: 10,
		specification: null,
		price: 60,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio buferis, pvz: VW Golf',
			value: 'bumper',
		},
		size: {
			label: 'Kompaktiniai automobiliai',
			value: 'compactCars',
		},
		volume: 0.18,
		weight: 12,
		specification: null,
		price: 70,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio buferis, pvz: VW Passat',
			value: 'bumper',
		},
		size: {
			label: 'Vidutinio dydžio automobiliai',
			value: 'midSizeCars',
		},
		volume: 0.22,
		weight: 15,
		specification: null,
		price: 75,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio buferis, pvz: MB S Class',
			value: 'bumper',
		},
		size: {
			label: 'Dideli automobiliai',
			value: 'bigCars',
		},
		volume: 0.25,
		weight: 18,
		specification: null,
		price: 80,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio buferis, pvz: BMW X5',
			value: 'bumper',
		},
		size: {
			label: 'Visureigiai',
			value: 'suvs',
		},
		volume: 0.28,
		weight: 20,
		specification: null,
		price: 85,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio buferis, pvz: Ford Ranger',
			value: 'bumper',
		},
		size: {
			label: 'Pikapai',
			value: 'pickupTrucks',
		},
		volume: 0.3,
		weight: 22,
		specification: null,
		price: 85,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio buferis, pvz: VW Caravelle',
			value: 'bumper',
		},
		size: {
			label: 'Mikroautobusai',
			value: 'minibuses',
		},
		volume: 0.35,
		weight: 25,
		specification: null,
		price: 85,
	},
	// cover
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio priekinis/galinis dangtis, pvz:Fiat 500',
			value: 'cover',
		},
		size: {
			label: 'Mikro automobiliai',
			value: 'microCars',
		},
		volume: 0.12,
		weight: 10,
		specification: null,
		price: 55,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio priekinis/galinis dangtis, pvz: VW Polo',
			value: 'cover',
		},
		size: {
			label: 'Subkompaktiniai automobiliai',
			value: 'subcompactCars',
		},
		volume: 0.15,
		weight: 12,
		specification: null,
		price: 55,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio priekinis/galinis dangtis, pvz: VW Golf',
			value: 'cover',
		},
		size: {
			label: 'Kompaktiniai automobiliai',
			value: 'compactCars',
		},
		volume: 0.18,
		weight: 15,
		specification: null,
		price: 60,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio priekinis/galinis dangtis, pvz: VW Passat',
			value: 'cover',
		},
		size: {
			label: 'Vidutinio dydžio automobiliai',
			value: 'midSizeCars',
		},
		volume: 0.22,
		weight: 18,
		specification: null,
		price: 65,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio priekinis/galinis dangtis, pvz: MB S Class',
			value: 'cover',
		},
		size: {
			label: 'Dideli automobiliai',
			value: 'bigCars',
		},
		volume: 0.25,
		weight: 20,
		specification: null,
		price: 80,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio priekinis/galinis dangtis, pvz: BMW X5',
			value: 'cover',
		},
		size: {
			label: 'Visureigiai',
			value: 'suvs',
		},
		volume: 0.28,
		weight: 22,
		specification: null,
		price: 80,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio priekinis/galinis dangtis, pvz: Ford Ranger',
			value: 'cover',
		},
		size: {
			label: 'Pikapai',
			value: 'pickupTrucks',
		},
		volume: 0.3,
		weight: 25,
		specification: null,
		price: 80,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio priekinis/galinis dangtis, pvz: VW Caravelle',
			value: 'cover',
		},
		size: {
			label: 'Mikroautobusai',
			value: 'minibuses',
		},
		volume: 0.35,
		weight: 28,
		specification: null,
		price: 85,
	},
	// engine
	// engine full = true 
	// engine empty = false 
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 0,
			to: 999,
		},
		volume: 0.14,
		weight: 75,
		specification: false,
		price: 80,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 0,
			to: 999,
		},
		volume: 0.14,
		weight: 85,
		specification: true,
		price: 120,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 1000,
			to: 1499,
		},
		volume: 0.18,
		weight: 100,
		specification: false,
		price: 100,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 1000,
			to: 1499,
		},
		volume: 0.18,
		weight: 115,
		specification: true,
		price: 170,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 1500,
			to: 1999,
		},
		volume: 0.23,
		weight: 125,
		specification: false,
		price: 120,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 1500,
			to: 1999,
		},
		volume: 0.23,
		weight: 145,
		specification: true,
		price: 200,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 2000,
			to: 2499,
		},
		volume: 0.29,
		weight: 155,
		specification: false,
		price: 150,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 2000,
			to: 2499,
		},
		volume: 0.29,
		weight: 180,
		specification: true,
		price: 250,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 2500,
			to: 2999,
		},
		volume: 0.36,
		weight: 190,
		specification: false,
		price: 180,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 2500,
			to: 2999,
		},
		volume: 0.36,
		weight: 220,
		specification: true,
		price: 300,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 3000,
			to: 3499,
		},
		volume: 0.45,
		weight: 215,
		specification: false,
		price: 200,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 3000,
			to: 3499,
		},
		volume: 0.45,
		weight: 250,
		specification: true,
		price: 350,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 3500,
			to: 3999,
		},
		volume: 0.54,
		weight: 250,
		specification: false,
		price: 230,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 3500,
			to: 3999,
		},
		volume: 0.54,
		weight: 290,
		specification: true,
		price: 370,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 4000,
			to: Infinity,
		},
		volume: 0.63,
		weight: 300,
		specification: false,
		price: 250,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio variklis',
			value: 'engine',
		},
		size: {
			from: 4000,
			to: Infinity,
		},
		volume: 0.63,
		weight: 340,
		specification: true,
		price: 400,
	},

	// transmision
	// specification: true => Mechanine
	// specification: false => Automatine
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 0,
			to: 999,
		},
		volume: 0.3,
		weight: 30,
		specification: false,
		price: 50,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 0,
			to: 999,
		},
		volume: 0.025,
		weight: 25,
		specification: true,
		price: 45,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 1000,
			to: 1499,
		},
		volume: 0.035,
		weight: 40,
		specification: false,
		price: 65,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 1000,
			to: 1499,
		},
		volume: 0.03,
		weight: 35,
		specification: true,
		price: 50,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 1500,
			to: 1999,
		},
		volume: 0.4,
		weight: 50,
		specification: false,
		price: 75,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 1500,
			to: 1999,
		},
		volume: 0.035,
		weight: 45,
		specification: true,
		price: 60,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 2000,
			to: 2499,
		},
		volume: 0.045,
		weight: 60,
		specification: false,
		price: 85,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 2000,
			to: 2499,
		},
		volume: 0.4,
		weight: 55,
		specification: true,
		price: 75,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 2500,
			to: 2999,
		},
		volume: 0.05,
		weight: 70,
		specification: false,
		price: 120,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 2500,
			to: 2999,
		},
		volume: 0.045,
		weight: 65,
		specification: true,
		price: 85,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 3000,
			to: 3499,
		},
		volume: 0.055,
		weight: 80,
		specification: false,
		price: 120,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 3000,
			to: 3499,
		},
		volume: 0.05,
		weight: 75,
		specification: true,
		price: 120,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 3500,
			to: 3999,
		},
		volume: 0.06,
		weight: 90,
		specification: false,
		price: 120,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 3500,
			to: 3999,
		},
		volume: 0.055,
		weight: 85,
		specification: true,
		price: 120,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 4000,
			to: Infinity,
		},
		volume: 0.07,
		weight: 100,
		specification: false,
		price: 120,
	},
	{
		category: {
			label: 'Automobilinės prekės',
			value: 'automotiveGoods',
		},
		productType: {
			label: 'Automobilio pavarų dėžė',
			value: 'gearbox',
		},
		size: {
			from: 4000,
			to: Infinity,
		},
		volume: 0.06,
		weight: 95,
		specification: true,
		price: 120,
	},
];

export const bicyclesAndScootersCategoryProducts: CommonProductTypeExample[] = [
	// childBicycleAndTricycle
	{
		category: {
			label: 'Dviračiai, paspirtukai',
			value: 'bicyclesAndScooters',
		},
		productType: {
			label: 'Vaikiškas dviratis, triratis (<12 metų)',
			value: 'childBicycleAndTricycle',
		},
		size: {
			label: 'Pilnai surinktas',
			value: 'fullyAssembled',
		},
		volume: 0.35,
		weight: 7,
		specification: null,
		price: 40,
	},
	{
		category: {
			label: 'Dviračiai, paspirtukai',
			value: 'bicyclesAndScooters',
		},
		productType: {
			label: 'Vaikiškas dviratis, triratis (<12 metų)',
			value: 'childBicycleAndTricycle',
		},
		size: {
			label: 'Išardytas (nuimti ratai ir pedalai)',
			value: 'dismantled',
		},
		volume: 0.25,
		weight: 7,
		specification: null,
		price: 35,
	},
	// teenagersBike
	{
		category: {
			label: 'Dviračiai, paspirtukai',
			value: 'bicyclesAndScooters',
		},
		productType: {
			label: 'Paauglio dviratis (>12 metų)',
			value: 'teenagersBike',
		},
		size: {
			label: 'Pilnai surinktas',
			value: 'fullyAssembled',
		},
		volume: 0.45,
		weight: 12,
		specification: null,
		price: 45,
	},
	{
		category: {
			label: 'Dviračiai, paspirtukai',
			value: 'bicyclesAndScooters',
		},
		productType: {
			label: 'Paauglio dviratis (>12 metų)',
			value: 'teenagersBike',
		},
		size: {
			label: 'Išardytas (nuimti ratai ir pedalai)',
			value: 'dismantled',
		},
		volume: 0.3,
		weight: 12,
		specification: null,
		price: 40,
	},
	// adultBike
	{
		category: {
			label: 'Dviračiai, paspirtukai',
			value: 'bicyclesAndScooters',
		},
		productType: {
			label: 'Suaugusiojo dviratis',
			value: 'adultBike',
		},
		size: {
			label: 'Pilnai surinktas',
			value: 'fullyAssembled',
		},
		volume: 0.55,
		weight: 14,
		specification: null,
		price: 65,
	},
	{
		category: {
			label: 'Dviračiai, paspirtukai',
			value: 'bicyclesAndScooters',
		},
		productType: {
			label: 'Suaugusiojo dviratis',
			value: 'adultBike',
		},
		size: {
			label: 'Išardytas (nuimti ratai ir pedalai)',
			value: 'dismantled',
		},
		volume: 0.4,
		weight: 14,
		specification: null,
		price: 50,
	},
	// electricBike
	{
		category: {
			label: 'Dviračiai, paspirtukai',
			value: 'bicyclesAndScooters',
		},
		productType: { 
			label: 'Elektrinis dviratis', 
			value: 'electricBike' 
		},
		size: {
			label: 'Pilnai surinktas',
			value: 'fullyAssembled',
		},
		volume: 0.65,
		weight: 25,
		specification: null,
		price: 75,
	},
	{
		category: {
			label: 'Dviračiai, paspirtukai',
			value: 'bicyclesAndScooters',
		},
		productType: { 
			label: 'Elektrinis dviratis', 
			value: 'electricBike' },
		size: {
			label: 'Išardytas (nuimti ratai ir pedalai)',
			value: 'dismantled',
		},
		volume: 0.55,
		weight: 25,
		specification: null,
		price: 65,
	},
	// childBicycleTrailer
	{
		category: {
			label: 'Dviračiai, paspirtukai',
			value: 'bicyclesAndScooters',
		},
		productType: {
			label: 'Vaikiška dviračio priekaba',
			value: 'childBicycleTrailer',
		},
		size: {
			label: 'Pilnai surinktas',
			value: 'fullyAssembled',
		},
		volume: 0.4,
		weight: 10,
		specification: null,
		price: 75,
	},
	{
		category: {
			label: 'Dviračiai, paspirtukai',
			value: 'bicyclesAndScooters',
		},
		productType: {
			label: 'Vaikiška dviračio priekaba',
			value: 'childBicycleTrailer',
		},
		size: {
			label: 'Išardytas',
			value: 'dismantled',
		},
		volume: 0.25,
		weight: 8,
		specification: null,
		price: 60,
	},
	// electricScooter
	{
		category: {
			label: 'Dviračiai, paspirtukai',
			value: 'bicyclesAndScooters',
		},
		productType: {
			label: 'Elektrinis paspirtukas',
			value: 'electricScooter',
		},
		size: {
			from: 0,
			to: 24,
		},
		volume: 0.15,
		weight: 12,
		specification: null,
		price: 45,
	},
	{
		category: {
			label: 'Dviračiai, paspirtukai',
			value: 'bicyclesAndScooters',
		},
		productType: {
			label: 'Elektrinis paspirtukas',
			value: 'electricScooter',
		},
		size: {
			from: 25,
			to: 500,
		},
		volume: 0.18,
		weight: 15,
		specification: null,
		price: 60,
	},
];

export const goodsForChildrenCategoryProducts: CommonProductTypeExample[] = [
	// childSeat


	{
		category: {
			label: 'Prekės vaikams',
			value: 'goodsForChildren',
		},
		productType: {
			label: 'Automobilinė kėdutė',
			value: 'childSeat',
		},
		size: {
			label: 'Be pado, nepasukama',
			value: 'withoutSole',
		},
		volume: 0.1,
		weight: 7,
		specification: null,
		price: 40,
	},
	{
		category: {
			label: 'Prekės vaikams',
			value: 'goodsForChildren',
		},
		productType: {
			label: 'Automobilinė kėdutė',
			value: 'childSeat',
		},
		size: {
			label: 'Pasukama ir/arba su padu',
			value: 'withSole',
		},
		volume: 0.15,
		weight: 10,
		specification: null,
		price: 45,
	},

	// strollers

	{
		category: {
			label: 'Prekės vaikams',
			value: 'goodsForChildren',
		},
		productType: {
			label: 'Vežimėliai',
			value: 'strollers',
		},
		size: {
			label: 'Skėtukas (kelioninis)',
			value: 'umbrella',
		},
		volume: 0.8,
		weight: 5,
		specification: null,
		price: 45,
	},
	{
		category: {
			label: 'Prekės vaikams',
			value: 'goodsForChildren',
		},
		productType: {
			label: 'Vežimėliai',
			value: 'strollers',
		},
		size: {
			label: 'Sportinis',
			value: 'sport',
		},
		volume: 0.2,
		weight: 12,
		specification: null,
		price: 50,
	},
	{
		category: {
			label: 'Prekės vaikams',
			value: 'goodsForChildren',
		},
		productType: {
			label: 'Vežimėliai',
			value: 'strollers',
		},
		size: {
			label: 'Lopšio vežimėlis',
			value: 'cradleStroller',
		},
		volume: 0.25,
		weight: 14,
		specification: null,
		price: 65,
	},
	{
		category: {
			label: 'Prekės vaikams',
			value: 'goodsForChildren',
		},
		productType: {
			label: 'Vežimėliai',
			value: 'strollers',
		},
		size: {
			label: 'Dvyniams',
			value: 'forTwins',
		},
		volume: 0.35,
		weight: 20,
		specification: null,
		price: 75,
	},
	{
		category: {
			label: 'Prekės vaikams',
			value: 'goodsForChildren',
		},
		productType: {
			label: 'Vežimėliai',
			value: 'strollers',
		},
		size: {
			label: '2 in 1',
			value: '2in1',
		},
		volume: 0.3,
		weight: 15,
		specification: null,
		price: 75,
	},
	{
		category: {
			label: 'Prekės vaikams',
			value: 'goodsForChildren',
		},
		productType: {
			label: 'Vežimėliai',
			value: 'strollers',
		},
		size: {
			label: '3 in 1',
			value: '3in1',
		},
		volume: 0.4,
		weight: 18,
		specification: null,
		price: 85,
	},
	// childBicycleTrailer
	{
		category: {
			label: 'Dviračiai, paspirtukai',
			value: 'bicyclesAndScooters',
		},
		productType: {
			label: 'Vaikiška dviračio priekaba',
			value: 'childBicycleTrailer',
		},
		size: {
			label: 'Pilnai surinktas',
			value: 'fullyAssembled',
		},
		volume: 0.4,
		weight: 10,
		specification: null,
		price: 75,
	},
	{
		category: {
			label: 'Dviračiai, paspirtukai',
			value: 'bicyclesAndScooters',
		},
		productType: {
			label: 'Vaikiška dviračio priekaba',
			value: 'childBicycleTrailer',
		},
		size: {
			label: 'Išardytas',
			value: 'dismantled',
		},
		volume: 0.25,
		weight: 8,
		specification: null,
		price: 60,
	},
];

export const motorcyclesAndAccessoriesCategoryProducts: CommonProductTypeExample[] =
	[
		// scooterMoped
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Motoroleris, mopedas',
				value: 'scooterMoped',
			},
			size: {
				from: 0,
				to: 49,
			},
			volume: 0.4,
			weight: 45,
			specification: null,
			price: 120,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Motoroleris, mopedas',
				value: 'scooterMoped',
			},
			size: {
				from: 50,
				to: 124,
			},
			volume: 0.5,
			weight: 90,
			specification: null,
			price: 160,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Motoroleris, mopedas',
				value: 'scooterMoped',
			},
			size: {
				from: 125,
				to: 249,
			},
			volume: 0.6,
			weight: 130,
			specification: null,
			price: 200,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Motoroleris, mopedas',
				value: 'scooterMoped',
			},
			size: {
				from: 250,
				to: Infinity,
			},
			volume: 0.7,
			weight: 170,
			specification: null,
			price: 270,
		},
		// Standartinis motociklas standardMotorcycle
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Standartinis motociklas',
				value: 'standardMotorcycle',
			},
			size: {
				from: 0,
				to: 499,
			},
			volume: 0.55,
			weight: 170,
			specification: null,
			price: 250,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Standartinis motociklas',
				value: 'standardMotorcycle',
			},
			size: {
				from: 500,
				to: 749,
			},
			volume: 0.65,
			weight: 190,
			specification: null,
			price: 270,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Standartinis motociklas',
				value: 'standardMotorcycle',
			},
			size: {
				from: 750,
				to: 999,
			},
			volume: 0.75,
			weight: 210,
			specification: null,
			price: 300,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Standartinis motociklas',
				value: 'standardMotorcycle',
			},
			size: {
				from: 1000,
				to: Infinity,
			},
			volume: 0.9,
			weight: 230,
			specification: null,
			price: 330,
		},
		// Krosinis motociklas motocrossMotorcycle
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Krosinis motociklas',
				value: 'motocrossMotorcycle',
			},
			size: {
				from: 0,
				to: 124,
			},
			volume: 0.5,
			weight: 75,
			specification: null,
			price: 150,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Krosinis motociklas',
				value: 'motocrossMotorcycle',
			},
			size: {
				from: 125,
				to: 249,
			},
			volume: 0.55,
			weight: 105,
			specification: null,
			price: 180,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Krosinis motociklas',
				value: 'motocrossMotorcycle',
			},
			size: {
				from: 250,
				to: 449,
			},
			volume: 0.6,
			weight: 115,
			specification: null,
			price: 230,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Krosinis motociklas',
				value: 'motocrossMotorcycle',
			},
			size: {
				from: 450,
				to: Infinity,
			},
			volume: 0.6,
			weight: 115,
			specification: null,
			price: 260,
		},
		// Kelioninis motociklas touringMotorcycle
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Kelioninis motociklas',
				value: 'touringMotorcycle',
			},
			size: {
				from: 0,
				to: 799,
			},
			volume: 0.8,
			weight: 230,
			specification: null,
			price: 300,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Kelioninis motociklas',
				value: 'touringMotorcycle',
			},
			size: {
				from: 800,
				to: 1199,
			},
			volume: 0.95,
			weight: 260,
			specification: null,
			price: 350,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Kelioninis motociklas',
				value: 'touringMotorcycle',
			},
			size: {
				from: 1200,
				to: 1599,
			},
			volume: 1.1,
			weight: 320,
			specification: null,
			price: 400,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Kelioninis motociklas',
				value: 'touringMotorcycle',
			},
			size: {
				from: 1600,
				to: Infinity,
			},
			volume: 1.25,
			weight: 400,
			specification: null,
			price: 430,
		},
		// Sportinis motociklas sportsMotorcycle
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Sportinis motociklas',
				value: 'sportsMotorcycle',
			},
			size: {
				from: 0,
				to: 599,
			},
			volume: 0.45,
			weight: 160,
			specification: null,
			price: 230,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Sportinis motociklas',
				value: 'sportsMotorcycle',
			},
			size: {
				from: 600,
				to: 999,
			},
			volume: 0.55,
			weight: 195,
			specification: null,
			price: 260,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Sportinis motociklas',
				value: 'sportsMotorcycle',
			},
			size: {
				from: 1000,
				to: Infinity,
			},
			volume: 0.65,
			weight: 210,
			specification: null,
			price: 280,
		},
		// Čioperis chopper
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Čioperis',
				value: 'chopper',
			},
			size: {
				from: 0,
				to: 799,
			},
			volume: 0.65,
			weight: 220,
			specification: null,
			price: 300,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Čioperis',
				value: 'chopper',
			},
			size: {
				from: 800,
				to: 1199,
			},
			volume: 0.75,
			weight: 250,
			specification: null,
			price: 350,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Čioperis',
				value: 'chopper',
			},
			size: {
				from: 1200,
				to: Infinity,
			},
			volume: 0.8,
			weight: 320,
			specification: null,
			price: 400,
		},
		// Enduro enduro
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Enduro',
				value: 'enduro',
			},
			size: {
				from: 0,
				to: 249,
			},
			volume: 0.5,
			weight: 135,
			specification: null,
			price: 200,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Enduro',
				value: 'enduro',
			},
			size: {
				from: 250,
				to: 649,
			},
			volume: 0.6,
			weight: 170,
			specification: null,
			price: 230,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Enduro',
				value: 'enduro',
			},
			size: {
				from: 650,
				to: 1199,
			},
			volume: 0.75,
			weight: 230,
			specification: null,
			price: 250,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Enduro',
				value: 'enduro',
			},
			size: {
				from: 1200,
				to: Infinity,
			},
			volume: 0.9,
			weight: 250,
			specification: null,
			price: 280,
		},
		// quadBike Keturratis
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Keturratis',
				value: 'quadBike',
			},
			size: {
				from: 0,
				to: 399,
			},
			volume: 0.8,
			weight: 220,
			specification: null,
			price: 330,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Keturratis',
				value: 'quadBike',
			},
			size: {
				from: 400,
				to: 799,
			},
			volume: 1,
			weight: 280,
			specification: null,
			price: 360,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Keturratis',
				value: 'quadBike',
			},
			size: {
				from: 800,
				to: 1199,
			},
			volume: 1.25,
			weight: 340,
			specification: null,
			price: 400,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Keturratis',
				value: 'quadBike',
			},
			size: {
				from: 1200,
				to: Infinity,
			},
			volume: 1.5,
			weight: 400,
			specification: null,
			price: 400,
		},
		// Motociklo variklis motorcycleEngine
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Motociklo variklis',
				value: 'motorcycleEngine',
			},
			size: {
				from: 0,
				to: 44,
			},
			volume: 0.01,
			weight: 15,
			specification: null,
			price: 45,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Motociklo variklis',
				value: 'motorcycleEngine',
			},
			size: {
				from: 45,
				to: 249,
			},
			volume: 0.02,
			weight: 25,
			specification: null,
			price: 55,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Motociklo variklis',
				value: 'motorcycleEngine',
			},
			size: {
				from: 250,
				to: 449,
			},
			volume: 0.03,
			weight: 35,
			specification: null,
			price: 65,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Motociklo variklis',
				value: 'motorcycleEngine',
			},
			size: {
				from: 450,
				to: 599,
			},
			volume: 0.04,
			weight: 50,
			specification: null,
			price: 80,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Motociklo variklis',
				value: 'motorcycleEngine',
			},
			size: {
				from: 600,
				to: 999,
			},
			volume: 0.06,
			weight: 70,
			specification: null,
			price: 90,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Motociklo variklis',
				value: 'motorcycleEngine',
			},
			size: {
				from: 1000,
				to: 1199,
			},
			volume: 0.07,
			weight: 90,
			specification: null,
			price: 110,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Motociklo variklis',
				value: 'motorcycleEngine',
			},
			size: {
				from: 1200,
				to: 1599,
			},
			volume: 0.09,
			weight: 110,
			specification: null,
			price: 150,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Motociklo variklis',
				value: 'motorcycleEngine',
			},
			size: {
				from: 1600,
				to: Infinity,
			},
			volume: 0.11,
			weight: 130,
			specification: null,
			price: 190,
		},
	
		// goodsForMotorcycles Prekės motociklams
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Prekės motociklams',
				value: 'goodsForMotorcycles',
			},
			size: {
				label: 'Motociklo krepšys (Dėžė)',
				value: 'motorcycleBag',
			},
			volume: 0.01,
			weight: 5,
			specification: null,
			price: 35,
		},
		{
			category: {
				label: 'Motociklai ir priedai',
				value: 'motorcyclesAndAccessories',
			},
			productType: {
				label: 'Prekės motociklams',
				value: 'goodsForMotorcycles',
			},
			size: {
				label: 'Duslintuvas',
				value: 'muffler',
			},
			volume: 0.01,
			weight: 5,
			specification: null,
			price: 40,
		},
	];

export const flatScreenTvCategoryProducts: CommonProductTypeExample[] = [
	{
		category: {
			label: 'Plokščiaekraniai TV',
			value: 'flatScreenTv',
		},
		productType: null,
		size: {
			from: 0,
			to: 23,
		},
		volume: 0.04,
		weight: 4,
		specification: null,
		price: 45,
	},
	{
		category: {
			label: 'Plokščiaekraniai TV',
			value: 'flatScreenTv',
		},
		productType: null,
		size: {
			from: 24,
			to: 31,
		},
		volume: 0.06,
		weight: 5,
		specification: null,
		price: 45,
	},
	{
		category: {
			label: 'Plokščiaekraniai TV',
			value: 'flatScreenTv',
		},
		productType: null,
		size: {
			from: 32,
			to: 39,
		},
		volume: 0.08,
		weight: 8,
		specification: null,
		price: 50,
	},
	{
		category: {
			label: 'Plokščiaekraniai TV',
			value: 'flatScreenTv',
		},
		productType: null,
		size: {
			from: 41,
			to: 42,
		},
		volume: 0.1,
		weight: 9,
		specification: null,
		price: 55,
	},
	{
		category: {
			label: 'Plokščiaekraniai TV',
			value: 'flatScreenTv',
		},
		productType: null,
		size: {
			from: 43,
			to: 49,
		},
		volume: 0.12,
		weight: 12,
		specification: null,
		price: 60,
	},
	{
		category: {
			label: 'Plokščiaekraniai TV',
			value: 'flatScreenTv',
		},
		productType: null,
		size: {
			from: 50,
			to: 54,
		},
		volume: 0.15,
		weight: 14,
		specification: null,
		price: 65,
	},
	{
		category: {
			label: 'Plokščiaekraniai TV',
			value: 'flatScreenTv',
		},
		productType: null,
		size: {
			from: 55,
			to: 64,
		},
		volume: 0.2,
		weight: 18,
		specification: null,
		price: 75,
	},
	{
		category: {
			label: 'Plokščiaekraniai TV',
			value: 'flatScreenTv',
		},
		productType: null,
		size: {
			from: 65,
			to: 69,
		},
		volume: 0.25,
		weight: 22,
		specification: null,
		price: 80,
	},
	{
		category: {
			label: 'Plokščiaekraniai TV',
			value: 'flatScreenTv',
		},
		productType: null,
		size: {
			from: 70,
			to: 74,
		},
		volume: 0.3,
		weight: 25,
		specification: null,
		price: 85,
	},
	{
		category: {
			label: 'Plokščiaekraniai TV',
			value: 'flatScreenTv',
		},
		productType: null,
		size: {
			from: 75,
			to: 84,
		},
		volume: 0.35,
		weight: 30,
		specification: null,
		price: 95,
	},
	{
		category: {
			label: 'Plokščiaekraniai TV',
			value: 'flatScreenTv',
		},
		productType: null,
		size: {
			from: 85,
			to: Infinity,
		},
		volume: 0.4,
		weight: 35,
		specification: null,
		price: 105,
	},
];

export const householdAppliancesCategoryProducts: CommonProductTypeExample[] = [
	// TODO Think how we will calculate price for these
	{
		category: {
			label: 'Buitinė technika',
			value: 'householdAppliances',
		},
		productType: {
			label: 'Šaldytuvas',
			value: 'fridge',
		},
		volume: 1,
		weight: 0,
		size: null,
		specification: null,
		// skaiciuojama pagal kubus 1 kubinis metras 200 eu  aukshtis*plotis*gylis 
		price: 200,
	},
	{
		category: {
			label: 'Buitinė technika',
			value: 'householdAppliances',
		},
		productType: {
			label: 'Šaldiklis',
			value: 'freezer',
		},
		volume: 1,
		weight: 0,
		size: null,
		specification: null,
		// skaiciuojama pagal kubus 1 kubinis metras 200 eu  aukshtis*plotis*gylis 
		price: 200,
	},
	// Skalbimo mašina washingMachine
	{
		category: {
			label: 'Buitinė technika',
			value: 'householdAppliances',
		},
		productType: {
			label: 'Skalbimo mašina',
			value: 'washingMachine',
		},
		size: {
			label: 'Maža skalbimo mašina',
			value: 'Talpa 3-5 kg',
		},
		volume: 0.15,
		weight: 40,
		specification: null,
		price: 50,
	},
	{
		category: {
			label: 'Buitinė technika',
			value: 'householdAppliances',
		},
		productType: {
			label: 'Skalbimo mašina',
			value: 'washingMachine',
		},
		size: {
			label: 'Vidutinė skalbimo mašina',
			value: 'Talpa 6-7 kg',
		},
		volume: 0.2,
		weight: 60,
		specification: null,
		price: 60,
	},
	{
		category: {
			label: 'Buitinė technika',
			value: 'householdAppliances',
		},
		productType: {
			label: 'Skalbimo mašina',
			value: 'washingMachine',
		},
		size: {
			label: 'Didelė skalbimo mašina',
			value: 'Talpa 8-9 kg',
		},
		volume: 0.25,
		weight: 70,
		specification: null,
		price: 70,
	},
	{
		category: {
			label: 'Buitinė technika',
			value: 'householdAppliances',
		},
		productType: {
			label: 'Skalbimo mašina',
			value: 'washingMachine',
		},
		size: {
			label: 'Pramoninė skalbimo mašina',
			value: 'Talpa 10+ kg',
		},
		volume: 0.3,
		weight: 80,
		specification: null,
		price: 80,
	},
	{
		category: {
			label: 'Buitinė technika',
			value: 'householdAppliances',
		},
		productType: {
			label: 'Butinė indaplovė',
			value: 'dishwasher',
		},
		volume: 0.35,
		weight: 40,
		size: null,
		specification: null,
		price: 50,
	},
	{
		category: {
			label: 'Buitinė technika',
			value: 'householdAppliances',
		},
		productType: {
			label: 'Pramoninė indaplovė',
			value: 'dishwasher',
		},
		volume: 0.35,
		weight: 40,
		size: null,
		specification: null,
		price: 60,
	},
	{
		category: {
			label: 'Buitinė technika',
			value: 'householdAppliances',
		},
		productType: {
			label: 'Buitinė džiovyklė',
			value: 'dryer',
		},
		volume: 0.35,
		weight: 40,
		size: null,
		specification: null,
		price: 50,
	},
	{
		category: {
			label: 'Buitinė technika',
			value: 'householdAppliances',
		},
		productType: {
			label: 'Pramoninė džiovyklė',
			value: 'dryer',
		},
		volume: 0.4,
		weight: 40,
		size: null,
		specification: null,
		price: 70,
	},
	{
		category: {
			label: 'Buitinė technika',
			value: 'householdAppliances',
		},
		productType: {
			label: 'Kaitlentė',
			value: 'hob',
		},
		volume: 0.1,
		weight: 15,
		size: null,
		specification: null,
		price: 45,
	},
	// Viryklė stove
	{
		category: {
			label: 'Buitinė technika',
			value: 'householdAppliances',
		},
		productType: {
			label: 'Viryklė',
			value: 'stove',
		},
		size: {
			label: 'Imontuojama',
			value: 'built-in',
		},
		volume: 0.2,
		weight: 50,
		specification: null,
		price: 60,
	},
	{
		category: {
			label: 'Buitinė technika',
			value: 'householdAppliances',
		},
		productType: {
			label: 'Viryklė',
			value: 'stove',
		},
		size: {
			label: 'Pastatoma', // TODO translate it
			value: 'built-in',
		},
		volume: 0.6,
		weight: 60,
		specification: null,
		price: 70,
	},
	{
		category: {
			label: 'Buitinė technika',
			value: 'householdAppliances',
		},
		productType: {
			label: 'Viryklė',
			value: 'stove',
		},
		size: {
			label: '5-6 Degiklių',
			value: 'withBurners',
		},
		volume: 0.7,
		weight: 80,
		specification: null,
		price: 90,
	},
];

// specification: false,true   false=be surinkimo krepshio  , true= su surinkimo krepsiu

export const gardenEquipmentCategoryProducts: CommonProductTypeExample[] = [
	{
		category: {
			label: 'Sodo technika',
			value: 'gardenEquipment',
		},
		productType: {
			label: 'Mažas sodo traktorius (Be surinkimo krepšio)',
			value: 'smallGardenTractor',
		},
		size: {
			from: 0,
			to: 79,
		},
		volume: 0.7,
		weight: 150,
		specification: false,
		price: 200,
	},
	{
		category: {
			label: 'Sodo technika',
			value: 'gardenEquipment',
		},
		productType: {
			label: 'Vidutinis sodo traktorius (Be surinkimo krepšio)',
			value: 'averageGardenTractor',
		},
		size: {
			from: 80,
			to: 119,
		},
		volume: 1.2,
		weight: 200,
		specification: false,
		price: 230,
	},
	{
		category: {
			label: 'Sodo technika',
			value: 'gardenEquipment',
		},
		productType: {
			label: 'Didelis sodo traktorius (Be surinkimo krepšio)',
			value: 'bigGardenTractor',
		},
		size: {
			from: 120,
			to: Infinity,
		},
		volume: 1.6,
		weight: 250,
		specification: false,
		price: 280,
	},
	{
		category: {
			label: 'Sodo technika',
			value: 'gardenEquipment',
		},
		productType: {
			label: 'Mažas sodo traktorius (Su surinkimo krepšiu)',
			value: 'smallGardenTractor',
		},
		size: {
			from: 0,
			to: 79,
		},
		volume: 0.85,
		weight: 160,
		specification: true,
		price: 240,
	},
	{
		category: {
			label: 'Sodo technika',
			value: 'gardenEquipment',
		},
		productType: {
			label: 'Vidutinis sodo traktorius (Su surinkimo krepšiu)',
			value: 'averageGardenTractor',
		},
		size: {
			from: 80,
			to: 119,
		},
		volume: 1.25,
		weight: 210,
		specification: true,
		price: 270,
	},
	{
		category: {
			label: 'Sodo technika',
			value: 'gardenEquipment',
		},
		productType: {
			label: 'Didelis sodo traktorius (Su surinkimo krepšiu)',
			value: 'bigGardenTractor',
		},
		size: {
			from: 120,
			to: Infinity,
		},
		volume: 1.7,
		weight: 260,
		specification: true,
		price: 320,
	},
	{
		category: {
			label: 'Sodo technika',
			value: 'gardenEquipment',
		},
		productType: {
			label: 'Stumdoma žoliapjovė (maža)',
			value: 'pushMower',
		},
		volume: 0.25,
		weight: 15,
		size: null,
		specification: null,
		price: 60,
	},
	{
		category: {
			label: 'Sodo technika',
			value: 'gardenEquipment',
		},
		productType: {
			label: 'Stumdoma žoliapjovė (didelė)',
			value: 'pushMower',
		},
		volume: 0.3,
		weight: 25,
		size: null,
		specification: null,
		price: 70,
	},
	{
		category: {
			label: 'Sodo technika',
			value: 'gardenEquipment',
		},
		productType: {
			label: 'Savaeigė žoliapjovė (maža)',
			value: 'selfPropelledMower',
		},
		volume: 0.3,
		weight: 30,
		size: null,
		specification: null,
		price: 70,
	},
	{
		category: {
			label: 'Sodo technika',
			value: 'gardenEquipment',
		},
		productType: {
			label: 'Savaeigė žoliapjovė (didelė)',
			value: 'selfPropelledMower',
		},
		volume: 0.35,
		weight: 40,
		size: null,
		specification: null,
		price: 80,
	},
];

export const shipmentsCategoryProducts: CommonProductTypeExample[] = [
	// Siuntos shipments
	{
		category: {
			label: 'Siuntos',
			value: 'shipments',
		},
		productType: null,
		size: {
			from: 0,
			to: 4,
		},
		specification: null,
		visualInfo: null,
		price: 35,
	},
	{
		category: {
			label: 'Siuntos',
			value: 'shipments',
		},
		productType: null,
		size: {
			from: 5,
			to: 14,
		},
		specification: null,
		visualInfo: null,
		price: 40,
	},
	{
		category: {
			label: 'Siuntos',
			value: 'shipments',
		},
		productType: null,
		size: {
			from: 15,
			to: 29,
		},
		specification: null,
		visualInfo: null,
		price: 45,
	},
	{
		category: {
			label: 'Siuntos',
			value: 'shipments',
		},
		productType: null,
		size: {
			from: 30,
			to: 34,
		},
		specification: null,
		visualInfo: null,
		price: 0, // 1.5 * size(kg)
		surcharge: 10, // %
	},
	{
		category: {
			label: 'Siuntos',
			value: 'shipments',
		},
		productType: null,
		size: {
			from: 35,
			to: 49,
		},
		specification: null,
		visualInfo: null,
		price: 0, // 1.49 * size(kg)
		surcharge: 10, // %
	},
	{
		category: {
			label: 'Siuntos',
			value: 'shipments',
		},
		productType: null,
		size: {
			from: 50,
			to: 99,
		},
		specification: null,
		visualInfo: null,
		price: 0, // 1.46 * size(kg)
		surcharge: 10, // %
	},
	{
		category: {
			label: 'Siuntos',
			value: 'shipments',
		},
		productType: null,
		size: {
			from: 100,
			to: Infinity,
		},
		specification: null,
		visualInfo: null,
		price: 0, // 1.35 * size(kg)
		surcharge: 10, // %
	},
];

export const removalsCategoryProducts: CommonProductTypeExample[] = [
	//Perkraustymai removals
	// Size in m3
	{
		category: {
			label: 'Perkraustymai',
			value: 'removals',
		},
		productType: null,
		size: {
			from: 0,
			to: 0.99,
		},
		specification: null,
		visualInfo: null,
		price: 200,
	},
	{
		category: {
			label: 'Perkraustymai',
			value: 'removals',
		},
		productType: null,
		size: {
			from: 1,
			to: 2.99,
		},
		specification: null,
		visualInfo: null,
		price: 170,
	},
	{
		category: {
			label: 'Perkraustymai',
			value: 'removals',
		},
		productType: null,
		size: {
			from: 3,
			to: 4.99,
		},
		specification: null,
		visualInfo: null,
		price: 150,
	},
	{
		category: {
			label: 'Perkraustymai',
			value: 'removals',
		},
		productType: null,
		size: {
			from: 5,
			to: 9.99,
		},
		specification: null,
		visualInfo: null,
		price: 130,
	},
	{
		category: {
			label: 'Perkraustymai',
			value: 'removals',
		},
		productType: null,
		size: {
			from: 10,
			to: Infinity,
		},
		specification: null,
		visualInfo: null,
		price: 115,
	},
];

export const allProducts: CommonProductTypeExample[] = [
	...automotiveGoodsCategoryProducts,
	...bicyclesAndScootersCategoryProducts,
	...goodsForChildrenCategoryProducts,
	...motorcyclesAndAccessoriesCategoryProducts,
	...flatScreenTvCategoryProducts,
	...householdAppliancesCategoryProducts,
	...gardenEquipmentCategoryProducts,
	...shipmentsCategoryProducts,
	...removalsCategoryProducts,
];

export const categoriesOptions: OptionType[] = getOptions(
	allProducts.map((product) => product.category)
);

export const automotiveGoodsCategoryProductTypesOptions: OptionType[] =
	getOptions(
		automotiveGoodsCategoryProducts
			.map((product) => product.productType)
			.filter((obj) => obj !== null) as OptionType[]
	);

export const bicyclesAndScootersCategoryProductTypesOptions: OptionType[] =
	getOptions(
		bicyclesAndScootersCategoryProducts
			.map((product) => product.productType)
			.filter((obj) => obj !== null) as OptionType[]
	);

export const goodsForChildrenCategoryProductTypesOptions: OptionType[] =
	getOptions(
		goodsForChildrenCategoryProducts
			.map((product) => product.productType)
			.filter((obj) => obj !== null) as OptionType[]
	);

export const motorcyclesAndAccessoriesCategoryProductTypesOptions: OptionType[] =
	getOptions(
		motorcyclesAndAccessoriesCategoryProducts
			.map((product) => product.productType)
			.filter((obj) => obj !== null) as OptionType[]
	);

export const householdAppliancesCategoryProductTypesOptions: OptionType[] =
	getOptions(
		householdAppliancesCategoryProducts
			.map((product) => product.productType)
			.filter((obj) => obj !== null) as OptionType[]
	);

export const gardenEquipmentCategoryProductTypesOptions: OptionType[] =
	getOptions(
		gardenEquipmentCategoryProducts
			.map((product) => product.productType)
			.filter((obj) => obj !== null) as OptionType[]
	);

// Size Units x = number
// Radius Rx
// CM3
// Coliai
// KG
// M3
