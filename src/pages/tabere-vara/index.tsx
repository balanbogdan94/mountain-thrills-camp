import ContactInfoSection from '@/components/ContactInfoSection';
import NoItemSection from '@/components/NoItemSection';
import { CampType, camps } from '@/models/Camps';
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import styles from './mtb-trips.module.css';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Link from 'next/link';

const MtbCamp = () => {
	const items = camps && camps.filter((camp) => camp.type === CampType.SUMMER);

	if (items.length === 0) return <NoItemSection />;
	return (
		<Stack alignItems={'center'} gap={'100px'}>
			<div className={styles.heroContainer}>
				<Diversity1Icon fontSize='large' />
				<Typography variant='h1'>Drumeții MTB</Typography>
			</div>
			{items.map((item, index) => (
				<Stack key={item.id} className={styles.itemContainer}>
					<div
						className={`${styles.imageContainer} ${
							index % 2 === 0 ? null : styles.imageSecound
						}`}>
						<Image unoptimized fill src={item.imageSrc} alt='' />
					</div>
					<Stack gap='16px' className={styles.itemInfoArea}>
						<Typography className={styles.itemText} variant='h2'>
							{item.title}
						</Typography>
						<Typography variant='subtitle1'>
							{item.startDate.toLocaleString() + '-' + item.endDate}
						</Typography>
						<Typography className={styles.itemText}>
							{item.description}
						</Typography>
						<Typography variant='h5'>Activități:</Typography>
						<ul>
							{item.activity.map((a) => (
								<li key={a}>{a}</li>
							))}
						</ul>
						<Link href={'/contact'}>
							<Button variant='contained' color='secondary'>
								Înscrie-te
							</Button>
						</Link>
					</Stack>
				</Stack>
			))}
			<ContactInfoSection />
		</Stack>
	);
};

export default MtbCamp;
