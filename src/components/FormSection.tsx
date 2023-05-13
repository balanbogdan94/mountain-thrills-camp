import React from 'react';
import { Section } from './layout/Section';
import { Button, FormGroup, Stack, TextField, Typography } from '@mui/material';
import style from './FormSection.module.css';

const FormSection = () => {
	return (
		<Section className={style.formContainer} title='Contacteaza-ne!'>
			<Typography variant='h6' textAlign={'center'} maxWidth={'70vw'}>
				Daca vrei sa afli mai multe trimite-ne un mesaj
			</Typography>
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
						id='outlined-basic'
						placeholder='Nume si prenume'
						variant='outlined'
					/>
				</Stack>
				<Stack flexDirection={'column'} gap={'8px'}>
					<Typography variant='body1'>Adresa de email</Typography>
					<TextField
						color='secondary'
						id='outlined-basic'
						placeholder='Adresa de email'
						variant='outlined'
					/>
				</Stack>
				<Stack flexDirection={'column'} gap={'8px'}>
					<Typography variant='body1'>Numar de telefon</Typography>
					<TextField
						color='secondary'
						id='outlined-basic'
						placeholder='Numar de telefon'
						variant='outlined'
					/>
				</Stack>
				<Stack flexDirection={'column'} gap={'8px'}>
					<Typography variant='body1'>Mesajul tau</Typography>
					<TextField
						id='outlined-multiline-static'
						placeholder='Trimite-ne un mesaj'
						color='secondary'
						multiline
						rows={4}
					/>
				</Stack>
				<Button
					variant='contained'
					color='secondary'
					sx={{ minHeight: '36px', borderRadius: '8px' }}>
					Trimite
				</Button>
			</FormGroup>
		</Section>
	);
};

export default FormSection;
