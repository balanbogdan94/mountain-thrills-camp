import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './NoItemSection.module.css';

const NoItemSection = () => {
	return (
		<Stack alignItems={'center'} gap={'24px'}>
			<div className={styles.imageContainer}>
				<Image src={'/noItem.svg'} alt='No item image' fill unoptimized />
			</div>
			<Typography variant='h2'>Momentan nu există tabere</Typography>
			<Typography textAlign={'center'}>
				Contactează-ne și te vom anunța când vor fi disponibile
			</Typography>
			<Link href='/contact'>
				<Button variant='contained' color='secondary'>
					Contactează-ne
				</Button>
			</Link>
		</Stack>
	);
};

export default NoItemSection;
