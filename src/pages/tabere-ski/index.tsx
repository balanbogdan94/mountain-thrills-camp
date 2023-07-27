import ContactInfoSection from '@/components/ContactInfoSection';
import NoItemSection from '@/components/NoItemSection';
import { CampType, camps } from '@/models/Camps';
import { Stack } from '@mui/material';
import React from 'react';
import CampItem from '@/components/CampItem';
import Head from 'next/head';
import CampTypeBanner from '@/components/CampTypeBanner';

const SkiCamp = () => {
	const items = camps && camps.filter((camp) => camp.type === CampType.SKY);

	return (
		<>
			<Head>
				<title>Zero Point - Tabere Ski</title>
				<meta name='description' content='Home page of Zero Point' />
				<link rel='icon' href='/logo.ico' />
			</Head>
			{items.length === 0 ? (
				<NoItemSection />
			) : (
				<Stack alignItems={'center'} gap={'100px'}>
					<CampTypeBanner
						text='Tabere SKI'
						campType={CampType.SKY}
						imageUrl={'./pages/ski-camp/banner.webp'}
					/>
					{items.map((item, index) => (
						<CampItem key={item.id} item={item} isOdd={index % 2 !== 0} />
					))}
					<ContactInfoSection />
				</Stack>
			)}
		</>
	);
};

export default SkiCamp;
