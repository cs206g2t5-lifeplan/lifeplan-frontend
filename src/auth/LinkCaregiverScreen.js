import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import ellipseWhite from '../../assets/EllipseWhiteRight.png';
import ellipsePink from '../../assets/EllipsePinkRight.png';
import Buttons from '../shared/Buttons';
import QR from '../shared/QR';

const LinkCaregiverScreen = ({ navigation }) => {
	const [qr, setQr] = useState('default');

	return (
		<View style={{ backgroundColor: '#A8DCD9' }} className="w-screen h-screen">
			<Image className="absolute bottom-0 left-0" source={ellipseWhite} />
			<Image className="absolute bottom-0 left-0" source={ellipsePink} />
			<View className="z-10 h-screen w-screen flex-1 flex-col items-center">
				<Text className="text-white font-bold text-6xl self-start pl-8 pt-32">
					LifePlan
				</Text>
				<Text className="text-black font-bold text-4xl self-start pl-8 pb-4">
					Connect
				</Text>
				<View
					className="rounded-xl w-10/12 h-1/3 bg-white p-4"
					style={{
						shadowColor: '#000',
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.25,
						shadowRadius: 3.84,
						elevation: 5,
					}}
				>
					<QR value={qr} />
					<Text
						className="font-bold text-3xl text-center"
						style={{ color: '#60435F' }}
					>
						Scan code with your caregiver's account to log in
					</Text>
				</View>
				<View className="w-screen flex-1 items-center">
					<Buttons
						title="Regenerate QR Code"
						onPress={() => {
							setQr('default');
						}}
					/>
				</View>
				<View className="w-10/12 flex-1 flex-row">
					<View className="w-1/2 flex-1 items-center">
						<Buttons title="Back" onPress={() => navigation.goBack()} />
					</View>
					<View className="w-1/2 flex-1 items-center">
						<Buttons
							title="Link Later"
							onPress={() => navigation.navigate('Home')}
							isDark={true}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default LinkCaregiverScreen;
