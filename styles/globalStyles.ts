import { StyleSheet } from 'react-native';
import { colors, spacing } from './theme';

export const globalStyles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.background,
		padding: spacing.md,
	},
	input: {
		borderWidth: 1,
		borderColor: colors.border,
		padding: spacing.md,
		width: 300,
		borderRadius: 6,
		marginBottom: spacing.md,
	},
	button: {
		backgroundColor: '#5C6E92',
		padding: 16,
		borderRadius: 20,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 5,
	},
	buttonText: {
		color: 'white',
	},
});
