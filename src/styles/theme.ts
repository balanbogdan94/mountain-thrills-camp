import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#FFFFFF',
		},
		secondary: {
			main: '#000000',
			contrastText: '#FFFFFF',
		},
		info: {
			main: '#3D3E6B',
		},
	},
	typography: {
		fontFamily: 'Asap, sans-serif',
		h1: {
			fontFamily: 'Karla, sans-serif',
			fontWeight: 800,
			fontSize: '24px',
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
		button: {
			fontWeight: 600,
		},
	},
});
export default theme;
