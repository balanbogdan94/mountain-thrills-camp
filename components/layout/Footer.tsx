import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
	return (
		<Grid container sx={{ backgroundColor: '#0E0E0E' }}>
			<Grid item xs={6}>
				<List>
					<ListItem>
						<ListItemText>Acasa</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Tabere de vara</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Drumetii MTB</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Tabere SKI</ListItemText>
					</ListItem>
				</List>
			</Grid>
			<Grid xs={6} sx={{ alignContent: 'flex-end' }}>
				<>
					<Typography fontWeight={600}>Contact</Typography>
					<List>
						<ListItem>
							<ListItemText>(480)555-0103</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemText>(239)555-0108</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemText>zeropoint@gmail.com</ListItemText>
						</ListItem>
					</List>
				</>
			</Grid>
			<Grid item xs={6}>
				<List>
					<ListItem>
						<ListItemText>Terms of service</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Privacy policy</ListItemText>
					</ListItem>
				</List>
			</Grid>
			<Grid item xs={6}>
				<Typography>Social media</Typography>
				<List
					sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
					<ListItem>
						<InstagramIcon />
					</ListItem>
					<ListItem>
						<FacebookRoundedIcon />
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
