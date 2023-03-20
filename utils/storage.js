import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key) => {
	try {
		const jsonValue = await AsyncStorage.getItem(key);
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		console.log(e);
	}
};

export const storeData = async (key, value) => {
	try {
		const item = await AsyncStorage.getItem(key);
		let jsonValue = JSON.parse(value);
		if (item) {
			jsonValue = [...JSON.parse(item), ...jsonValue];
		}
		await AsyncStorage.setItem(key, jsonValue);
		return true;
	} catch (e) {
		console.log(e);
	}
};
