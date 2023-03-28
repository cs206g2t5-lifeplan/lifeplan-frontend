import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import ellipseWhite from '../../assets/EllipseWhiteRight.png';
import ellipsePink from '../../assets/EllipsePinkRight.png';
import Input from '../shared/Input';
import Buttons from '../shared/Buttons';
import Radio from '../shared/Radio';

const SignUpScreen = ({ navigation }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [code, setCode] = useState('+65');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [selected, setSelected] = useState('');

	const opt = [
		{ id: '1', label: 'Caregiver', value: 'Caregiver' },
		{ id: '2', label: 'Care Recipient', value: 'Care Recipient' },
	];

	const linkUser = () => {
		if (selected === 'Caregiver') {
			navigation.navigate('Link Care Recipient');
		} else if (selected === 'Care Recipient') {
			navigation.navigate('Link Caregiver');
		}
	};

	return (
		<View style={{ backgroundColor: '#A8DCD9' }} className="w-screen h-screen">
			<Image className="absolute bottom-0 left-0" source={ellipseWhite} />
			<Image className="absolute bottom-0 left-0" source={ellipsePink} />
			<View className="z-10 h-screen w-screen flex-1 flex-col items-center pt-2">
				<Text className="text-white font-bold text-6xl self-start pl-8 pt-16">
					LifePlan
				</Text>
				<Text className="text-black font-bold text-4xl self-start pl-8 pb-8">
					Register
				</Text>
				<View className="flex-row items-center justify-center w-11/12">
					<Input
						secure={false}
						placeholder="First Name"
						val={firstName}
						setInput={setFirstName}
						width="40%"
						align="start"
					/>
					<Input
						secure={false}
						placeholder="Last Name"
						val={lastName}
						setInput={setLastName}
						width="40%"
						align="end"
					/>
				</View>
				<View className="flex-row items-center justify-center w-11/12">
					<Input
						secure={false}
						placeholder={code}
						val={code}
						setInput={setCode}
						width="25%"
						align="start"
					/>
					<Input
						secure={false}
						placeholder="Phone Number"
						val={phone}
						setInput={setPhone}
						width="55%"
						align="end"
					/>
				</View>
				<Input
					type="text"
					secure={true}
					placeholder="Password"
					val={password}
					setInput={setPassword}
				/>
				<Input
					type="text"
					secure={true}
					placeholder="Confirm Password"
					val={passwordConfirm}
					setInput={setPasswordConfirm}
				/>
				<View className="w-11/12 flex-row pt-4">
					<Text
						className="w-1/2 pt-3 pl-4 text-lg"
						style={{ color: '#60435F' }}
					>
						I am a:
					</Text>
					<View className="w-1/2 flex-col items-center">
						<Radio
							options={opt}
							setSelected={setSelected}
							selected={selected}
						/>
					</View>
				</View>
				<Buttons title="Register" onPress={linkUser} isDark={true} />
				<Buttons
					title="Back to Sign In"
					onPress={() => navigation.navigate('SignIn')}
					isDark={false}
				/>
			</View>
		</View>
	);
};

export default SignUpScreen;
