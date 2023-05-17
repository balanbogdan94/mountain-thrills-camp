import { Box, ListItem, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import style from './TeamItem.module.css';

const TeamItem = (props: {
	imageSrc: string;
	name: string;
	description?: string;
	items?: ReactNode;
	variant?: 'Simple' | 'Full';
}) => {
	const { imageSrc, name, description, variant } = props;
	return (
		<ListItem
			className={
				variant === 'Simple' ? style.containerSimple : style.container
			}>
			<Image
				className={variant === 'Simple' ? style.imageSimple : style.image}
				src={imageSrc}
				alt={name}
				unoptimized
				width={200}
				height={200}
				priority={false}
			/>
			<div
				className={
					variant === 'Simple'
						? style.descriptionAreaSimple
						: style.descriptionArea
				}>
				<Typography
					fontSize={'24px'}
					fontWeight={'600'}
					variant='h6'
					textAlign={'center'}>
					{name}
				</Typography>
				<Typography textAlign={'center'}>{description}</Typography>
				{props.variant === 'Full' ? props.items : null}
			</div>
		</ListItem>
	);
};

export default TeamItem;
