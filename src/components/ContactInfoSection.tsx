import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { Section } from './layout/Section';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import styles from './ContactInfoSection.module.css';

const ContactInfoSection = () => {
	return (
		<Section title='Contactează-ne acum pentru informații suplimentare'>
			<div className={styles.container}>
				<Divider />
				<Stack className={styles.itemContainer}>
					<Stack className={styles.item}>
						<CallOutlinedIcon fontSize='large' />
						<Stack className={styles.itemText}>
							<Typography fontSize={'16px'} fontWeight={600} color={'#3D3D3D'}>
								Suna-ne
							</Typography>
							<Typography fontSize={'20px'} fontWeight={900}>
								+40 768 762 045
							</Typography>
						</Stack>
					</Stack>
					<Stack className={styles.item}>
						<EmailOutlinedIcon fontSize='large' />
						<Stack className={styles.itemText}>
							<Typography fontSize={'16px'} fontWeight={600} color={'#3D3D3D'}>
								Trimite-ne un mesaj
							</Typography>
							<Typography fontSize={'20px'} fontWeight={900}>
								zeropoint@gmail.com
							</Typography>
						</Stack>
					</Stack>
				</Stack>
				<Divider />
			</div>
		</Section>
	);
};

export default ContactInfoSection;
