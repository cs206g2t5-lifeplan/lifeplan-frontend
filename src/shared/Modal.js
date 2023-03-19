import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, LogBox } from 'react-native';
import Buttons from './Buttons';

const Modal = ({ route, navigation }) => {
	LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
	LogBox.ignoreAllLogs(); //Ignore all log notifications
	const [params, setParams] = useState({
		heading: '',
		btnLeftTitle: '',
		btnRightTitle: '',
		btnRight: () => {},
	});
	const [shown, setShown] = useState(true);

	useEffect(() => {
		if (route.params) {
			setParams(route.params);
			// Post updated, do something with `route.params.post`
			// For example, send the post to the server
		}
		console.log(route.params);
	}, [route.params]);

	useEffect(() => {
		if (!shown) {
			setTimeout(() => {
				navigation.goBack();
			}, 50);
		}
	}, [shown]);
	return (
		<View className="w-screen h-full">
			<Pressable
				className="w-screen h-full bg-black"
				style={{ opacity: 0.4, display: shown ? 'flex' : 'none' }}
				onPress={() => {
					setShown(false);
				}}
			></Pressable>
			<View
				className="w-screen items-center justify-center bg-white h-1/3 border"
				style={{
					display: shown ? 'flex' : 'none',
					position: 'absolute',
					bottom: 0,
					borderColor: '#60435F',
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20,
				}}
			>
				<Text className="font-bold text-m" style={{ color: '#60435F' }}>
					{params.heading}
				</Text>
				<View className="mx-auto flex-row items-center justify-center w-screen">
					<View className="w-1/2 flex-1 items-center">
						<Buttons
							isDark={false}
							title={params.btnLeftTitle}
							onPress={() => setShown(false)}
						/>
					</View>
					<View className="w-1/2 flex-1 items-center">
						<Buttons
							isDark={true}
							title={params.btnRightTitle}
							onPress={params.btnRight}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

Modal.options = (props) => {
	return {
		overlay: {
			interceptTouchOutside: true,
		},
	};
};

export default Modal;
