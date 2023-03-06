import React from 'react';
import { View, Image, Text } from 'react-native';
import ellipseWhite from '../../assets/EllipseWhiteRight.png';
import ellipsePink from '../../assets/EllipsePinkRight.png';
import Buttons from '../shared/Buttons';
import Camera from '../shared/Camera';

const LinkCareRecipientScreen = ({ navigation }) => {
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
				<Camera
					navigate={() => navigation.navigate('Care Recipient Confirmation')}
				/>
				<Text
					className="text-xl w-10/12 text-center font-bold"
					style={{ color: '#60435F' }}
				>
					Please register for an account for your care recipient on his/her
					device and scan the QR code shown
				</Text>
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

export default LinkCareRecipientScreen;
