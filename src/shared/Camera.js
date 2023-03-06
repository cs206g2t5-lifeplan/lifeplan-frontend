import React, { useState } from 'react';
import { View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

const CameraComp = ({ navigate }) => {
	const [type, setType] = useState(CameraType.back);
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [width, setWidth] = useState(0);
	if (!permission) {
		requestPermission();
	}

	const find_dimesions = (layout) => {
		const { x, y, width, height } = layout;
		setWidth(width);
	};

	return (
		<View className="w-10/12 z-20 mb-4">
			<Camera
				onLayout={(event) => {
					find_dimesions(event.nativeEvent.layout);
				}}
				style={{ height: width }}
				type={type}
				barCodeScannerSettings={{
					barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
				}}
				onBarCodeScanned={navigate}
				onMountError={(error) => console.log(error)}
			></Camera>
		</View>
	);
};

export default CameraComp;
