import { TeamSection } from '@/components/TeamSection';
import { Section } from '@/components/layout/Section';
import { Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './Home.module.css';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ContactInfoSection from '@/components/ContactInfoSection';

const AbouUs = () => {
	return (
		<>
			<div className={styles.heroContainer}>
				<Diversity1Icon fontSize='large' />
				<Typography variant='h2'>Despre noi</Typography>
			</div>
			<Section title='Despre noi'>
				<Stack gap={'50px'} maxWidth={'900px'}>
					<Typography textAlign={'center'} fontWeight={'600'}>
						Suntem o echipă de tineri instructori din Hunedoara extrem de
						pasionați de interacțiunea cu copiii. Avem certificări atât
						naționale cât și internaționale (ISIA). Munca noastră, pe parcursul
						taberelor pe care le organizăm atât în sezonul rece cât și în cel
						cald, se bazează pe munca în echipă, comunicarea eficientă,
						creativitate, flexibilitate și leadership
					</Typography>
					<div className={styles.aboutUsSectionImage}>
						<Image
							src={'/pages/about-us/about-us-section.png'}
							fill
							alt={''}
							unoptimized
						/>
					</div>
				</Stack>
			</Section>
			<TeamSection variant='Full' />
			<ContactInfoSection />
		</>
	);
};

export default AbouUs;
