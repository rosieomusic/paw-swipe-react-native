import React from 'react';
import {
	View,
	TextInput,
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native';

type Props = {
	search: string;
	onSearchChange: (text: string) => void;
	type: 'DOG' | 'CAT' | null;
	onTypeChange: (type: 'DOG' | 'CAT' | null) => void;
};

export default function FilterBar({
	search,
	onSearchChange,
	type,
	onTypeChange,
}: Props) {
	return (
		<View style={styles.container}>
			<TextInput
				placeholder='Search by breed...'
				value={search}
				onChangeText={onSearchChange}
				style={styles.search}
			/>

			<View style={styles.typeRow}>
				{(['DOG', 'CAT'] as const).map((t) => (
					<TouchableOpacity
						key={t}
						onPress={() => onTypeChange(type === t ? null : t)}
						style={[styles.typeButton, type === t && styles.active]}
					>
						<Text style={styles.typeText}>{t}</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingBottom: 10,
	},
	search: {
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 12,
		marginBottom: 10,
	},
	typeRow: {
		flexDirection: 'row',
		gap: 10,
	},
	typeButton: {
		flex: 1,
		paddingVertical: 10,
		borderRadius: 20,
		backgroundColor: '#ccc',
		alignItems: 'center',
	},
	active: {
		backgroundColor: '#5C6E92',
	},
	typeText: {
		color: '#000',
		fontWeight: '600',
	},
});
