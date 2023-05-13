import {
	Box,
	List,
	ListItem,
	Drawer,
	AppBar,
	IconButton,
	Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import Link from 'next/link';
import style from './Header.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const navItems = [
	{ name: 'Acasa', route: '/' },
	{ name: 'Despre noi', route: '/despre-noi' },
	{ name: 'Tabere de vara', route: '/tabere-vara' },
	{ name: 'Drumetii MTB', route: '/drumetii-mtb' },
	{ name: 'Tabere SKI', route: '/tabere-ski' },
	{ name: 'Contact', route: '/contact' },
];

const MenuList = () => {
	const router = useRouter();
	return (
		<List className={`${style.menuItems}`}>
			{navItems.map((item) => (
				<ListItem key={item.name} disablePadding>
					<Link
						className={
							router.pathname === item.route ? style.activeMenuItem : ''
						}
						style={{ wordWrap: 'unset' }}
						href={item.route}>
						{item.name}
					</Link>
				</ListItem>
			))}
		</List>
	);
};

const Header = () => {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	return (
		<>
			<AppBar component='nav' sx={{ zIndex: 2000 }}>
				<Toolbar>
					<Image src={'/logoDark.svg'} alt='logo' width={60} height={60} />
					<IconButton
						className={`${style.menuContent} ${style.hamburger}`}
						color='inherit'
						aria-label='open drawer'
						edge='end'
						onClick={handleDrawerToggle}>
						{mobileOpen ? <CloseIcon /> : <MenuIcon />}
					</IconButton>
					<div className={`${style.menuLinkContainer} ${style.menuContent}`}>
						<MenuList />
					</div>
				</Toolbar>
			</AppBar>
			<Box>
				<Drawer
					variant='temporary'
					anchor='top'
					open={mobileOpen}
					transitionDuration={1000}
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
					<div
						className={style.hamburgerMenuContent}
						onClick={handleDrawerToggle}>
						<MenuList />
					</div>
				</Drawer>
			</Box>
		</>
	);
};

export default Header;
