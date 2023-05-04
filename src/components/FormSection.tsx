import React from 'react';
import { Section } from './layout/Section';
import { Box, Button, FormGroup, TextField, Typography } from '@mui/material';

const FormSection = () => {
	return (
		<Section title='Contacteaza-ne!'>
			<Typography variant='h6' textAlign={'center'} maxWidth={'70vw'}>
				Daca vrei sa afli mai multe trimite-ne un mesaj
			</Typography>
			<FormGroup
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '16px',
					marginTop: '42px',
				}}>
				<Box display={'flex'} flexDirection={'column'} gap={'8px'}>
					<Typography variant='body1'>Nume si prenume</Typography>
					<TextField
						color='secondary'
						id='outlined-basic'
						sx={{ width: '80vw' }}
						placeholder='Nume si prenume'
						variant='outlined'
					/>
				</Box>
				<Box display={'flex'} flexDirection={'column'} gap={'8px'}>
					<Typography variant='body1'>Adresa de email</Typography>
					<TextField
						color='secondary'
						id='outlined-basic'
						placeholder='Adresa de email'
						variant='outlined'
					/>
				</Box>
				<Box display={'flex'} flexDirection={'column'} gap={'8px'}>
					<Typography variant='body1'>Numar de telefon</Typography>
					<TextField
						color='secondary'
						id='outlined-basic'
						placeholder='Numar de telefon'
						variant='outlined'
					/>
				</Box>
				<Box display={'flex'} flexDirection={'column'} gap={'8px'}>
					<Typography variant='body1'>Mesajul tau</Typography>
					<TextField
						id='outlined-multiline-static'
						placeholder='Trimite-ne un mesaj'
						color='secondary'
						multiline
						rows={4}
					/>
				</Box>
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
