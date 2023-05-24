import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Button, List, Stack, Typography } from '@mui/material';
import CampTipeItem from '../components/CampTipeItem';
import { Section } from '../components/layout/Section';
import FormSection from '../components/FormSection';
import Link from 'next/link';
import { BenefitItem } from '@/components/BenefitItem';
import { TeamSection } from '@/components/TeamSection';
import { Routes } from '@/models/Routes';
import CampsCarousel from '@/components/CampsCarousel';

const benefits = [
	{ text: 'Tabere de vara', imageSrc: './benefits/tabereVara.png' },
	{
		text: 'Tabere de comunicare (parintii si copii)',
		imageSrc: './benefits/tabereComunicare.png',
	},
	{
		text: 'Excursii cu bicicleta',
		imageSrc: './benefits/excursiiBicicleta.png',
	},
	{ text: 'Initieri MTB', imageSrc: './benefits/initieriMTB.png' },
	{ text: 'Tabere de SKI', imageSrc: './benefits/tabereSki.png' },
];
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
							<div className={styles.title}>
								<Image unoptimized src={'/title.svg'} alt='logo' fill />
							</div>
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
							<Image unoptimized src={'/hero.png'} alt='hero' fill />
						</div>
					</Stack>
					<List className={styles.benefitsContainer}>
						{benefits.map((benefit, index) => (
							<Stack
								key={index}
								className={styles.benefitItem}
								direction={'column'}
								alignItems={'center'}
								gap='18px'>
								<div className={styles.benefitImage}>
									<Image
										src={benefit.imageSrc}
										alt={benefit.text}
										fill
										unoptimized
									/>
								</div>
								<Typography
									fontWeight={900}
									textAlign={'center'}
									variant='body1'>
									{benefit.text}
								</Typography>
							</Stack>
						))}
					</List>
				</section>
				<Section title={'Despre noi'}>
					<iframe
						src='https://www.youtube.com/embed/9SRFL8wrrzA'
						className={styles.video}
						title='Zero Point'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
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
				<FormSection />
			</div>
		</>
	);
}
