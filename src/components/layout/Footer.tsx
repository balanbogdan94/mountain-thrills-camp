import {
	Grid,
	List,
	ListItem,
	ListItemText,
	Stack,
	Typography,
	useMediaQuery,
} from '@mui/material';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import style from './Footer.module.css';
import Image from 'next/image';
import { navItems } from '@/models/Routes';
// ! Refactor CSS
const Footer = () => {
	// ? TODO: Better media query
	const matches = useMediaQuery('(width < 768px)');
	return matches ? (
		<Grid className={style.container} container rowGap={'40px'}>
			<Grid item xs={6}>
				<List
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '16px',
						fontSize: '12px',
						fontWeight: '600',
					}}>
					{navItems.map((item) => (
						<ListItem key={item.name}>
							<Link href={item.route}>{item.name}</Link>
						</ListItem>
					))}
				</List>
			</Grid>
			<Grid item xs={6}>
				<Stack alignItems={'flex-end'}>
					<Typography fontWeight={600}>Contact</Typography>
					<List
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							gap: '16px',
							fontSize: '12px',
							fontWeight: '400',
						}}>
						<ListItem sx={{ justifyContent: 'flex-end' }}>
							<Link href={'tel:+40 768 762 045'}>+40 768 762 045</Link>
						</ListItem>
						<ListItem sx={{ justifyContent: 'flex-end' }}>
							<Link href={'mailto:Roxana.zeropoint@gmail.com'}>
								Roxana.zeropoint@gmail.com
							</Link>
						</ListItem>
					</List>
				</Stack>
			</Grid>
			<Grid item xs={6}></Grid>
			<Grid item xs={6}>
				<Stack direction={'column'} alignItems={'flex-end'}>
					<Typography fontSize={'12px'} fontWeight={600}>
						Social media
					</Typography>
					<List
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-end',
							gap: '16px',
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
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Typography
					align='center'
					color='white'
					fontSize={'12px'}
					fontWeight={600}>
					© 2023 ZeroPoint. All rights reserved
				</Typography>
			</Grid>
		</Grid>
	) : (
		<Grid
			className={style.container}
			container
			rowGap={'40px'}
			alignItems={'center'}>
			<Grid xs={6} item>
				<Image src={'/logoDark.svg'} alt={'logo'} width={200} height={200} />
			</Grid>
			<Grid item xs={6}>
				<Stack
					direction={'row'}
					alignItems={'flex-start'}
					justifyContent={'space-between'}>
					<List
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '16px',
							fontSize: '18px',
							fontWeight: '600',
						}}>
						{navItems.map((item) => (
							<ListItem key={item.name}>
								<Link href={item.route}>{item.name}</Link>
							</ListItem>
						))}
					</List>
					<div>
						<Typography fontWeight={600}>Contact</Typography>
						<List
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'flex-start',
								gap: '16px',
								fontSize: '18px',
								fontWeight: '400',
							}}>
							<ListItem>
								<Link href={'tel:+40 768 762 045'}>+40 768 762 045</Link>
							</ListItem>
							<ListItem>
								<Link href={'mailto:Roxana.zeropoint@gmail.com'}>
									Roxana.zeropoint@gmail.com
								</Link>
							</ListItem>
						</List>
					</div>
					<div>
						<Typography fontSize={'18px'} fontWeight={600}>
							Social media
						</Typography>
						<List
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
								gap: '16px',
							}}>
							<ListItem>
								<Link
									href='https://www.instagram.com/zeropoint.ro/'
									target='_blank'>
									<InstagramIcon fontSize='large' />
								</Link>
							</ListItem>
							<ListItem>
								<Link href={''}>
									<FacebookRoundedIcon fontSize='large' />
								</Link>
							</ListItem>
						</List>
					</div>
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Typography
					align='center'
					color='white'
					fontSize={'12px'}
					fontWeight={600}>
					© 2023 ZeroPoint. All rights reserved
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Footer;
