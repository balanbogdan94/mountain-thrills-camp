import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Home.module.css";
import { Button, List, Stack, Typography, useTheme } from "@mui/material";
import CampTypeItem from "../components/CampTipeItem";
import { Section } from "../components/layout/Section";
import FormSection from "../components/FormSection";
import Link from "next/link";
import { BenefitItem } from "@/components/BenefitItem";
import { TeamSection } from "@/components/TeamSection";
import ZeroPointRoutes from "@/models/Routes";
import CampsCarousel from "@/components/CampsCarousel";
import { CampActivities, campTypes } from "@/models/Camps";
import ActivityItem from "@/components/HeroCampTypeItem";
import { lovedByTheKing } from "@/styles/fonts";
import { benefitItems } from "@/models/Benefits";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
//   TODO: review code and add comments
// ? TODO: add internationalization
// ! TODO: review accessibility

export default function Home() {
  return (
    <>
      {/* { TODO: Create Head component }  Add OG images*/}
      <Head>
        <title>Zero Point</title>
        <meta name="description" content="Home page of Zero Point" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.Splah} />
        <section className={styles.heroContainer}>
          <Stack
            className={`${styles.callToActionRoot} ${lovedByTheKing.variable}`}
          >
            <Typography variant="h1" className={styles.callToActionTitle}>
              Hai cu noi în <b className={styles.titleHighlighted}>aventura</b>
            </Typography>
            <Typography variant="subtitle2">
              Tabere de vară, Excursii MTB, Tabere ski!
            </Typography>
            <Link href={ZeroPointRoutes.Contact.path}>
              <Button variant="contained" color="secondary">
                Contactează-ne
              </Button>
            </Link>
          </Stack>
          <div className={styles.heroImage}>
            <Image unoptimized src={"/hero.webp"} alt="hero" fill />
          </div>
        </section>
        <section>
          <List className={styles.activitiesContainer}>
            {CampActivities.map((activities) => (
              <ActivityItem
                key={activities.text}
                imageSrc={activities.imageSrc}
                text={activities.text}
              />
            ))}
          </List>
        </section>
        <Section title={"Despre noi"}>
          <iframe
            src="https://www.youtube.com/embed/9SRFL8wrrzA"
            className={styles.video}
            title="Zero Point"
            allowFullScreen
          ></iframe>
        </Section>
        <Section title="Tipuri de tabere">
          <List className={styles.campTypeContainer}>
            {campTypes.map((ct) => (
              <CampTypeItem
                key={ct.title}
                imgSrc={ct.imgSrc}
                title={ct.title}
                description={ct.description}
                link={ct.link}
              />
            ))}
          </List>
        </Section>
        <Section
          title="Obiectivele noastre"
          className={styles.objectivesContainerRoot}
        >
          <Stack className={styles.objectivesContent}>
            {benefitItems.map((bi) => (
              <BenefitItem
                key={bi.title}
                icon={bi.icon}
                title={bi.title}
                description={bi.description}
              />
            ))}
          </Stack>
        </Section>
        <TeamSection variant="Simple" />
        <Section title="Următoarele tabere">
          <CampsCarousel />
        </Section>
        <section className={styles.formSection}>
          <FormSection />
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale ?? "en")),
    },
  };
};
