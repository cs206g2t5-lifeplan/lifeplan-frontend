import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Pressable } from 'react-native';

const Activity = ({ navigation, data, total, color }) => {
	const [width, setWidth] = useState(0);
	const [right, setRight] = useState(0);
	const [shown, setShown] = useState(false);

	const find_dimensions = (layout) => {
		const { x, y, width, height } = layout;
		setWidth(width);
		setRight((total - width * 4) / 3);
	};

	const navigate = () => navigation.navigate('Add Activity');
	const navigateRight = () =>
		navigation.navigate('Record Activity', {
			heading: `Confirm add ${data.item.name} activity?`,
			btnRight: navigateRight,
			btnLeftTitle: 'Cancel',
			btnRightTitle: 'Confirm',
			btnLeft: navigate,
		});

	if (data.item.name === 'CUSTOM') {
		return (
			<Pressable
				className="bg-white mt-4 items-center rounded-xl border flex justify-center"
				onLayout={(event) => {
					find_dimensions(event.nativeEvent.layout);
				}}
				style={{
					width: 80,
					height: width,
					borderColor: color,
					marginRight: right,
					backgroundColor: color,
				}}
				onPress={() => {}}
			>
				<Image
					source={data.item.image}
					resizeMethod="scale"
					resizeMode="stretch"
				/>
				<Text
					className="font-bold text-m mx-3 mt-2"
					style={{ color: '#fff', fontSize: 12 }}
				>
					{data.item.name}
				</Text>
			</Pressable>
		);
	} else {
		return (
			<Pressable
				className="bg-white mt-4 items-center rounded-xl border flex justify-center"
				onLayout={(event) => {
					find_dimensions(event.nativeEvent.layout);
				}}
				style={{
					width: 80,
					height: width,
					borderColor: color,
					marginRight: right,
				}}
				onPress={() => {
					navigation.navigate('Modal', {
						shown: shown,
						heading: `Confirm add ${data.item.name} activity?`,
						btnRight: navigateRight,
						btnLeftTitle: 'Cancel',
						btnRightTitle: 'Confirm',
						btnLeft: navigate,
					});
				}}
			>
				<Image
					source={data.item.image}
					resizeMethod="scale"
					resizeMode="stretch"
				/>
				<Text className="font-bold text-m mx-3 mt-2" style={{ color: color }}>
					{data.item.name}
				</Text>
			</Pressable>
		);
	}
};

export default Activity;
