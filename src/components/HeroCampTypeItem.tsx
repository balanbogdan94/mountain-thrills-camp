import theme from '@/styles/theme';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import styles from './HeroCampTypeItem.module.css';

const HeroCampTypeItem = ({
	campType,
}: {
	campType: {
		text: string;
		imageSrc: string;
	};
}) => {
	return (
		<Stack
			key={campType.text}
			className={styles.heroCampTypeItem}
			direction={'column'}
			alignItems={'center'}
			gap={theme.spacing(2)}>
			<div className={styles.heroCampTypeItemImage}>
				<Image src={campType.imageSrc} alt={campType.text} fill unoptimized />
			</div>
			<Typography fontWeight={900} textAlign={'center'} variant='body1'>
				{campType.text}
			</Typography>
		</Stack>
	);
};

export default HeroCampTypeItem;
