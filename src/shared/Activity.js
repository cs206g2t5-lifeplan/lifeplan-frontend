import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';

const Activity = ({ data }) => {
	const [width, setWidth] = useState(0);

	const find_dimensions = (layout) => {
		const { x, y, width, height } = layout;
		setWidth(width);
	};

	return (
		<View
			className="bg-white mt-4 items-center rounded-xl border flex justify-center self-start"
			onLayout={(event) => {
				find_dimensions(event.nativeEvent.layout);
			}}
			style={{ width: 80, height: width, borderColor: '#60435F' }}
		>
			<Image source={data.item.image} />
			<Text className="font-bold text-m mx-3 mt-2" style={{ color: '#60435F' }}>
				{data.item.name}
			</Text>
		</View>
	);
};

export default Activity;
