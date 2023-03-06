import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CareGiver from '../../assets/caregiver.png';
import Buttons from '../shared/Buttons';
import Modal from '../shared/Modal';

const AccountScreen = ({ navigation }) => {
	const [shown, setShown] = useState(false);
	return (
		<View className="w-screen h-screen flex-1 items-center bg-white">
			<View className="h-10" />
			<View
				className="w-screen h-16 flex-row justify-center items-center"
				style={{
					backgroundColor: '#E2A3C7',
					shadowColor: '#000',
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.25,
					shadowRadius: 3.84,
					elevation: 5,
				}}
			>
				<Pressable className="w-1/6 ml-8" onPress={() => navigation.goBack()}>
					<MaterialCommunityIcons
						name="arrow-left"
						size={32}
						style={{ paddingRight: 15 }}
						color="#fff"
					/>
				</Pressable>
				<Text className="pl-4 text-3xl font-bold self-start pb-4 text-white w-10/12 pt-4">
					My Account
				</Text>
			</View>
			<View className="w-screen h-32 flex-row items-center justify-center mb-4">
				<View className="w-5/12 flex-1 justify-center items-center">
					<Image source={CareGiver} />
				</View>
				<View className="w-7/12 flex-col items-start">
					<Text
						className="rounded-xl text-white font-bold px-4 py-1 mb-2"
						style={{ backgroundColor: '#D67AB1' }}
					>
						Caregiver
					</Text>
					<Text className="text-m font-bold mb-2" style={{ color: '#60435F' }}>
						Lim Hong Yao
					</Text>
					<Text className="text-m font-bold" style={{ color: '#60435F' }}>
						Linked to: Khoo Heng Phuat
					</Text>
				</View>
			</View>
			<Buttons
				title="Unlink Care Recipient"
				isDark={false}
				borderColor="#D67AB1"
			/>
			<Buttons
				title="Edit account settings"
				isDark={false}
				borderColor="#D67AB1"
			/>
			<Buttons
				title="Logout"
				onPress={() => {
					setShown(true);
					route.params.updateShown(false);
				}}
				isDark={false}
				borderColor="#D67AB1"
			/>
			<Modal
				shown={shown}
				heading="Confirm Logout?"
				btnRight={() => navigation.navigate('SignIn')}
				btnLeftTitle="Cancel"
				btnRightTitle="Logout"
				btnLeft={() => setShown(false)}
			/>
		</View>
	);
};

export default AccountScreen;
