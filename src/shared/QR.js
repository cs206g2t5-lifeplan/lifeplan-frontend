import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QR = ({ value }) => {
	return (
		<View className="flex-1 items-center justify-center">
			<QRCode value={value} />
		</View>
	);
};

export default QR;
