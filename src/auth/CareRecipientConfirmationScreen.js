import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import ellipseWhite from '../../assets/EllipseWhiteRight.png';
import ellipsePink from '../../assets/EllipsePinkRight.png';
import grandma from '../../assets/grandma.jpeg';
import Buttons from '../shared/Buttons';

const CareRecipientConfirmationScreen = ({ navigation }) => {
	const [pName, setPName] = useState('Khoo Heng Puat');
	const [phone, setPhone] = useState('+65 8123 4567');
	const [dWidth, setWidth] = useState(0);

	const find_dimesions = (layout) => {
		const { x, y, width, height } = layout;
		setWidth(width);
	};

	return (
		<View style={{ backgroundColor: '#A8DCD9' }} className="w-screen h-screen">
			<Image className="absolute bottom-0 left-0" source={ellipseWhite} />
			<Image className="absolute bottom-0 left-0" source={ellipsePink} />
			<View className="z-10 h-screen w-screen flex-1 flex-col items-center">
				<Text className="text-white font-bold text-6xl self-start pl-8 pt-32">
					LifePlan
				</Text>
				<Text className="text-black font-bold text-4xl self-start pl-8 pb-4">
					Link to{'\n'}Care Recipient
				</Text>
				<View
					className="w-10/12 bg-white rounded-xl flex-1 items-center justify-center mb-4 py-8"
					style={{
						shadowColor: '#000',
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.25,
						shadowRadius: 3.84,
						elevation: 5,
						minHeight: dWidth,
						maxHeight: dWidth,
					}}
					onLayout={(event) => find_dimesions(event.nativeEvent.layout)}
				>
					<View className="flex-1 items-center justify-center">
						<Image
							style={{ width: 160, height: 160 }}
							className="rounded-full"
							source={grandma}
						/>
					</View>
					<Text
						className="font-bold text-xl pt-4 pb-2"
						style={{ color: '#60435F' }}
					>
						Name: {pName}
					</Text>
					<Text className="font-bold text-xl pb-2" style={{ color: '#60435F' }}>
						Phone: {phone}
					</Text>
				</View>
				<Text
					className="text-xl w-10/12 text-center font-bold"
					style={{ color: '#60435F' }}
				>
					Please confirm Care Recipient's details
				</Text>
				<View className="w-10/12 flex-1 flex-row">
					<View className="w-1/2 flex-1 items-center">
						<Buttons title="Back" onPress={() => navigation.goBack()} />
					</View>
					<View className="w-1/2 flex-1 items-center">
						<Buttons
							title="Confirm"
							onPress={() => navigation.navigate('Homepage')}
							isDark={true}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default CareRecipientConfirmationScreen;
