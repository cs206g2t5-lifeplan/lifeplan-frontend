import React from 'react';
import { Pressable, Text } from 'react-native';

const Buttons = ({ title, onPress, isDark, borderColor }) => {
	return (
		<>
			{isDark ? (
				<Pressable
					onPress={onPress}
					style={{ backgroundColor: '#60435F' }}
					className="w-screen mt-3 w-10/12 h-12 items-center justify-center rounded-lg"
				>
					<Text className="text-white">{title}</Text>
				</Pressable>
			) : (
				<Pressable
					onPress={onPress}
					style={{
						backgroundColor: '#fff',
						borderColor: borderColor ? borderColor : '#60435F',
					}}
					className="w-screen mt-3 w-10/12 h-12 items-center justify-center rounded-lg border"
				>
					<Text
						style={{
							color: borderColor ? borderColor : '#60435F',
						}}
					>
						{title}
					</Text>
				</Pressable>
			)}
		</>
	);
};

export default Buttons;
