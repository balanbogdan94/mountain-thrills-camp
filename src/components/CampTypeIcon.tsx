import { CampType } from '@/models/Camps';
import React from 'react';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import HikingIcon from '@mui/icons-material/Hiking';

const CampTypeIcon = (props: { type: CampType }) => {
	switch (props.type) {
		case CampType.SKY:
			return <DownhillSkiingIcon fontSize='large' />;
		case CampType.MTB:
			return <DirectionsBikeIcon fontSize='large' />;
		case CampType.SUMMER:
			return <HikingIcon fontSize='large' />;
	}
};

export default CampTypeIcon;
