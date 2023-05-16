import NoItemSection from '../../components/NoItemSection';
import { camps, CampType } from '../../models/Camps';
import React from 'react';

const SkyCamps = () => {
	const items = camps && camps.filter((camp) => camp.type === CampType.SKY);

	if (items.length === 0) return <NoItemSection />;
	return <div>index</div>;
};

export default SkyCamps;
