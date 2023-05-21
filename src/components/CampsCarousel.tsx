import { camps } from '@/models/Camps';
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import styles from './CampsCarousel.module.css';
import CampTypeIcon from './CampTypeIcon';
import CampDateItem from './CampDateItem';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const CampsCarousel = () => {
	const items =
		camps &&
		camps
			.filter((i) => i.endDate > new Date())
			.sort(
				(camp1, camp2) => camp1.startDate.getDate() - camp2.startDate.getDate(),
			);
	const scrollBar = React.useRef<HTMLDivElement>(null);
	const onButtonCLick = (direction: 'RIGHT' | 'LEFT') => () => {
		const scrollOffset = 200;
		direction === 'LEFT'
			? scrollBar.current?.scrollBy({ left: -scrollOffset, behavior: 'smooth' })
			: scrollBar.current?.scrollBy({ left: scrollOffset, behavior: 'smooth' });
	};
	return (
		<Stack direction={'row'}>
			<Button onClick={onButtonCLick('LEFT')}>
				<ArrowBackIosNewIcon className={styles.arrowButton} fontSize='large' />
			</Button>
			<div ref={scrollBar} className={styles.carusel}>
				{items.map((item) => (
					<div key={item.id} className={styles.itemContainer}>
						<Image src={item.imageSrc} fill alt='' unoptimized />
						<Stack className={styles.textContent} gap={'15px'}>
							<CampTypeIcon type={item.type} />
							<Stack gap={'8px'}>
								<Typography variant='h2'>{item.title}</Typography>
								<Typography variant='body1'>
									<CampDateItem
										startDate={item.startDate}
										endDate={item.endDate}
									/>
								</Typography>
							</Stack>
						</Stack>
					</div>
				))}
			</div>
			<Button onClick={onButtonCLick('RIGHT')}>
				<ArrowBackIosNewIcon
					className={`${styles.arrowButton} ${styles.rightIcon}`}
					fontSize='large'
				/>
			</Button>
		</Stack>
	);
};

export default CampsCarousel;
