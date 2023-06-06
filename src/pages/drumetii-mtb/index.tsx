import ContactInfoSection from '@/components/ContactInfoSection';
import NoItemSection from '@/components/NoItemSection';
import { CampType, camps } from '@/models/Camps';
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import styles from './mtb-trips.module.css';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Link from 'next/link';
import CampTypeIcon from '@/components/CampTypeIcon';
import CampDateItem from '@/components/CampDateItem';
import CampItem from '@/components/CampItem';
import Head from 'next/head';

const MtbCamp = () => {
	const items = camps && camps.filter((camp) => camp.type === CampType.MTB);

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
						<CampTypeIcon type={CampType.MTB} />
					</div>
					<Typography variant='h2'>Drumeții MTB</Typography>
				</div>
				{items.map((item, index) => (
					<CampItem key={item.id} item={item} isOdd={index % 2 !== 0} />
				))}
				<iframe
					src='https://www.google.com/maps/d/embed?mid=1Hzua-gVUiDny0ag2BnFZ8VXwwDclhs8&ehbc=2E312F&ll=45.68056885935343%2C23.70742932716681&z=7'
					className={styles.embadedMap}
				/>
				<ContactInfoSection />
			</Stack>
		</>
	);
};

export default MtbCamp;
