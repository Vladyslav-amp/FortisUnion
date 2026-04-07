
const img1 = 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80';
const img2 = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80';
const img3 = 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80';
const img4 = 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=80';

export const organization = {
  name: 'FortisUnion',
  city: 'Gdańsk',
  country: 'Polska',
  mark: 'FU',
  email: 'kontakt@fortisunion.pl',
  phone: '+48 500 000 000',
  claim: 'Nowoczesna organizacja z Gdańska promująca zawodników i turnieje PMMA.',
};

export const fighters = [
  {
    id: 1,
    slug: 'adrian-nowak',
    name: 'Adrian Nowak',
    nickname: 'The Pressure',
    style: 'Striker / Boxing',
    record: '12-1',
    height: '183 cm',
    reach: '188 cm',
    weight: '77 kg',
    hometown: 'Gdańsk',
    image: img1,
    heroImage: img1,
    gallery: [img1, img2, img3],
    videoTitle: 'FortisUnion: Adrian Nowak — promo trailer',
    videoEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=1',
    shortStory: 'Dynamiczny zawodnik z mocnym pressingiem i dużym medialnym charakterem.',
    longStory:
      'To przykładowy profil zawodnika dla FortisUnion. W tym miejscu możesz wkleić prawdziwą historię kariery, klub, sztab, sponsorów, tytuły oraz długie bio pod media i stronę premium.',
    achievements: [
      'Mistrz regionalnej ligi K1',
      'Headliner kampanii sezonu 2026',
      'Regularny content video i media day',
    ],
    quote: 'Każde wejście do klatki to performance i statement.',
    stats: { ko: '7', submissions: '1', fights: '13' },
    socials: { instagram: '@adriannowak', youtube: 'Adrian Nowak Official' },
  },
  {
    id: 2,
    slug: 'maks-zielinski',
    name: 'Maks Zieliński',
    nickname: 'Silent Grip',
    style: 'BJJ / Grappling',
    record: '10-2',
    height: '178 cm',
    reach: '181 cm',
    weight: '70 kg',
    hometown: 'Sopot',
    image: img2,
    heroImage: img2,
    gallery: [img2, img4, img1],
    videoTitle: 'FortisUnion: Maks Zieliński — backstage story',
    videoEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=2',
    shortStory: 'Techniczny zawodnik, który wyróżnia się spokojem i kontrolą tempa walki.',
    longStory:
      'Tutaj wstaw pełny bio zawodnika. Możesz dodać klub, trenerów, specjalizację, kluczowe walki, analizy stylu oraz media assets, które budują rozpoznawalność.',
    achievements: [
      '3-krotny zwycięzca turniejów submission only',
      'Specjalista od kontroli i presji parterowej',
      'Silny profil pod sponsorów technologicznych',
    ],
    quote: 'Nie muszę krzyczeć. Wystarczy, że wygrywam.',
    stats: { ko: '2', submissions: '5', fights: '12' },
    socials: { instagram: '@maksgrip', youtube: 'Silent Grip' },
  },
  {
    id: 3,
    slug: 'kamil-wrona',
    name: 'Kamil Wrona',
    nickname: 'North Storm',
    style: 'Wrestling',
    record: '9-0',
    height: '186 cm',
    reach: '190 cm',
    weight: '84 kg',
    hometown: 'Gdynia',
    image: img3,
    heroImage: img3,
    gallery: [img3, img1, img4],
    videoTitle: 'FortisUnion: Kamil Wrona — camp report',
    videoEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=3',
    shortStory: 'Niepokonany prospekt, który ma wyglądać jak przyszła twarz organizacji.',
    longStory:
      'W tym miejscu możesz opisać pochodzenie, sukcesy juniorskie, ambicje i cele na najbliższy sezon. Strona jest ustawiona tak, żeby dobrze sprzedać narrację zawodnika.',
    achievements: [
      'Niepokonany rekord',
      'Medialny prospect FortisUnion',
      'Gotowy pod główne sesje zdjęciowe i dokument',
    ],
    quote: 'Presja? To moje naturalne środowisko.',
    stats: { ko: '3', submissions: '3', fights: '9' },
    socials: { instagram: '@northstorm', youtube: 'North Storm MMA' },
  },
  {
    id: 4,
    slug: 'filip-domanski',
    name: 'Filip Domański',
    nickname: 'Voltage',
    style: 'Kickboxing / Muay Thai',
    record: '14-3',
    height: '180 cm',
    reach: '184 cm',
    weight: '66 kg',
    hometown: 'Gdańsk',
    image: img4,
    heroImage: img4,
    gallery: [img4, img2, img3],
    videoTitle: 'FortisUnion: Filip Domański — promo cut',
    videoEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=4',
    shortStory: 'Efektowny zawodnik z dużą energią, dobry do krótkich form w social media.',
    longStory:
      'Tu możesz dodać pełną historię, charakter, cytaty, branding i elementy budujące rozpoznawalność. Szablon jest przygotowany pod zdjęcia, video i sponsorów.',
    achievements: [
      'Wysoki potencjał viralowy',
      'Mocna estetyka short-form contentu',
      'Rozpoznawalny styl i szybkie kombinacje',
    ],
    quote: 'Widowisko ma być tak mocne, żeby widz zapamiętał je po pierwszej rundzie.',
    stats: { ko: '8', submissions: '0', fights: '17' },
    socials: { instagram: '@voltage.filip', youtube: 'Voltage Fight Lab' },
  },
];

