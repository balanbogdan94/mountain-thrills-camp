import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

const Footer = () => {
	return (
		<Grid container>
			<Grid container xs={6} direction={'column'}>
				<List sx={{ gap: '16px' }}>
					<ListItem>
						<Link href={''}>Acasa</Link>
					</ListItem>
					<ListItem>
						<Link href={''}>Tabere de vara</Link>
					</ListItem>
					<ListItem>
						<Link href={''}>Drumetii MTB</Link>
					</ListItem>
					<ListItem>
						<Link href={''}>Tabere SKI</Link>
					</ListItem>
				</List>
			</Grid>
			<Grid container xs={6} direction={'column'} alignItems={'flex-end'}>
				<>
					<Typography fontWeight={600}>Contact</Typography>
					<List
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
						}}>
						<ListItem sx={{ justifyContent: 'flex-end' }}>
							<Link href={''}>(480)555-0103</Link>
						</ListItem>
						<ListItem sx={{ justifyContent: 'flex-end' }}>
							<Link href={''}>(239)555-0108</Link>
						</ListItem>
						<ListItem sx={{ justifyContent: 'flex-end' }}>
							<Link href={''}>zeropoint@gmail.com</Link>
						</ListItem>
					</List>
				</>
			</Grid>
			<Grid item xs={6}>
				<List>
					<ListItem>
						<Link href={''}>Privacy policy</Link>
					</ListItem>
				</List>
			</Grid>
			<Grid container direction={'column'} alignItems={'flex-end'} xs={6}>
				<Typography>Social media</Typography>
				<List
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-end',
					}}>
					<ListItem>
						<Link href=''>
							<InstagramIcon />
						</Link>
					</ListItem>
					<ListItem>
						<Link href={''}>
							<FacebookRoundedIcon />
						</Link>
					</ListItem>
				</List>
			</Grid>
			<Grid item xs={12}>
				<Typography align='center' color='white' fontWeight={500}>
					© 2023 ZeroPoint. All rights reserved
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Footer;
