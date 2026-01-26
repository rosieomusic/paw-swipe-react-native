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
});
