import ContactInfoSection from '@/components/ContactInfoSection';
import NoItemSection from '@/components/NoItemSection';
import { CampType, camps } from '@/models/Camps';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import styles from './mtb-trips.module.css';
import CampTypeIcon from '@/components/CampTypeIcon';
import CampItem from '@/components/CampItem';
import Head from 'next/head';

const MtbCamp = () => {
	const items = camps && camps.filter((camp) => camp.type === CampType.SUMMER);

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
						<CampTypeIcon type={CampType.SUMMER} />
					</div>
					<Typography variant='h2'>TABERE DE VARĂ</Typography>
				</div>
				{items.map((item, index) => (
					<CampItem key={item.id} item={item} isOdd={index % 2 !== 0} />
				))}
				<iframe
					src='https://www.google.com/maps/d/embed?mid=1vDY3KBAcL9541WNH9Nzt3QnM8TSCaqM&ehbc=2E312F"&ll=46.01023614849672%2C23.030814303820488&z=7'
					allowFullScreen
					className={styles.embadedMap}
				/>
				<ContactInfoSection />
			</Stack>
		</>
	);
};

export default MtbCamp;
