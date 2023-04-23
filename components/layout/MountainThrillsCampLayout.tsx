import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MountainThrillsCampLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
	);
};

export default MountainThrillsCampLayout;
