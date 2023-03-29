import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const EmergencyScreen = () => {
	const [mapRegion, setmapRegion] = useState({
		latitude: 1.296568,
		longitude: 103.852119,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});
	return (
		<View className="flex-1 h-full w-full">
			<MapView
				style={{ alignSelf: 'stretch', height: '100%' }}
				region={mapRegion}
			>
				<Marker
					coordinate={{
						latitude: mapRegion.latitude,
						longitude: mapRegion.longitude,
					}}
					title={'Home'}
					description={'This is my home!'}
				/>
			</MapView>
		</View>
	);
};

export default EmergencyScreen;
