import { Box, ListItem, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import style from './TeamItem.module.css';

const TeamItem = (props: {
	imageSrc: string;
	name: string;
	description?: string;
}) => {
	const { imageSrc, name, description } = props;
	return (
		<ListItem className={style.container}>
			<Image
				className={style.image}
				src={imageSrc}
				alt={name}
				width={200}
				height={200}
			/>
			<div className={style.descriptionArea}>
				<Typography
					fontSize={'24px'}
					fontWeight={'600'}
					variant='h6'
					textAlign={'center'}>
					{name}
				</Typography>
				<Typography textAlign={'center'}>{description}</Typography>
			</div>
		</ListItem>
	);
};

export default TeamItem;
