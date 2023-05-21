import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Button, List, ListItem, Stack, Typography } from '@mui/material';
import CampTipeItem from '../components/CampTipeItem';
import { Section } from '../components/layout/Section';
import FormSection from '../components/FormSection';
import Link from 'next/link';
import { BenefitItem } from '@/components/BenefitItem';
import { TeamSection } from '@/components/TeamSection';
import { Routes } from '@/models/Routes';
import CampsCarousel from '@/components/CampsCarousel';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Zero Point</title>
				<meta name='description' content='Home page of Zero Point' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.main}>
				<div className={styles.Splah} />
				<section className={styles.hero}>
					<Stack className={styles.heroBanner}>
						<Stack className={styles.heroContent} alignItems={'center'}>
							<Typography textAlign={'center'} variant='h1'>
								HAI CU NOI ÎN TABĂRĂ
							</Typography>
							<Typography variant='subtitle2' textAlign={'center'}>
								Tabere de schi, Scoăla de schi, E-bike, Schi de tură, Tabere de
								vară la munte!
							</Typography>
							<Link href={Routes.get('Contact') ?? ''}>
								<Button variant='contained' color='secondary'>
									Contactează-ne
								</Button>
							</Link>
						</Stack>
						<div className={styles.heroImage}>
							<Image unoptimized src={'/hero.webp'} alt='hero' fill />
						</div>
					</Stack>
					<List className={styles.benefitsContainer}>
						<BenefitItem icon={'/benefits/Rezultate.svg'} title={'Rezultate'} />
						<BenefitItem
							icon={'/benefits/Profesionalism.svg'}
							title={'Profesionalism'}
						/>
						<BenefitItem
							icon={'/benefits/Seriozitate.svg'}
							title={'Seriozitate'}
						/>
						<BenefitItem icon={'/benefits/Munca.svg'} title={'Muncă'} />
					</List>
				</section>
				<Section title={'Despre noi'}>
					<iframe
						width='90%'
						style={{
							aspectRatio: '16/9',
							borderRadius: '10px',
							marginBottom: '35px',
						}}
						src='https://www.youtube.com/embed/RzVvThhjAKw?controls=0'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					/>
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
							imgSrc={'/camp-types/Bike.png'}
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
				<div className={styles.characteristicsContainer}>
					<Section
						title='Obiectivele noastre'
						className={styles.contrastSection}>
						<Stack gap={'30px'} alignItems={'center'}>
							<div className={styles.characteristicsImage}>
								<Image
									src={'/objectives/group.webp'}
									alt='group of people'
									fill
									style={{ objectFit: 'cover' }}
									unoptimized
								/>
							</div>
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
				</div>
				<TeamSection variant='Simple' />
				<Section title='Următoarele tabere'>
					<CampsCarousel />
				</Section>
				<FormSection />
			</div>
		</>
	);
}
