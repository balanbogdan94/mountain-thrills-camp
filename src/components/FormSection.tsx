import React, { useState } from 'react';
import { Section } from './layout/Section';
import { Button, FormGroup, Stack, TextField, Typography } from '@mui/material';
import style from './FormSection.module.css';

const FormSection = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	return (
		<Section className={style.formContainer} title='Contacteaza-ne!'>
			<div className={style.blobTop} />
			<div className={style.blobBottom} />
			<Typography variant='h6' textAlign={'center'} maxWidth={'70vw'}>
				Daca vrei sa afli mai multe trimite-ne un mesaj
			</Typography>
			<form
				action='https://formsubmit.co/2ed01d15d7eab85a56241eb0b1ff76d1'
				method='POST'>
				<FormGroup
					className={style.form}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '16px',
						marginTop: '42px',
					}}>
					<Stack flexDirection={'column'} gap={'8px'} width={'100%'}>
						<Typography variant='body1'>Nume si prenume</Typography>
						<TextField
							color='secondary'
							name='Nume si prenume'
							id='outlined-basic'
							placeholder='Nume si prenume'
							variant='outlined'
							required
						/>
					</Stack>
					<Stack flexDirection={'column'} gap={'8px'}>
						<Typography variant='body1'>Adresa de email</Typography>
						<TextField
							color='secondary'
							id='outlined-basic'
							name='Adresa de email'
							placeholder='Adresa de email'
							variant='outlined'
							type='email'
							required
						/>
					</Stack>
					<Stack flexDirection={'column'} gap={'8px'}>
						<Typography variant='body1'>Numar de telefon</Typography>
						<TextField
							color='secondary'
							id='outlined-basic'
							name='Numar de telefon'
							type='number'
							placeholder='Numar de telefon'
							variant='outlined'
							required
						/>
					</Stack>
					<Stack flexDirection={'column'} gap={'8px'}>
						<Typography variant='body1'>Mesajul tau</Typography>
						<TextField
							id='outlined-multiline-static'
							placeholder='Trimite-ne un mesaj'
							name='Mesajul'
							color='secondary'
							multiline
							rows={4}
						/>
					</Stack>
					<Button
						variant='contained'
						color='secondary'
						type='submit'
						sx={{ minHeight: '36px', borderRadius: '8px' }}>
						Trimite
					</Button>
				</FormGroup>
			</form>
		</Section>
	);
};

export default FormSection;
