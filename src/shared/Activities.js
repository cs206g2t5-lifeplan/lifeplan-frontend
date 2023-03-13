import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Activity from './Activity';

const Activities = ({ data }) => {
	const [width, setWidth] = useState(0);

	const find_dimensions = (layout) => {
		const { x, y, width, height } = layout;
		setWidth(width);
	};
	return (
		<View className="w-full bg-white">
			<Text className="font-bold text-2xl mt-4 ml-8">{data.title}</Text>
			<FlatList
				className="w-10/12 self-center"
				numColumns="4"
				data={data.icons}
				renderItem={(item, index) => (
					<Activity data={item} key={index} total={width} color={data.color} />
				)}
				keyExtractor={(item, index) => index}
				onLayout={(event) => {
					find_dimensions(event.nativeEvent.layout);
				}}
			></FlatList>
		</View>
	);
};

export default Activities;
