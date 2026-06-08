const placeholderImage = 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80';
const placeholderImageAlt = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80';
const placeholderImageThird = 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80';
const placeholderImageFourth = 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=80';

export const fighters = [
  {
    id: 1,
    name: 'Adrian Nowak',
    nickname: 'The Pressure',
    style: 'Striker / Boxing',
    record: '12-1',
    height: '183 cm',
    reach: '188 cm',
    weight: '90 kg',
    experience: '20 lat',
    image: placeholderImage,
    shortStory: 'Fighter budowany jako twarz agresywnego pressingu, mocnych wejść i highlightów pod social media.',
    longStory:
      'Adrian to przykład zawodnika, którego możesz prowadzić jak osobną markę: mocne wejścia, charakterystyczne wypowiedzi, szybkie akcje i materiały pod sponsorów. W tym miejscu podmienisz historię, klub, trenerów, osiągnięcia i najważniejsze walki.',
    quote: 'Każde wejście do klatki to performance i statement.',
    stats: { ko: '7', submissions: '1', fights: '13' },
  },
  {
    id: 2,
    name: 'Maks Zieliński',
    nickname: 'Silent Grip',
    style: 'BJJ / Grappling',
    record: '10-2',
    height: '178 cm',
    reach: '181 cm',
    weight: '90 kg',
    image: placeholderImageAlt,
    shortStory: 'Cichy, techniczny specjalista od kontroli — idealny kontrast do bardziej agresywnych osobowości rosteru.',
    longStory:
      'Tutaj wstaw pełny bio zawodnika. Możesz dodać klub, trenerów, specjalizację i kluczowe walki.',
    quote: 'Nie muszę krzyczeć. Wystarczy, że wygrywam.',
    stats: { ko: '2', submissions: '5', fights: '12' },
  },
  {
    id: 3,
    name: 'Kamil Wrona',
    nickname: 'North Storm',
    style: 'Wrestling',
    record: '9-0',
    weight: '90 kg',
    height: '186 cm',
    reach: '190 cm',
    image: placeholderImageThird,
    shortStory: 'Niepokonany prospekt premium: chłodny, atletyczny i gotowy do komunikacji jako przyszły mistrz.',
    longStory:
      'W tym miejscu możesz opisać pochodzenie, sukcesy juniorskie, ambicje i cele na najbliższy sezon.',
    quote: 'Presja? To moje naturalne środowisko.',
    stats: { ko: '3', submissions: '3', fights: '9' },
  },
  {
    id: 4,
    name: 'Filip Domański',
    nickname: 'Voltage',
    style: 'Kickboxing / Muay Thai',
    record: '14-3',
    height: '180 cm',
    weight: '90 kg',
    reach: '184 cm',
    image: placeholderImageFourth,
    shortStory: 'Najbardziej elektryczny profil w rosterze — dynamiczny striker przygotowany pod highlight reels i kampanie sponsorów.',
    longStory:
      'Tu możesz dodać pełną historię, charakter, cytaty i elementy budujące rozpoznawalność.',
    quote: 'Widowisko ma być tak mocne, żeby widz zapamiętał je po pierwszej rundzie.',
    stats: { ko: '8', submissions: '0', fights: '17' },
  },
];

export const featuredFighter = fighters[0];

export const heroHighlights = [
  { value: '4', label: 'promowanych zawodników' },
  { value: '100%', label: 'indywidualne podejście' },
  { value: '24/7', label: 'obsługa medialna' },
  { value: '360°', label: 'rozwój kariery zawodnika' },
];

export const journeySteps = [
  {
    year: 'Etap 01',
    title: 'Budowa marki zawodnika',
    text: 'Zdjęcia, video, narracja, design profilu i rozpisana osobowość pod media społecznościowe.',
  },
  {
    year: 'Etap 02',
    title: 'Story wokół turniejów',
    text: 'Każdy event ma własny angle promocyjny: powrót, test charakteru, nowy etap, walka o pozycję.',
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
    title: 'Iron Legacy: Rising Platform',
    location: 'Warszawa, Tor Główny',
    description: 'Wieczór otwierający sezon, prezentacja rosteru, walki rankingowe i transmisja premium.',
    status: 'Sprzedaż aktywna',
    highlights: ['Prezentacja 4 gwiazd rosteru', 'Panel sponsorów', 'Aftermovie + media day'],
  },
  {
    id: 2,
    date: '19 lipca 2026',
    title: 'Iron Legacy: Summer Trials',
    location: 'Kraków, Arena PMMA',
    description: 'Turniej PMMA z nowymi nazwiskami, scoutingiem i kwalifikacjami do kolejnej gali.',
    status: 'Rejestracja zawodników',
    highlights: ['Drabinka turniejowa', 'Rejestracja klubów', 'Streaming i backstage'],
  },
  {
    id: 3,
    date: '27 września 2026',
    title: 'Iron Legacy: Main Season',
    location: 'Wrocław, Event Hall',
    description: 'Główne wydarzenie sezonu z mocnym contentem, panelem prasowym i strefą sponsorów.',
    status: 'Soon',
    highlights: ['Fight week content', 'Strefa partnerów', 'Seria blogów i zapowiedzi'],
  },
];

export const mediaGallery = [
  { id: 1, title: 'Fight camp diary', text: 'Dziennik przygotowań i klimat wysokiego poziomu.', image: placeholderImageAlt },
  { id: 2, title: 'Open workout', text: 'Treści pod social i partnerów marki.', image: placeholderImageThird },
  { id: 3, title: 'Backstage stories', text: 'Materiały zakulisowe budujące przywiązanie fanów.', image: placeholderImageFourth },
];

export const blogPosts = [
  {
    id: 1,
    category: 'Analiza',
    date: '10 kwietnia 2026',
    title: 'Jak zbudować narrację zawodnika, żeby przyciągał sponsorów',
    excerpt: 'Przykładowy wpis o tym, jak opakować historię fightera, aby zwiększać wartość medialną i sprzedażową.',
    image: placeholderImage,
  },
  {
    id: 2,
    category: 'Branding',
    date: '3 kwietnia 2026',
    title: 'Jak zaprojektować promocję zawodnika, żeby wyglądał jak gwiazda',
    excerpt: 'Krótki opis wpisu blogowego. Możesz tu wrzucić analizy organizacyjne, harmonogram i komunikację eventu.',
    image: placeholderImageAlt,
  },
  {
    id: 3,
    category: 'Media',
    date: '28 marca 2026',
    title: 'Backstage content: dlaczego widzowie chcą oglądać drogę, a nie tylko wynik',
    excerpt: 'Przykładowy materiał o backstage, vlogach i kulisach przygotowań do eventu.',
    image: placeholderImageThird,
  },
  {
    id: 4,
    category: 'Zawodnicy',
    date: '21 marca 2026',
    title: 'Jak promować czterech zawodników jednocześnie, nie rozmywając przekazu',
    excerpt: 'Wpis pokazujący, jak prowadzić kilka osobnych archetypów fighterów w jednej silnej marce promotion.',
    image: placeholderImageFourth,
  },
];
