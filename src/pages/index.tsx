import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/pages/Home.module.css';
import { Button, List, Stack, Typography, useTheme } from '@mui/material';
import CampTipeItem from '../components/CampTipeItem';
import { Section } from '../components/layout/Section';
import FormSection from '../components/FormSection';
import Link from 'next/link';
import { BenefitItem } from '@/components/BenefitItem';
import { TeamSection } from '@/components/TeamSection';
import { Routes } from '@/models/Routes';
import CampsCarousel from '@/components/CampsCarousel';
import { heroCampTypes } from '@/models/Camps';
import HeroCampTypeItem from '@/components/HeroCampTypeItem';

export default function Home() {
	const theme = useTheme();
	return (
		<>
			<Head>
				<title>Zero Point</title>
				<meta name='description' content='Home page of Zero Point' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/logo.ico' />
			</Head>
			<div className={styles.main}>
				<div className={styles.Splah} />
				<section className={styles.hero}>
					<Stack className={styles.heroBanner}>
						<Stack className={styles.heroContent} alignItems={'center'}>
							<div className={styles.title}>
								<Image
									unoptimized
									src={'/title.svg'}
									alt='logo'
									fill
									priority
								/>
							</div>
							<Typography variant='subtitle2'>
								Scoală de ski, MTB, Ski, Tabere de vară la munte!
							</Typography>
							<Link href={Routes.get('Contact') ?? ''}>
								<Button variant='contained' color='secondary'>
									Contactează-ne
								</Button>
							</Link>
						</Stack>
						<div className={styles.heroImage}>
							<Image unoptimized src={'/hero.png'} alt='hero' fill />
						</div>
					</Stack>
					<List className={styles.heroCampTypeList}>
						{heroCampTypes.map((campType, index) => (
							<HeroCampTypeItem key={index} campType={campType} />
						))}
					</List>
				</section>
				<Section title={'Despre noi'}>
					<iframe
						src='https://www.youtube.com/embed/9SRFL8wrrzA'
						className={styles.video}
						title='Zero Point'
						allowFullScreen></iframe>
				</Section>

				<Section title='Tipuri de tabere'>
					<List className={styles.campTypeContainer}>
						<CampTipeItem
							imgSrc={'/camp-types/SummerCamp.png'}
							title={'Tabere de vară'}
							description={
								'Taberele de vară  sunt o oportunitate pentru fiecare copil pentru a-și dezvolta anumite abilități, dar și pentru a se distra, socializa și pentru a lega noi prietenii'
							}
							link={Routes.get('Tabere de vară') ?? ''}
						/>
						<CampTipeItem
							imgSrc={'/camp-types/Bike2.png'}
							title={'Drumeții MTB'}
							description={
								'Ciclismul  este una dintre cele mai bune metode de a te bucura de natură și de beneficiile incontestabile ale pedalatului pe două roți. Te invităm să te bucuri alături de noi pedalând '
							}
							link={Routes.get('Tabere MTB') ?? ''}
						/>
						<CampTipeItem
							imgSrc={'/camp-types/Ski.png'}
							title={'Tabere SKI'}
							description={
								'Taberele de schi și snowboard oferă copiiilor și adolesceților ocazia de a învăța să schieze și să se dea pe snowboard sub atenta îndrumare a unei echipe de monitori cu experiență și foști schiori de performanță'
							}
							link={Routes.get('Tabere SKI') ?? ''}
						/>
					</List>
				</Section>
				<Section title='Obiectivele noastre' className={styles.contrastSection}>
					<Stack gap={'30px'} alignItems={'center'} width={'100%'}>
						<Stack className={styles.benefitsTextContent}>
							<BenefitItem
								icon={'/objectives/ExercitiuFizic.svg'}
								title='Exercițiu fizic'
								description='Promovarea exercițiului fizic, în aer liber, baza fiind schi-ul și biking-ul, desfășurat în deplină siguranță'
							/>
							<BenefitItem
								icon={'/objectives/Educare.svg'}
								title='Educare'
								description='Educare prin sport și exercițiu fizic organizat, adoptarea unui stil de viață sănătos, precum și conectarea cu natura'
							/>
							<BenefitItem
								icon={'/objectives/ActivitatiRecreative.svg'}
								title='Activități recreative'
								description='Organizarea de activități recreative atât pentru copii cât și pentru familii'
							/>
							<BenefitItem
								icon={'/objectives/Dezvoltare.svg'}
								title='Dezvoltare'
								description='Motivarea pentru dezvoltarea capacităților fizice, a spiritului de echipă, a fair-play-ului și a competivități '
							/>
						</Stack>
					</Stack>
				</Section>
				<TeamSection variant='Simple' />
				<Section title='Următoarele tabere'>
					<CampsCarousel />
				</Section>
				<div className={styles.formSection}>
					<FormSection />
				</div>
			</div>
		</>
	);
}
