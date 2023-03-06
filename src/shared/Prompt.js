import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Prompt = ({ color, heading, content, time, diameter }) => {
	return (
		<View
			style={{ width: diameter, height: diameter }}
			className="flex-1 justify-center"
		>
			<View className="w-64 h-64 self-center items-center justify-center rounded-full bg-transparent border-4 border-white border-solid">
				<View
					className="rounded-full w-10/12 h-5/6 items-center justify-center"
					style={{ backgroundColor: color }}
				>
					<Text
						className="font-bold text-xl text-center mb-4"
						style={{ color: '#60435F' }}
					>
						{heading}
					</Text>
					<Text
						className="font-bold text-2xl text-center"
						style={{ color: '#60435F' }}
					>
						{content}
					</Text>
					<Text
						className="font-bold text-xl text-center mt-4"
						style={{ color: '#60435F' }}
					>
						{time}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default Prompt;
