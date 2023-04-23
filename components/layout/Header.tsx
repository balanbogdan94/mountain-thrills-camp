import {
	Box,
	Typography,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Drawer,
	AppBar,
	CssBaseline,
	IconButton,
	Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const navItems = [
	'Acasa',
	'Tabere de vara',
	'Tabere MTB',
	'Tabere SKI',
	'Contact',
];

const drawerWidth = 240;

const Header = () => {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar component='nav' sx={{ zIndex: 2000 }}>
				<Toolbar>
					<IconButton
						sx={{ marginRight: 0, marginLeft: 'auto' }}
						color='inherit'
						aria-label='open drawer'
						edge='end'
						onClick={handleDrawerToggle}>
						{mobileOpen ? <CloseIcon /> : <MenuIcon />}
					</IconButton>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					variant='temporary'
					anchor='top'
					open={mobileOpen}
					elevation={100}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						marginTop: '64px',
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: '100%',
						},
					}}>
					<Box
						onClick={handleDrawerToggle}
						sx={{ textAlign: 'center', height: '100vh', paddingTop: '100px' }}>
						<List>
							{navItems.map((item) => (
								<ListItem key={item} disablePadding>
									<ListItemButton sx={{ textAlign: 'center' }}>
										<ListItemText
											primary={item}
											primaryTypographyProps={{
												fontSize: '24px',
												fontWeight: '600',
												lineHeight: '27.5px',
											}}
										/>
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>
				</Drawer>
			</Box>
		</Box>
	);
};

export default Header;
