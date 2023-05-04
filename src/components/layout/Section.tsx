import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export const Section: React.FC<{
	title: string;
	children: JSX.Element | JSX.Element[];
	backgroundColor?: string;
}> = ({ title, backgroundColor, children }) => (
	<Box
		color={'secondary'}
		style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: '50px 15px',
			width: '100vw',
			backgroundColor: backgroundColor ?? 'white',
		}}>
		<Image src={'/sectionIcon.svg'} alt='section icon' width={50} height={50} />
		<Typography
			fontWeight={600}
			variant='h2'
			marginBottom={'35px'}
			color={'secondary'}>
			{title}
		</Typography>
		{children}
	</Box>
);
