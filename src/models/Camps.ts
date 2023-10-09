import ZeroPointRoutes from "./Routes";

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
    id: "90bf49ae-29ba-4bae-ab61-49f5a34d5b8a",
    title: "MTB Panorama Ghelari",
    description:
      "Vă invităm cu mare bucurie să  înscrieţi copiii în tabăra noastră de MTB şi înot. Oferim oportunitatea de împrietenire cu apa într-un altfel de decor, transformat prin joacă într-un curs specializat alături de Diana Pascu şi Alina Crişan.",
    type: CampType.MTB,
    startDate: new Date("07/17/2024"),
    endDate: new Date("07/22/2024"),
    activity: [
      "MTB: învaţă tehnici de mers pe bicicletă pe teren accidentat, vor explora trasee şi vor învăţa cum să se deplaseze în siguranţă pe drumuri accidentate",
      "Înot: în fiecare zi copiii vor avea o sesiune de înot în piscina taberei, având în vedere nivelul lor de înot, adaptându-se la cerinţele fiecărui participant;Vă asigurăm că experienţa copiilor în tabăra noastră va fi una memorabilă şi educativă, oferindu-le şansa de a-şi dezvolta abilităţi noi şi de a se bucura de o vară plină de distracţie în aer liber.",
    ],
    imageSrc: "https://i.ibb.co/RcYxrqp/O-altfel-de-tabara.webp",
    price: 1900,
  },
  {
    id: "9fbff486-83fa-424d-9619-ec29715636ed",
    title: "MTB Viscri",
    description:
      "Satul Viscri este un pitoresc și fermecător sat tradițional din Transilvania, situat în județul Brașov, România. Cunoscut pentru peisajele sale rurale idilice și pentru patrimoniul său cultural, Viscri a fost inclus în lista Patrimoniului Mondial UNESCO, fiind recunoscut ca unul dintre cele mai bine conservate sate săsești din regiune. O plimbare prin satul Viscri te va purta prin peisaje rurale pitorești, cu dealuri verzi acoperite de pășuni și păduri de fag. Vizitarea acestui sat reprezintă o călătorie în timp și o oportunitate de a te conecta cu istoria și cultura unei comunități săsești unice.",
    type: CampType.MTB,
    startDate: new Date("08/05/2024"),
    endDate: new Date("08/12/2024"),
    activity: [
      "Explorarea tradițiilor și a obiceiurilor săsești",
      "Ture prin sat",
      "Vizitarea muzeului satului",
    ],
    imageSrc: "https://i.ibb.co/Jv4jH66/MTB-Viscri.webp",
    price: 1800,
  },
  {
    id: "87c6a349-9f84-44e1-8354-6ee994f326c2",
    title: "MTB Casa Cânda (Sălașul de Sus) - Ecoturism",
    description:
      "Aflat la poalele Munților Poiana Ruscă, Sălașul de Sus este înconjurat de păduri dese, văi adânci și pâraie cristaline. Aici vei găsi o natură nealterată și o liniște reconfortantă. Peisajul montan oferă oportunități excelente pentru drumeții și explorarea naturii.Datorită frumuseții naturale și a tradițiilor autentice, Sălașul de Sus este o destinație populară pentru iubitorii de ecoturism și turism rural. Poți experimenta stilul de viață tradițional, participând la activități meșteșugărești, cum ar fi prelucrarea lemnului sau țesutul.",
    type: CampType.MTB,
    startDate: new Date("07/10/2024"),
    endDate: new Date("07/16/2024"),
    activity: ["Explorarea zonelor din Sălașul de Sus"],
    imageSrc:
      "https://zeropointstorage.blob.core.windows.net/images/liviu-c-9HQiKoSlK_o-unsplash.webp",
    price: 1900,
  },
  {
    id: "148fdd56-5dd9-4d83-9166-2cbd8ebe1879",
    title: "Drumeție Cioclovina ( Tărâmuri Dacice )",
    description:
      "Parcul Natural Grădiștea Muncelului – Cioclovina cuprinde, între limitele sale, șase dintre cele mai spectaculoase rezervații naturale ale județului Hunedoara: Complexul carstic Ponorici-Cioclovina, Peștera Tecuri, Peștera Șura Mare, Cheile Crivadiei, Platoul Vârtoape, Locul fosilifer Ohaba-Ponor, Peștera Bolii. Totodată, aici se află siturile arheologice aflate în Patrimoniul UNESCO de la Sarmizegetusa Regia, Costești, Blidaru, Luncani-Piatra Roșie și așezările etnografice autentice din Platforma Luncanilor",
    type: CampType.SUMMER,
    startDate: new Date("06/27/2024"),
    endDate: new Date("07/02/2024"),
    activity: [
      "Vizitarea peșterilor și avenelor din zonă",
      "Prezentarea unor noțiuni speo și a unor noțiuni legate de specificul zonei",
      "Orientare în mediul montan",
      "Jocuri și concursuri outdoor ",
    ],
    price: 1800,
    imageSrc: "https://i.ibb.co/5YBj903/drumetie-Cioclovina.webp",
  },
  {
    id: "d0a513b9-a1ca-407a-8bb6-5ca6f628d8a7",
    title: "Tabără preșcolari în Retezat (Pensiunea Clif)",
    description:
      "Parc de aventură, tiroliană, excursii și drumetii, jocuri de echipă, jocuri de echilibru, concursuri sportive, karaoke, activități de dezvoltare emoțională, socială și de comunicare, activități de cunoaștere, creare și întărire spirit de echipă, curaj și personalitate, foc de tabără. Echipa noastră propune copiilor o experienţă inedită de dezvoltare personală prin mijloace sportive multivalente şi activităţi asociate în care pasiunea se împleteşte cu buna dispoziţie şi sănătatea cu educaţia.",
    type: CampType.SUMMER,
    startDate: new Date("07/23/2024"),
    endDate: new Date("07/28/2024"),
    activity: [
      "Orientare în mediul montan",
      "Jocuri și concursuri outdoor ",
      "Noțiuni de supraviețuire",
    ],
    price: 1900,
    imageSrc:
      "https://zeropointstorage.blob.core.windows.net/images/Tabere-copii-2022-munte.webp",
  },
  {
    id: "99f54ff0-64d3-4a07-86ad-c5344737e090",
    title: "Drumeție Retezat",
    description:
      "Bijuteria Carpaților românești, masivul presărat cu 80 de oaze albastre în care se oglindește cerul. Dincolo de frumusețea sa sălbatică și unică și de liniștea absolută pe care ți-o oferă, masivul adăpostește o lume aparținând sprintenelor capre negre și miilor de plante care colorează culmile. În orice punct te conduc potecile, vei descoperi că în Retezat totul freamătă de viaț; natura pură a creat aici peisaje de excepție pentru care merită din plin să străbați cărările muntelui.",
    type: CampType.SUMMER,
    startDate: new Date("08/13/2024"),
    endDate: new Date("08/19/2024"),
    activity: ["Drumetii montane", "Activitati sportive"],
    price: 1900,
    imageSrc:
      "https://zeropointstorage.blob.core.windows.net/images/Retezat_Mountain_Lakes.webp",
  },
  {
    id: "9fa464ef-8082-4d80-b561-a7b5b49decef",
    title: "Tabara comunicare Croația",
    price: 1900,
    description:
      "Tabăra de comunicare dintre părinți și copii este un mediu în care se promovează și se dezvoltă comunicarea sănătoasă și deschisă între cele două generații. Scopul acestei tabere este de a spori înțelegerea reciprocă, de a îmbunătăți relațiile familiale și de a facilita dialogul între părinți și copii.",
    type: CampType.SUMMER,
    startDate: new Date("08/21/2024"),
    endDate: new Date("08/27/2024"),
    activity: [
      "Sesiuni de grup",
      "Jocuri de rol",
      "Dezbateri și ateliere interactive",
    ],
    imageSrc:
      "https://zeropointstorage.blob.core.windows.net/images/Mask%20group.png",
  },
  // ! FROM HERE IS TEST DATA, PLEASE REMOVE WHEN MERGING WITH MASTER
  {
    id: "9fa464ef-8082-4d80-b561-a7b5b49decef",
    title: "Tabara comunicare Croația",
    price: 1900,
    description:
      "Tabăra de comunicare dintre părinți și copii este un mediu în care se promovează și se dezvoltă comunicarea sănătoasă și deschisă între cele două generații. Scopul acestei tabere este de a spori înțelegerea reciprocă, de a îmbunătăți relațiile familiale și de a facilita dialogul între părinți și copii.",
    type: CampType.SKY,
    startDate: new Date("08/21/2024"),
    endDate: new Date("08/27/2024"),
    activity: [
      "Sesiuni de grup",
      "Jocuri de rol",
      "Dezbateri și ateliere interactive",
    ],
    imageSrc:
      "https://zeropointstorage.blob.core.windows.net/images/Mask%20group.png",
  },
];
type TCard = {
  text: string;
  imageSrc: string;
};

