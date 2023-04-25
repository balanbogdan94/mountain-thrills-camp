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
		<ListItem sx={{ position: 'relative' }}>
			<Image src={imgSrc} alt={title} width={500} height={600} />
			<Box
				sx={{ backgroundColor: '#000000B2' }}
				position={'absolute'}
				display={'flex'}
				gap={'8px'}
				flexDirection={'column'}
				padding={'24px 18px'}
				bottom={0}>
				<Typography fontWeight={600} variant='h6' color={'white'}>
					{title}
				</Typography>
				<Typography color={'white'}>{description}</Typography>
				<Link style={{ color: 'white' }} href={link}>
					Vezi mai multe
				</Link>
			</Box>
		</ListItem>
	);
};

export default CampTipeItem;
