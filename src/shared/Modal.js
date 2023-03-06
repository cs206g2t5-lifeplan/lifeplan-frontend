import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Buttons from './Buttons';

const Modal = ({
	shown,
	heading,
	btnLeft,
	btnRight,
	btnLeftTitle,
	btnRightTitle,
}) => (
	<View
		className="w-screen items-center justify-center bg-white rounded-2xl h-1/3 border"
		style={{
			display: shown ? 'flex' : 'none',
			position: 'absolute',
			bottom: -0,
			elevation: 999,
			zIndex: 999,
		}}
	>
		<Text className="font-bold text-m" style={{ color: '#60435F' }}>
			{heading}
		</Text>
		<View className="mx-auto flex-row items-center justify-center w-screen">
			<View className="w-1/2 flex-1 items-center">
				<Buttons isDark={false} title={btnLeftTitle} onPress={btnLeft} />
			</View>
			<View className="w-1/2 flex-1 items-center">
				<Buttons isDark={true} title={btnRightTitle} onPress={btnRight} />
			</View>
		</View>
	</View>
);

Modal.options = (props) => {
	return {
		overlay: {
			interceptTouchOutside: true,
		},
	};
};

export default Modal;
