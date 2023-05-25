import ContactInfoSection from '@/components/ContactInfoSection';
import NoItemSection from '@/components/NoItemSection';
import { CampType, camps } from '@/models/Camps';
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import styles from './../drumetii-mtb/mtb-trips.module.css';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Link from 'next/link';
import CampItem from '@/components/CampItem';
import Head from 'next/head';

const SummerCamp = () => {
	const items = camps && camps.filter((camp) => camp.type === CampType.SKY);

	if (items.length === 0) return <NoItemSection />;
	return (
		<>
			<Head>
				<title>Zero Point</title>
			</Head>
			<Stack alignItems={'center'} gap={'100px'}>
				<div className={styles.heroContainer}>
					<Diversity1Icon fontSize='large' />
					<Typography variant='h1'>Drumeții MTB</Typography>
				</div>
				{items.map((item, index) => (
					<CampItem key={item.id} item={item} isOdd={index % 2 !== 0} />
				))}
				<ContactInfoSection />
			</Stack>
		</>
	);
};

export default SummerCamp;
