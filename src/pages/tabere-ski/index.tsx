import ContactInfoSection from '@/components/ContactInfoSection';
import NoItemSection from '@/components/NoItemSection';
import { CampType, camps } from '@/models/Camps';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import styles from './skyCamp.module.css';
import CampItem from '@/components/CampItem';
import Head from 'next/head';
import CampTypeIcon from '@/components/CampTypeIcon';

const SkiCamp = () => {
	const items = camps && camps.filter((camp) => camp.type === CampType.SKY);

	if (items.length === 0) return <NoItemSection />;
	return (
		<>
			<Head>
				<title>Zero Point</title>
			</Head>
			<Stack alignItems={'center'} gap={'100px'}>
				<div className={styles.heroContainer}>
					<div className={styles.heroImage} />
					<div className={styles.heroIcon}>
						<CampTypeIcon type={CampType.SKY} />
					</div>
					<Typography variant='h2'>Tabere SKI</Typography>
				</div>
				{items.map((item, index) => (
					<CampItem key={item.id} item={item} isOdd={index % 2 !== 0} />
				))}
				<ContactInfoSection />
			</Stack>
		</>
	);
};

export default SkiCamp;
