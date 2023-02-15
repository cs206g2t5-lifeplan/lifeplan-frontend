import React, { useState, useRef } from 'react';
import { View, Text, Pressable, Animated } from 'react-native';

const Radio = ({ options, selected, setSelected }) => {
	const [translate, setTranslate] = useState(9999);
	const [yDim, setYDim] = useState(0);
	const translateAnim = useRef(new Animated.Value(0)).current;

	const find_dimesions = (layout) => {
		const { x, y, width, height } = layout;
		setYDim(height);
	};

	const optionSelected = (index) => {
		setTranslate((yDim / options.length) * index);
		Animated.timing(translateAnim, {
			toValue: (yDim / options.length) * index,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	return (
		<View
			className="w-screen z-20"
			onLayout={(event) => {
				find_dimesions(event.nativeEvent.layout);
			}}
		>
			<Animated.View
				className="z-10 w-8/12 h-1/2 absolute border rounded-xl"
				style={{
					borderColor: '#60435F',
					backgroundColor: 'rgba(255, 255, 255, 0.25)',
					transform: [{ translateY: translateAnim }],
				}}
			></Animated.View>
			{options.map((option, index) => {
				return (
					<Pressable
						key={index}
						className="flex-row p-4 items-center"
						onPress={() => {
							setSelected(option.value);
							optionSelected(index);
						}}
					>
						<View
							className="w-4 h-4 rounded-xl bg-white mr-2 border flex-row items-center justify-center"
							style={{ borderColor: '#60435F' }}
						>
							{option.value === selected && (
								<View
									className="w-2 h-2 rounded-xl"
									style={{ backgroundColor: '#60435F' }}
								></View>
							)}
						</View>
						<Text className="text-lg" style={{ color: '#60435F' }}>
							{option.value}
						</Text>
					</Pressable>
				);
			})}
		</View>
	);
};

export default Radio;
