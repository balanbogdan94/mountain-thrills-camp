import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export const Section: React.FC<{
	title: string;
	children: JSX.Element | JSX.Element[];
	className?: string;
}> = ({ title, className, children }) => (
	<Box
		color={'secondary'}
		className={className}
		style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: '50px 15px',
			width: '100vw',
		}}>
		<svg
			width='49'
			height='36'
			fill='none'
			viewBox='0 0 49 36'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M21.3085 2L24.4752 7.21688M24.4752 7.21688L40.7332 34M24.4752 7.21688L27.8221 2M24.4752 7.21688L7.29238 34M40.7332 34H29.7995M40.7332 34H46.549M7.29238 34H2M7.29238 34H18.4006M18.4006 34L23.3955 25.7476C23.663 25.3057 24.3142 25.2999 24.5898 25.737L29.7995 34M18.4006 34H29.7995'
				stroke={!!className ? 'white' : 'black'}
				stroke-width='4'
				stroke-linecap='round'
			/>
		</svg>
		<Typography fontWeight={600} variant='h2' marginBottom={'35px'}>
			{title}
		</Typography>
		{children}
	</Box>
);
