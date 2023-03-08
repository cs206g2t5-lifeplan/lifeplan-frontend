import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Toilet from '../../assets/toilet.png';
import Shower from '../../assets/shower.png';
import Teeth from '../../assets/teeth.png';
import Diapers from '../../assets/diapers.png';
import Clothes from '../../assets/clothes.png';
import Activities from '../shared/Activities';
import Water from '../../assets/water.png';
import Lunch from '../../assets/lunch.png';

const data = [
	{
		title: 'Sanitary Needs',
		icons: [
			{ name: 'Toilet', image: Toilet },
			{ name: 'Shower', image: Shower },
			{ name: 'Brush Teeth', image: Teeth },
			{ name: 'Diapers', image: Diapers },
			{ name: 'Clothes', image: Clothes },
		],
	},
	{
		title: 'Meals/Foods',
		icons: [
			{ name: 'Water', image: Water },
			{ name: 'Lunch', image: Lunch },
		],
	},
];
const AddActivityScreen = ({ navigation }) => {
	return (
		<View className="w-screen">
			{data.map((item, index) => (
				<Activities data={item} key={index} />
			))}
		</View>
	);
};

export default AddActivityScreen;
