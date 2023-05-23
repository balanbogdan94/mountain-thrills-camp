import { Stack, Typography, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import CampDateItem from './CampDateItem';
import styles from './CampItem.module.css';
import Image from 'next/image';
import { CampItemType } from '@/models/Camps';

type CampItemProps = {
	item: CampItemType;
	isOdd: boolean;
};

const CampItem: React.FC<CampItemProps> = ({ item, isOdd }) => {
	return (
		<Stack key={item.id} className={styles.itemContainer}>
			<div
				className={`${styles.imageContainer} ${
					isOdd ? styles.imageSecound : null
				}`}>
				<Image unoptimized fill src={item.imageSrc} alt='' />
				<div className={styles.price}>
					<Typography variant='h6' fontWeight={900}>
						{item.price} RON
					</Typography>
				</div>
			</div>
			<Stack gap='16px' className={styles.itemInfoArea}>
				<Typography className={styles.itemText} variant='h2'>
					{item.title}
				</Typography>
				<Typography variant='subtitle2'>
					<CampDateItem startDate={item.startDate} endDate={item.endDate} />
				</Typography>
				<Typography className={styles.itemText}>{item.description}</Typography>
				<Typography variant='h5'>Activități:</Typography>
				<ul>
					{item.activity.map((a) => (
						<li key={a}>{a}</li>
					))}
				</ul>
				<div>
					<Link href={'/contact'}>
						<Button variant='contained' color='secondary'>
							Înscrie-te
						</Button>
					</Link>
				</div>
			</Stack>
		</Stack>
	);
};

export default CampItem;
