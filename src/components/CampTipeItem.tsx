import { Box, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CampTipeItem = (props: {
	imgSrc: string;
	title: string;
	description: string;
	link: string;
}) => {
	const { imgSrc, title, description, link } = props;
	return (
		<ListItem
			sx={{
				position: 'relative',
				width: '90vw',
				aspectRatio: '1/1',
				padding: 0,
			}}>
			<Image src={imgSrc} alt={title} fill style={{ borderRadius: '10px' }} />

			<Box
				sx={{ backgroundColor: '#000000B2' }}
				position={'absolute'}
				display={'flex'}
				gap={'8px'}
				width={'100%'}
				borderRadius={'0 0 10px 10px'}
				flexDirection={'column'}
				padding={'24px 18px'}
				bottom={0}>
				<Typography fontWeight={600} variant='body1' color={'white'}>
					{title}
				</Typography>
				<Typography color={'white'} variant='subtitle1'>
					{description}
				</Typography>
				<Link href={link}>
					<Typography color={'white'} variant='body2'>
						Vezi mai mult
					</Typography>
				</Link>
			</Box>
		</ListItem>
	);
};

export default CampTipeItem;
