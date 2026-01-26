import { Montserrat_900Black } from '@expo-google-fonts/montserrat';

export const colors = {
	footer: '#C7A5BA',
	header: '#5C6E92',
	background: '#DECEC1',
	text: '#0F172A',
	border: 'white',
	error: '#DC2626',
};

export const spacing = {
	xs: 4,
	sm: 8,
	md: 12,
	lg: 24,
	xl: 32,
};

export const typography = {
	heading: {
		fontSize: 24,
		fontWeight: '600' as const,
		marginBottom: 30,
		textAlign: 'center' as const,
		fontFamily: 'Montserrat_900Black',
		color: colors.text,
	},
	body: {
		fontSize: 16,
		color: colors.background,
		fontFamily: 'Montserrat_900Black',
	},
};
