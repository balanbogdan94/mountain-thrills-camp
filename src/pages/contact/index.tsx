import React from 'react';
import FormSection from '../../components/FormSection';
import ContactInfoSection from '@/components/ContactInfoSection';
import Head from 'next/head';

const Contact = () => {
	return (
		<>
			<Head>
				<title>Zero Point</title>
				<meta name='description' content='Home page of Zero Point' />
				<link rel='icon' href='/logo.ico' />
			</Head>
			<div>
				<FormSection />
				<ContactInfoSection />
			</div>
		</>
	);
};

export default Contact;
