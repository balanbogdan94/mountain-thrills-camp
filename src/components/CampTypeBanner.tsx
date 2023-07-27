import React from 'react';
import CampTypeIcon from './CampTypeIcon';
import { CampType } from '@/models/Camps';
import { Typography } from '@mui/material';
import styles from './CampTypeBanner.module.css';

const CampTypeBanner = (props: {
	text: string;
	campType: CampType;
	imageUrl: string;
}) => {
	return (
		<div className={styles.heroContainer}>
			<div
				style={{
					background: `url(${props.imageUrl})`,
					backgroundPosition: 'center',
				}}
				className={styles.heroImage}
			/>
			<div className={styles.heroIcon}>
				<CampTypeIcon type={props.campType} />
			</div>
			<Typography variant='h2'>{props.text}</Typography>
		</div>
	);
};

export default CampTypeBanner;
