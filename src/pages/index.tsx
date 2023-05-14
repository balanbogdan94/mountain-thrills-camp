import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Box, Button, List, ListItem, Stack, Typography } from '@mui/material';
import CampTipeItem from '../components/CampTipeItem';
import { Section } from '../components/layout/Section';
import FormSection from '../components/FormSection';
import Link from 'next/link';
import { navItems } from '@/components/layout/Header';
import TeamItem from '@/components/TeamItem';
import { BenefitItem } from '@/components/BenefitItem';
import { TeamSection } from '@/components/TeamSection';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.main}>
				<section className={styles.hero}>
					<Stack className={styles.heroBanner}>
						<Stack className={styles.heroContent} alignItems={'center'}>
							<Typography textAlign={'center'} variant='h1' lineHeight={'28px'}>
								HAI CU NOI IN TABARA
							</Typography>
							<Typography variant='subtitle1' textAlign={'center'}>
								Tabere de schi, Scoala de schi, E-bike, Schi de tura, Tabere de
								vara la munte!
							</Typography>
							<Link
								href={navItems.find((f) => f.name === 'Contact')?.route ?? ''}>
								<Button variant='contained' color='secondary'>
									Contacteaza-ne
								</Button>
							</Link>
						</Stack>
						<div className={styles.heroImage}>
							<Image src={'/hero.jpg'} alt='hero' fill />
						</div>
					</Stack>
					<List className={styles.benefitsContainer}>
						<BenefitItem
							icon={'/benefits/Brain.svg'}
							title={'Deprinderea de cunostinte noi'}
						/>
						<BenefitItem
							icon={'/benefits/Yoga.svg'}
							title={'Joaca, relaxare si distractie'}
						/>
						<BenefitItem
							icon={'/benefits/LifeStyle.svg'}
							title={'Incurajarea unui stil de viata activ'}
						/>
						<BenefitItem
							icon={'/benefits/forest.svg'}
							title={'Conectare cu mediul inconjurator'}
						/>
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
					<Typography variant='body1' textAlign={'center'} maxWidth={'80%'}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</Typography>
				</Section>

				<Section title='Tipuri de tabere'>
					<List className={styles.campTypeContainer}>
						<CampTipeItem
							imgSrc={'/camp-types/SummerCamp.png'}
							title={'Tabere de vara'}
							description={
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris '
							}
							link={''}
						/>
						<CampTipeItem
							imgSrc={'/camp-types/Bike.png'}
							title={'Drumetii MTB'}
							description={
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris '
							}
							link={''}
						/>
						<CampTipeItem
							imgSrc={'/camp-types/Ski.png'}
							title={'Tabere SKI'}
							description={
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris '
							}
							link={''}
						/>
					</List>
				</Section>
				<div className={styles.characteristicsContainer}>
					<Section
						title='Ce ne caracterizeaza'
						className={styles.contrastSection}>
						<Stack gap={'30px'} alignItems={'center'}>
							<div className={styles.characteristicsImage}>
								<Image
									src={'/caracterize-items/group.png'}
									alt='group of people'
									fill
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<Stack className={styles.benefitsTextContent}>
								<BenefitItem
									icon={'/caracterize-items/1.svg'}
									title='Profesionalism'
									description='Ghizi si Instructori specializati si atestati  Ghizi Montani atestati si Monitori autorizati ISIA si AMPSR.'
								/>
								<BenefitItem
									icon={'/caracterize-items/2.svg'}
									title='Adaptare'
									description='Indiferent de varsta, stângăcia si temerile clientilor echipa noastra e pregatita sa faca față celor mai dificile situatii.'
								/>
								<BenefitItem
									icon={'/caracterize-items/4.svg'}
									title='Siguranta'
									description='Monitorii si ghizii nostri prin daruirea si profesionalismul fac ca si cea mai grea incercare sa para usoara.'
								/>
								<BenefitItem
									icon={'/caracterize-items/3.svg'}
									title='Rabdare si atentie'
									description='Monitorii si ghizii nostri prin daruirea si profesionalismul fac ca si cea mai grea incercare sa para usoara.'
								/>
							</Stack>
						</Stack>
					</Section>
				</div>
				<TeamSection />
				<FormSection />
			</div>
		</>
	);
}
