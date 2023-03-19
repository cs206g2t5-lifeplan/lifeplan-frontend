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
import Custom from '../../assets/custom.png';
import New from '../../assets/new.png';

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
		color: '#60435F',
	},
	{
		title: 'Meals/Foods',
		icons: [
			{ name: 'Water', image: Water },
			{ name: 'Lunch', image: Lunch },
		],
		color: '#749759',
	},
	{
		title: 'Miscellaneous',
		icons: [
			{ name: 'Icon', image: Custom },
			{ name: 'Icon', image: Custom },
			{ name: 'CUSTOM', image: New },
		],
		color: '#A21010',
	},
];
const AddActivityScreen = ({ navigation }) => {
	return (
		<View className="w-screen h-screen bg-white">
			{data.map((item, index) => (
				<Activities data={item} key={index} navigation={navigation} />
			))}
		</View>
	);
};

export default AddActivityScreen;
