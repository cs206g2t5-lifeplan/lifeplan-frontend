import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';

const Activity = ({ data, total, color }) => {
	const [width, setWidth] = useState(0);
	const [right, setRight] = useState(0);

	const find_dimensions = (layout) => {
		const { x, y, width, height } = layout;
		setWidth(width);
		setRight((total - width * 4) / 3);
	};

	if (data.item.name === 'CUSTOM') {
		return (
			<View
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
			</View>
		);
	} else {
		return (
			<View
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
			>
				<Image
					source={data.item.image}
					resizeMethod="scale"
					resizeMode="stretch"
				/>
				<Text className="font-bold text-m mx-3 mt-2" style={{ color: color }}>
					{data.item.name}
				</Text>
			</View>
		);
	}
};

export default Activity;
