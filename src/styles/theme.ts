import { createTheme } from '@mui/material';

const breakpoints = {
	values: {
		xs: 0,
		sm: 600,
		md: 764,
		lg: 1280,
		xl: 1920,
	},
};
const theme = createTheme({
	breakpoints,
	palette: {
		primary: {
			main: '#FFFFFF',
		},
		secondary: {
			main: '#3D3E6B',
			contrastText: '#FFFFFF',
		},
	},
	typography: {
		fontFamily: 'Asap, sans-serif',
		h1: {
			fontFamily: 'Karla, sans-serif',
			fontWeight: 800,
			fontSize: '32px',
			lineHeight: '40px',
			[`@media screen and (width > ${breakpoints.values.md}px)`]: {
				fontSize: '64px',
				lineHeight: '70px',
			},
		},
		h2: {
			fontFamily: 'Asap, sans-serif',
			fontWeight: 600,
			fontSize: '24px',
		},
		subtitle1: {
			fontFamily: 'Asap, sans-serif',
			fontWeight: '400',
			fontSize: '12px',
			leadingTrim: 'both',
			textEdge: 'cap',
		},
		subtitle2: {
			fontSize: '12px',
			[`@media screen and (width > ${breakpoints.values.md}px)`]: {
				fontSize: '16px',
				lineHeight: '20px',
				fontWeight: '500',
			},
		},
		body1: {},
		body2: {},

		button: {
			fontWeight: 600,
		},
	},
	components: {
		MuiListItem: {
			styleOverrides: {
				root: {
					margin: '0px',
					padding: '0px',
					width: 'unset',
				},
			},
		},
	},
});
export default theme;
