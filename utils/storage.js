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
		let jsonValue = value;

		if (item) {
			jsonValue = [...JSON.parse(item), ...value];
		}
		await AsyncStorage.setItem(key.toString(), JSON.stringify(jsonValue));
		return true;
	} catch (e) {
		console.log(e);
	}
};

export const removeData = async (key) => {
	try {
		await AsyncStorage.removeItem(key);
		return true;
	} catch (e) {
		console.log(e);
	}
};
