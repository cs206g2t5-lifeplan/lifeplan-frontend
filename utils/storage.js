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
		console.log(key, item);
		let jsonValue = value;
		console.log(jsonValue);
		if (item) {
			jsonValue = [...JSON.parse(item), ...value];
		}
		await AsyncStorage.setItem(key, jsonValue);
		return true;
	} catch (e) {
		console.log(e);
	}
};
