import React from 'react';
import { TextInput, Pressable, View } from 'react-native';
import { useTogglePasswordVisibility } from '../../utils/hooks/useTogglePasswordVisibility';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Input = ({ type, secure, placeholder, setInput, val, width }) => {
	const { passwordVisibility, rightIcon, handlePasswordVisibility } =
		useTogglePasswordVisibility();
	return (
		<View
			style={{
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.25,
				shadowRadius: 3.84,
				elevation: 5,
				width: width ? width : '83.333333%',
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
			className="p-2 mt-3 bg-white rounded-lg border border-white flex-row items-center justify-between"
		>
			<TextInput
				onChangeText={setInput}
				keyboardType={type}
				value={val}
				placeholder={placeholder}
				secureTextEntry={secure ? passwordVisibility : false}
				className="px-4 bg-white w-11/12"
			/>
			{secure && (
				<Pressable onPress={handlePasswordVisibility}>
					<MaterialCommunityIcons
						name={rightIcon}
						size={22}
						style={{ paddingRight: 15 }}
						color="#232323"
					/>
				</Pressable>
			)}
		</View>
	);
};

export default Input;
