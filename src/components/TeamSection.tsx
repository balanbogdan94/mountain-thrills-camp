import { List } from '@mui/material';
import TeamItem from './TeamItem';
import { Section } from './layout/Section';
import styles from './TeamSection.module.css';

export const TeamSection = () => (
	<Section title='Echipa'>
		<List className={styles.teamContainer}>
			<TeamItem
				imageSrc={'/team/2.png'}
				name={'Laura'}
				description={
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  '
				}
			/>
			<TeamItem
				imageSrc={'/team/3.png'}
				name={'Roxana'}
				description={
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  '
				}
			/>
			<TeamItem
				imageSrc={'/team/4.png'}
				name={'Gabi'}
				description={
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  '
				}
			/>
			<TeamItem
				imageSrc={'/team/1.png'}
				name={'Cosmin'}
				description={
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  '
				}
			/>
		</List>
	</Section>
);
