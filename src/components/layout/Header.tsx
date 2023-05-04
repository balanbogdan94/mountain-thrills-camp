import {
	Box,
	List,
	ListItem,
	Drawer,
	AppBar,
	CssBaseline,
	IconButton,
	Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import Link from 'next/link';

export const navItems = [
	{ name: 'Acasa', route: '/' },
	{ name: 'Tabere de vara', route: '/tabere-de-vara' },
	{ name: 'Drumetii MTB', route: '/drumetii-mtb' },
	{ name: 'Tabere SKI', route: '/tabere-ski' },
	{ name: 'Contact', route: '/contact' },
];

const Header = () => {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	return (
		<Box sx={{ display: 'flex' }}>
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
			<Box>
				<Drawer
					variant='temporary'
					anchor='top'
					open={mobileOpen}
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
								<ListItem key={item.name} disablePadding>
									<Link href={item.route}>{item.name}</Link>
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
