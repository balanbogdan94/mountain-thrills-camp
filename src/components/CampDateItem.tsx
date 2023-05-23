import { Stack, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import React from 'react';

const CampDateItem = (props: { startDate: Date; endDate: Date }) => {
	const formatStartDate = props.startDate.toLocaleDateString('en-GB', {
		// you can use undefined as first argument
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	});
	const text = `${getDay2Digits(props.startDate)}.${getMonth2Digits(
		props.startDate,
	)} - ${getDay2Digits(props.endDate)}.${getMonth2Digits(
		props.startDate,
	)}.${props.startDate.getFullYear()}`;
	return (
		<Stack direction={'row'} gap={'12px'} alignItems={'center'}>
			<CalendarTodayIcon fontSize='small' />
			<Typography>{text}</Typography>
		</Stack>
	);
};

export default CampDateItem;

function getMonth2Digits(date: Date) {
	const month = String(date.getMonth() + 1).padStart(2, '0');

	return month;
}

function getDay2Digits(date: Date) {
	const day = String(date.getDate()).padStart(2, '0');

	return day;
}
