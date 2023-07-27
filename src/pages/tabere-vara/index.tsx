import ContactInfoSection from '@/components/ContactInfoSection';
import NoItemSection from '@/components/NoItemSection';
import { CampType, camps } from '@/models/Camps';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import styles from './index.module.css';
import commonStyles from './../../styles/common.module.css';
import CampItem from '@/components/CampItem';
import Head from 'next/head';
import CampTypeBanner from '@/components/CampTypeBanner';

const MtbCamp = () => {
	const items = camps && camps.filter((camp) => camp.type === CampType.SUMMER);

	const onMapClicked = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.currentTarget.classList.remove(styles.overlay);
		e.currentTarget.firstElementChild?.classList.remove(styles.overlayMap);
	};

	const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.currentTarget.classList.add(styles.overlay);
		e.currentTarget.firstElementChild?.classList.add(styles.overlayMap);
	};

	if (items.length === 0) return <NoItemSection />;
	return (
		<>
			<Head>
				<title>Zero Point - Tabere de vara</title>
				<meta name='description' content='Home page of Zero Point' />
				<link rel='icon' href='/logo.ico' />
			</Head>
			<Stack alignItems={'center'} gap={'100px'}>
				<div style={{ width: '100%' }}>
					<CampTypeBanner
						text='Tabere vara'
						campType={CampType.SUMMER}
						imageUrl='/pages/summer-camp/banner.jpg'
					/>
					<div className={styles.announce}>
						<Typography variant='body1'>
							Traseu in fiecare joi cu plecare de pe stadionul Michael Kelin sau
							Gradina zoologica. Programul si locatia varianza in functie de
							vreme
						</Typography>
						<Typography fontWeight={'900'} variant='body1'>
							Pret: 30 lei copil/ 2 ore
						</Typography>
					</div>
				</div>
				{items.map((item, index) => (
					<CampItem key={item.id} item={item} isOdd={index % 2 !== 0} />
				))}
				<div
					className={commonStyles.overlay}
					onClick={onMapClicked}
					onMouseLeave={onMouseLeave}>
					<iframe
						src='https://www.google.com/maps/d/embed?mid=1vDY3KBAcL9541WNH9Nzt3QnM8TSCaqM&ehbc=2E312F"&ll=46.01023614849672%2C23.030814303820488&z=7'
						allowFullScreen
						className={`${commonStyles.embadedMap} ${commonStyles.overlayMap}`}
					/>
				</div>
				<ContactInfoSection />
			</Stack>
		</>
	);
};

export default MtbCamp;