export const featuredFighter = fighters[0];
export const getFighterBySlug = (slug) => fighters.find((fighter) => fighter.slug === slug);

export const heroHighlights = [
  { value: '4', label: 'promowanych zawodników' },
  { value: '3', label: 'turnieje PMMA w sezonie' },
  { value: '12', label: 'miesięcy contentu' },
  { value: 'GDA', label: 'baza w Gdańsku' },
];

export const statsStrip = [
  { value: '150k+', label: 'docelowy zasięg kampanii' },
  { value: '4', label: 'premium profile fighterów' },
  { value: '3', label: 'formaty turniejowe PMMA' },
  { value: '1', label: 'spójna marka FortisUnion' },
];

export const journeySteps = [
  {
    year: 'Etap 01',
    title: 'Budowa marki zawodnika',
    text: 'Zdjęcia, video, narracja, design profilu i rozpisana osobowość pod media społecznościowe.',
  },
  {
    year: 'Etap 02',
    title: 'Promocja eventów PMMA',
    text: 'Każdy event ma własny angle promocyjny: test charakteru, nowy etap, pokaz umiejętności i storytelling.',
  },
  {
    year: 'Etap 03',
    title: 'Content i dystrybucja',
    text: 'Blog, backstage, shortsy, highlighty, relacje z campu i materiały dla sponsorów.',
  },
];

export const events = [
  {
    id: 1,
    date: '24 maja 2026',
    title: 'FortisUnion PMMA Showcase',
    location: 'Gdańsk, Hala Główna',
    description: 'Wieczór otwierający sezon: prezentacja rosteru, fights spoza top 4, transmisja premium i media day.',
    status: 'Sprzedaż aktywna',
    highlights: ['Prezentacja rosteru', 'Panel sponsorów', 'Aftermovie + media day'],
  },
  {
    id: 2,
    date: '19 lipca 2026',
    title: 'FortisUnion Summer Trials',
    location: 'Gdynia, Arena PMMA',
    description: 'Turniej PMMA z nowymi nazwiskami, scoutingiem i kwalifikacjami do kolejnej gali.',
    status: 'Rejestracja zawodników',
    highlights: ['Drabinka turniejowa', 'Rejestracja klubów', 'Streaming i backstage'],
  },
  {
    id: 3,
    date: '27 września 2026',
    title: 'FortisUnion Baltic Series',
    location: 'Sopot, Event Hall',
    description: 'Główne wydarzenie sezonu z mocnym contentem, panelem prasowym i strefą partnerów.',
    status: 'Wkrótce',
    highlights: ['Fight week content', 'Strefa partnerów', 'Seria blogów i zapowiedzi'],
  },
];

export const mediaGallery = [
  { id: 1, title: 'Fight camp diary', text: 'Dziennik przygotowań i klimat wysokiego poziomu.', image: img2 },
  { id: 2, title: 'Open workout', text: 'Treści pod social i partnerów marki.', image: img3 },
  { id: 3, title: 'Backstage stories', text: 'Materiały zakulisowe budujące przywiązanie fanów.', image: img4 },
];

export const blogPosts = [
  {
    id: 1,
    category: 'Analiza',
    date: '10 kwietnia 2026',
    title: 'Jak zbudować narrację zawodnika, żeby przyciągał sponsorów',
    excerpt: 'Przykładowy wpis o tym, jak opakować historię fightera, aby zwiększać wartość medialną i sprzedażową.',
    image: img1,
  },
  {
    id: 2,
    category: 'Turnieje',
    date: '3 kwietnia 2026',
    title: 'Format PMMA, który dobrze sprzedaje się lokalnie i online',
    excerpt: 'Krótki opis wpisu blogowego. Możesz tu wrzucić analizy organizacyjne, harmonogram i komunikację eventu.',
    image: img2,
  },
  {
    id: 3,
    category: 'Media',
    date: '28 marca 2026',
    title: 'Backstage content: dlaczego widzowie chcą oglądać drogę, a nie tylko wynik',
    excerpt: 'Przykładowy materiał o backstage, vlogach i kulisach przygotowań do eventu.',
    image: img3,
  },
  {
    id: 4,
    category: 'Zawodnicy',
    date: '21 marca 2026',
    title: 'Jak promować czterech zawodników jednocześnie, nie rozmywając przekazu',
    excerpt: 'Wpis pokazujący, jak prowadzić kilka osobnych archetypów fighterów w jednej silnej marce promotion.',
    image: img4,
  },
];
