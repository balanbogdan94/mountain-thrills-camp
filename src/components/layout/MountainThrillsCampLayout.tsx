import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './MountainThrillsCampLayout.module.css';

const MountainThrillsCampLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<main className={styles.mainContainer}>{props.children}</main>
			<Footer />
		</>
	);
};

export default MountainThrillsCampLayout;
