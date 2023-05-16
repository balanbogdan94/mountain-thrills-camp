import { List } from '@mui/material';
import TeamItem from './TeamItem';
import { Section } from './layout/Section';
import styles from './TeamSection.module.css';

export const TeamSection = (props: { variant: 'Simple' | 'Full' }) => (
	<Section title='Echipa'>
		<List className={styles.teamContainer}>
			<TeamItem
				imageSrc={'/team/3.png'}
				name={'Roxana'}
				description={
					'„Din tată în fiică", crescută pe munte având tatăl Șef al Serviciului Salvamont Hunedoara,organizator al taberelor de copii din munții Retezat'
				}
				variant={props.variant}
			/>
			<TeamItem
				imageSrc={'/team/2.png'}
				name={'Laura'}
				description={
					'A urcat pe munte prima dată la vârsta de 5 ani, și de atunci călătorește alături de copilul ei și alții copii pe care îi initiază în tainele schiului ,drumețiilor, a jocurilor în aer liber'
				}
				variant={props.variant}
			/>
			<TeamItem
				imageSrc={'/team/1.png'}
				name={'Cosmin'}
				description={
					'Un împătimit al snowbordului ,freestyle ,off-piste,al muntelui,al mountain bike'
				}
				variant={props.variant}
			/>
			<TeamItem
				imageSrc={'/team/4.png'}
				name={'Gabi'}
				description={
					'Cu o experiență montană deosebită,un alpinist și schior de performanță,un împătimit al MTB-ului'
				}
				variant={props.variant}
			/>
			<TeamItem
				imageSrc={'/team/5.png'}
				name={'Bogdan'}
				description={
					'Practică această meserie cu pasiune și devotament, este un bun cunoscător al traseelor montane și al tehnicilor de schi'
				}
				variant={props.variant}
			/>
			<TeamItem
				imageSrc={'/team/6.png'}
				name={'Marian'}
				description={
					'Crede în educația experiențială și este recunoscut ca unul dintre cel mai creativ,empatic și cu simțul umorului'
				}
				variant={props.variant}
			/>
		</List>
	</Section>
);