export const CampActivities: TCard[] = [
  { text: "Tabere de vara", imageSrc: "/benefits/Taberedevara2.webp" },
  {
    text: "Tabere de comunicare (parintii si copii)",
    imageSrc: "/benefits/tabereComunicare.webp",
  },
  {
    text: "Excursii cu bicicleta",
    imageSrc: "/benefits/excursiicubicicleta.webp",
  },
  { text: "Initieri MTB", imageSrc: "/benefits/initieriMTB3.webp" },
  { text: "Tabere de SKI", imageSrc: "/benefits/tabereSki.webp" },
];

export const campTypes = [
  {
    imgSrc: "/camp-types/SummerCamp.png",
    title: "Tabere de vară",
    description:
      "Taberele de vară  sunt o oportunitate pentru fiecare copil pentru a-și dezvolta anumite abilități, dar și pentru a se distra, socializa și pentru a lega noi prietenii",
    link: ZeroPointRoutes.SummerCamp.path,
  },
  {
    imgSrc: "/camp-types/bike2.png",
    title: "Drumeții MTB",
    description:
      "Ciclismul  este una dintre cele mai bune metode de a te bucura de natură și de beneficiile incontestabile ale pedalatului pe două roți. Te invităm să te bucuri alături de noi pedalând ",
    link: ZeroPointRoutes.MtbCamp.path,
  },
  {
    imgSrc: "/camp-types/Ski.png",
    title: "Tabere SKI",
    description:
      "Taberele de schi și snowboard oferă copiiilor și adolesceților ocazia de a învăța să schieze și să se dea pe snowboard sub atenta îndrumare a unei echipe de monitori cu experiență și foști schiori de performanță",
    link: ZeroPointRoutes.SkyCamps.path,
  },
];
