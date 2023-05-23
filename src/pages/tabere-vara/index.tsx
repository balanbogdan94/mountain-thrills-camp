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

const MtbCamp = () => {
	const items = camps && camps.filter((camp) => camp.type === CampType.SUMMER);

	if (items.length === 0) return <NoItemSection />;
	return (
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
			<ContactInfoSection />
		</Stack>
	);
};

export default MtbCamp;
