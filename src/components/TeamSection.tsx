import { List } from '@mui/material';
import TeamItem from './TeamItem';
import { Section } from './layout/Section';
import styles from './TeamSection.module.css';

export const TeamSection = (props: { variant: 'Simple' | 'Full' }) => (
	<Section title='Echipa'>
		<List className={styles.teamContainer}>
			<TeamItem
				imageSrc={'/team/3.png'}
				name={props.variant === 'Simple' ? 'Roxana' : 'Roxana Schiau'}
				description={
					props.variant === 'Simple'
						? '„Din tată în fiică", crescută pe munte având tatăl Șef al Serviciului Salvamont Hunedoara,organizator al taberelor de copii din munții Retezat'
						: '„Din tată în fiică", crescută pe munte având tatăl Șef al Servicului Salvamont Hunedoara, organizator al taberelor de copii din munții Retezat, a moștenit pasiune pentru cei mici, de a le insufla schiul, mersul pe munte, contactul cu natura, joacă, comunicarea, creativitatea ,siguranță, încrederea în ceea ce fac'
				}
				variant={props.variant}
				items={
					<ul className={styles.teamMemberItems}>
						<li>
							Peste 10 de ani de experiență ca monitor de schi, acreditat
							internațional, ISIA
						</li>
						<li>Instructor coordonator de tabere vară/ iarnă</li>
					</ul>
				}
			/>
			<TeamItem
				imageSrc={'/team/2.png'}
				name={props.variant === 'Simple' ? 'Laura' : 'Gaina Laura'}
				description={
					props.variant === 'Simple'
						? 'A urcat pe munte prima dată la vârsta de 5 ani, și de atunci călătorește alături de copilul ei și alții copii pe care îi initiază în tainele schiului ,drumețiilor, a jocurilor în aer liber'
						: 'A urcat pe munte prima dată la vârsta de 5 ani, și de atunci călătorește alături de copilul ei și alții copii pe care îi inițiază în tainele schiului ,drumețiilor, a jocurilor în aer liber'
				}
				variant={props.variant}
				items={
					<ul className={styles.teamMemberItems}>
						<li>Experiență de 6 ani că monitor de ski</li>
						<li>
							Monitor schi (Internațional Schi Instructor Associations-ISIA)
						</li>
					</ul>
				}
			/>
			<TeamItem
				imageSrc={'/team/1.png'}
				name={props.variant === 'Simple' ? 'Cosmin' : 'Ion Cosmin'}
				description={
					props.variant === 'Simple'
						? 'Un împătimit al snowbordului ,freestyle ,off-piste,al muntelui,al mountain bike'
						: 'Un împătimit al snowbordului , freestyle ,off-piste,al muntelui,al mountain bike, Cosmin este un mebru al echipei care ne surprinde prin , muncă în echipă, flexibilitatea și strategiile de motivare a copiilor de a încerca ceva nou'
				}
				variant={props.variant}
				items={
					<ul className={styles.teamMemberItems}>
						<li>Ghid turist național</li>
						<li>
							Monitor snowboard și schi(Internațional Schi Instructor
							Associations-ISIA)
						</li>
					</ul>
				}
			/>
			<TeamItem
				imageSrc={'/team/4.png'}
				name={props.variant === 'Simple' ? 'Gabi' : 'Gabriel Myklos'}
				description={
					props.variant === 'Simple'
						? 'Cu o experiență montană deosebită,un alpinist și schior de excepție,un împătimit al MTB-ului'
						: 'Cu o experiență montană deosebită,un alpinist și schior de excepție,un împătimit al MTB-ului ,Gabi este pentru copiii din tabere o sursă inepuizabilă de cunoștiințe,povești și energie pozitivă'
				}
				variant={props.variant}
				items={
					<ul className={styles.teamMemberItems}>
						<li>Experiență de peste 7 ani</li>
						<li>
							Monitor schi (Internațional Schi Instructor Associations-ISIA)
						</li>
						<li>Alpinist calificat</li>
					</ul>
				}
			/>
			<TeamItem
				imageSrc={'/team/5.png'}
				name={props.variant === 'Simple' ? 'Bogdan' : 'Manea Bogdan'}
				description={
					props.variant === 'Simple'
						? 'Practică această meserie cu pasiune și devotament, este un bun cunoscător al traseelor montane și al tehnicilor de schi'
						: 'Bogdan,pentru că a mers pe munte, a schiat și a mers cu mountain-bike-ul toată viața, s-a hotărât să transmită și copiilor pasiunile lui. Practică această meserie cu pasiune și devotament, este un bun cunoscător al traseelor montane și al tehnicilor de schi'
				}
				variant={props.variant}
				items={
					<ul className={styles.teamMemberItems}>
						<li>Ghid turist national</li>
						<li>
							Monitor Ski (International Schi Instructor Association-ISIA)
						</li>
					</ul>
				}
			/>
			<TeamItem
				imageSrc={'/team/6.png'}
				name={props.variant === 'Simple' ? 'Florin' : 'Marian Florin'}
				description={
					props.variant === 'Simple'
						? 'Crede în educația experiențială și este recunoscut ca unul dintre cel mai creativ,empatic și cu simțul umorului'
						: 'Florin este un foarte bun organizator al activităților pentru copii (atât outdoor cât și indoor). Crede în educația experientială și este recunoscut ca unul dintre cel mai creativ, empatic și cu simțul umorului '
				}
				variant={props.variant}
				items={
					<ul className={styles.teamMemberItems}>
						<li>Facultatea de Sociologie-Pishologie</li>
						<li>Psiholog</li>
						<li>Coordonator tabere vara-iarna</li>
						<li>Experienta de peste 10 ani</li>
					</ul>
				}
			/>
		</List>
	</Section>
);
