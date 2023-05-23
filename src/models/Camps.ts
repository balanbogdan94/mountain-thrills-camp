export enum CampType {
	SKY,
	MTB,
	SUMMER,
}

export type CampItemType = {
	id: string;
	title: string;
	type: CampType;
	startDate: Date;
	endDate: Date;
	description: string;
	activity: string[];
	imageSrc: string;
	price: number;
};

export const camps: CampItemType[] = [
	{
		id: '90bf49ae-29ba-4bae-ab61-49f5a34d5b8a',
		title: 'MTB Panorama Ghelari',
		description:
			'Panorama Ghelari este o atracție turistică impresionantă situată în localitatea Ghelari din județul Hunedoara, România. Cunoscută și sub numele de "Balconul Munților Apuseni", această panoramă oferă o vedere spectaculoasă asupra peisajului muntos din zonă.Panorama Ghelari oferă o oportunitate unică de a admira frumusețea naturală a zonei și de a te conecta cu liniștea și armonia pe care le oferă munții. De aici, poți să te relaxezi și să te bucuri de peisajul impresionant, să faci fotografii memorabile sau să te plimbi pe cărările marcate, explorând în detaliu această zonă sălbatică și fascinantă.',
		type: CampType.MTB,
		startDate: new Date('07/17/2023'),
		endDate: new Date('07/22/2023'),
		activity: ['Explorarea zonelor din Ghelari', 'Ture pe traseele montane'],
		imageSrc:
			'https://zeropointstorage.blob.core.windows.net/images/WhatsApp%20Image%202023-03-29%20at%2019.21.15.webp',
		price: 2100,
	},
	{
		id: '90bf49ae-29ba-4bae-ab61-49f5a34d5b8a',
		title: 'MTB Viscri',
		description:
			'Satul Viscri este un pitoresc și fermecător sat tradițional din Transilvania, situat în județul Brașov, România. Cunoscut pentru peisajele sale rurale idilice și pentru patrimoniul său cultural, Viscri a fost inclus în lista Patrimoniului Mondial UNESCO, fiind recunoscut ca unul dintre cele mai bine conservate sate săsești din regiune. O plimbare prin satul Viscri te va purta prin peisaje rurale pitorești, cu dealuri verzi acoperite de pășuni și păduri de fag. Vizitarea acestui sat reprezintă o călătorie în timp și o oportunitate de a te conecta cu istoria și cultura unei comunități săsești unice.',
		type: CampType.MTB,
		startDate: new Date('07/10/2023'),
		endDate: new Date('07/12/2023'),
		activity: [
			'Explorarea tradițiilor și a obiceiurilor săsești',
			'Ture prin sat',
			'Vizitarea muzeului satului',
		],
		imageSrc:
			'https://zeropointstorage.blob.core.windows.net/images/WhatsApp%20Image%202023-03-29%20at%2020.05.59.webp',
		price: 1900,
	},
	{
		id: '90bf49ae-29ba-4bae-ab61-49f5a34d5b8a',
		title: 'MTB Casa Cânda (Sălașul de Sus) - Ecoturism',
		description:
			'Aflat la poalele Munților Poiana Ruscă, Sălașul de Sus este înconjurat de păduri dese, văi adânci și pâraie cristaline. Aici vei găsi o natură nealterată și o liniște reconfortantă. Peisajul montan oferă oportunități excelente pentru drumeții și explorarea naturii.Datorită frumuseții naturale și a tradițiilor autentice, Sălașul de Sus este o destinație populară pentru iubitorii de ecoturism și turism rural. Poți experimenta stilul de viață tradițional, participând la activități meșteșugărești, cum ar fi prelucrarea lemnului sau țesutul.',
		type: CampType.MTB,
		startDate: new Date('06/25/2023'),
		endDate: new Date('06/28/2023'),
		activity: ['Explorarea zonelor din Sălașul de Sus'],
		imageSrc:
			'https://zeropointstorage.blob.core.windows.net/images/liviu-c-9HQiKoSlK_o-unsplash.webp',
		price: 2100,
	},
	{
		id: '90bf49ae-29ba-4bae-ab61-49f5a34d5b8a',
		title: 'Drumeție Cioclovina ( Tărâmuri Dacice )',
		description:
			'Parcul Natural Grădiștea Muncelului – Cioclovina cuprinde, între limitele sale, șase dintre cele mai spectaculoase rezervații naturale ale județului Hunedoara: Complexul carstic Ponorici-Cioclovina, Peștera Tecuri, Peștera Șura Mare, Cheile Crivadiei, Platoul Vârtoape, Locul fosilifer Ohaba-Ponor, Peștera Bolii. Totodată, aici se află siturile arheologice aflate în Patrimoniul UNESCO de la Sarmizegetusa Regia, Costești, Blidaru, Luncani-Piatra Roșie și așezările etnografice autentice din Platforma Luncanilor',
		type: CampType.SUMMER,
		startDate: new Date('07/18/2023'),
		endDate: new Date('07/22/2023'),
		activity: [
			'Vizitarea peșterilor și avenelor din zonă',
			'Prezentarea unor noțiuni speo și a unor noțiuni legate de specificul zonei',
			'Orientare în mediul montan',
			'Jocuri și concursuri outdoor ',
		],
		price: 1900,
		imageSrc:
			'https://zeropointstorage.blob.core.windows.net/images/WhatsApp%20Image%202023-03-29%20at%2019.19.27.webp',
	},
	{
		id: '90bf49ae-29ba-4bae-ab61-49f5a34d5b8a',
		title: 'Drumeție Apuseni',
		description:
			'Munții Apuseni este o destinație tradițională. Ne vom aventura pe trasee montane în care vom descoperi: pietrele Boghii, Cheile Somesului Cald, Molhasurile de la Izbuce Focul Viu, Lumea Pierdută,…etc, locuri numai bune pentru a înțelege releieful carstic alcătuit din peșteri, chei și defilee. Varietatea oferită de Apuseni îl face unic la noi în România datorită formelor sculptate de apă în rocile solubile . Pe lângă lecțiile de geneză și geologie predate de peisajul înconjurător, cei mici se vor bucura de aerul curat și pădurile Apusenilor.',
		type: CampType.SUMMER,
		startDate: new Date('07/21/2023'),
		endDate: new Date('07/22/2023'),
		activity: [
			'Orientare în mediul montan',
			'Jocuri și concursuri outdoor ',
			'Noțiuni de supraviețuire',
		],
		price: 2100,
		imageSrc:
			'https://zeropointstorage.blob.core.windows.net/images/Tabere-copii-2022-munte.webp',
	},
	{
		id: '90bf49ae-29ba-4bae-ab61-49f5a34d5b8a',
		title: 'Drumeție Retezat',
		description:
			'Bijuteria Carpaților românești, masivul presărat cu 80 de oaze albastre în care se oglindește cerul. Dincolo de frumusețea sa sălbatică și unică și de liniștea absolută pe care ți-o oferă, masivul adăpostește o lume aparținând sprintenelor capre negre și miilor de plante care colorează culmile. În orice punct te conduc potecile, vei descoperi că în Retezat totul freamătă de viaț; natura pură a creat aici peisaje de excepție pentru care merită din plin să străbați cărările muntelui.',
		type: CampType.SUMMER,
		startDate: new Date('08/20/2023'),
		endDate: new Date('08/22/2023'),
		activity: ['Drumetii montane', 'Activitati sportive'],
		price: 1900,
		imageSrc:
			'https://zeropointstorage.blob.core.windows.net/images/Retezat_Mountain_Lakes.webp',
	},
	{
		id: '9fa464ef-8082-4d80-b561-a7b5b49decef',
		title: 'Tabara comunicare Apuseni',
		price: 2100,
		description:
			'Tabăra de comunicare dintre părinți și copii este un mediu în care se promovează și se dezvoltă comunicarea sănătoasă și deschisă între cele două generații. Scopul acestei tabere este de a spori înțelegerea reciprocă, de a îmbunătăți relațiile familiale și de a facilita dialogul între părinți și copii.',
		type: CampType.SUMMER,
		startDate: new Date('08/21/2023'),
		endDate: new Date('08/27/2023'),
		activity: [
			'Sesiuni de grup',
			'Jocuri de rol',
			'Dezbateri și ateliere interactive',
		],
		imageSrc:
			'https://zeropointstorage.blob.core.windows.net/images/Mask%20group.png',
	},
];
