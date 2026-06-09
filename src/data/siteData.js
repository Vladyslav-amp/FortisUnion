const sergeyTrener = '/fighters/trener.png';
const alekseyFighter1 = '/fighters/Aleksey/1.jpg';
const alekseyFighter2 = '/fighters/Aleksey/2.jpg';
const tsemurFighter1 = '/fighters/Tsemur/1.jpg';
const ivanFighter1 = '/fighters/Ivan/1.webp';
const placeholderImageAlt = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80';
const placeholderImageThird = 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80';
const placeholderImageFourth = 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=80';

export const fighters = [
  {
    id: 1,
    name: 'Siergiej Szymański',
    nickname: 'Mistrz Muay Thai',
    style: 'Muay Thai / Kickboxing',
    record: '20-7',
    experience: '20+ lat',
    image: sergeyTrener,
    citizenship: 'Republika Białoruś',

    shortStory:
      'Trener Muay Thai i kickboxingu, mistrz sportu w Muay Thai oraz mistrz sportu klasy międzynarodowej w kickboxingu. Wielokrotny medalista mistrzostw świata, Europy i Białorusi.',

    longStory:
      'Siergiej Szymański to doświadczony trener oraz były zawodnik sportów walki. Pracował jako trener w klubach na Białorusi, w Rosji oraz we Włoszech. Prowadził treningi indywidualne i grupowe dla dzieci oraz dorosłych. Absolwent Białoruskiego Państwowego Uniwersytetu Kultury Fizycznej. Swoje umiejętności rozwijał również podczas staży szkoleniowych w Tajlandii w renomowanym gymie Chuwattana. W trakcie kariery zdobywał medale mistrzostw świata, Europy oraz tytuły mistrza Białorusi w Muay Thai i kickboxingu.',

    quote:
      'Doświadczenie zdobywa się latami, ale mistrzostwo buduje się każdego dnia na treningu.',

    stats: {
      ko: 'Brak danych',
      submissions: 'Brak danych',
      fights: 'Brak danych'
    },

    titles: [
      'Mistrz Sportu w Muay Thai',
      'Międzynarodowy Mistrz Sportu w Kickboxingu'
    ],

    education: {
      university: 'Białoruski Państwowy Uniwersytet Kultury Fizycznej',
      graduationYear: '2015',
      faculty: 'Sportowo-Pedagogiczny Wydział Sportów Masowych'
    },

    achievements: {
      muayThai: [
        '1999 – zwycięzca ligi Kitek (Moskwa)',
        '1999, 2000 – dwukrotny mistrz Białorusi',
        '2001 – brązowy medalista Mistrzostw Świata (Tajlandia)'
      ],
      kickboxing: [
        '1999 – srebrny medalista Mistrzostw Świata (Włochy)',
        '2000 – mistrz Białorusi',
        '2000 – mistrz Europy',
        '2002 – wicemistrz Europy WAKO',
        '2002 – zawodowy mistrz WKN Intercontinental'
      ]
    }
  },

  {
    id: 2,
    name: 'Aliaksei Dziarnou',
    nickname: 'Technik',
    style: 'Boks',
    record: 'Brak danych',
    height: 'Brak danych',
    reach: 'Brak danych',
    weight: '75–80 kg',
    experience: '267+ Walk',
    image: alekseyFighter1,

    shortStory:
      'Mistrz Sportu Republiki Białorusi, mistrz Republiki Białorusi oraz bardzo doświadczony zawodnik z dorobkiem 267 walk w karierze.',

    longStory:
      'Aliaksei Dziarnou to białoruski bokser specjalizujący się w kategorii wagowej 75–80 kg. Posiada tytuł Mistrza Sportu Republiki Białorusi oraz tytuł Mistrza Republiki Białorusi. W swojej karierze stoczył 267 walk, wielokrotnie zwyciężał w międzynarodowych turniejach, między innymi w Estonii, Litwie i Tadżykistanie, a także brał udział w mistrzostwach świata i Europy. To zawodnik bardzo doświadczony, wyróżniający się wysoką kulturą bokserską.',

    quote:
      'Boks to nie tylko siła, ale przede wszystkim technika, timing i doświadczenie.',

    stats: {
      ko: 'Brak danych',
      submissions: '0',
      fights: '267'
    },

    titles: [
      'Mistrz Sportu Republiki Białorusi',
      'Mistrz Republiki Białorusi'
    ],

    achievements: {
      boxing: [
        '267 walk w karierze',
        'Wielokrotny zwycięzca międzynarodowych turniejów',
        'Uczestnik mistrzostw świata',
        'Uczestnik mistrzostw Europy',
        'Zwycięstwa turniejowe w Estonii, Litwie, Tadżykistanie i innych krajach'
      ]
    },

    nationality: 'Republika Białorusi',
    age: '29 lat',

    gallery: [
      alekseyFighter2
    ],

    videos: [
      {
        title: 'Trening / highlights',
        url: 'https://www.youtube.com/embed/VIDEO_ID'
      }
    ]
  },

  {
    id: 3,
    name: 'Tsemur Fatakhau',
    nickname: 'Twardy',
    style: 'Boks / Walki na gołe pięści',
    record: '2–0',
    recordLabel: 'Boks zawodowy',

    recordDouble: '3–2',
    recordDoubleLabel: 'Gołe pięści',
    height: 'Brak danych',
    reach: 'Brak danych',
    weight: '77 kg',
    experience: '280+ walk',
    image: tsemurFighter1,

    shortStory:
      'Mistrz Sportu Republiki Białorusi, medalista mistrzostw Europy oraz bardzo doświadczony zawodnik z dorobkiem ponad 280 walk.',

    longStory:
      'Tsemur Fatakhau to zawodnik z Republiki Białorusi specjalizujący się w boksie oraz walkach na gołe pięści. Posiada tytuł Mistrza Sportu Republiki Białorusi, jest medalistą mistrzostw Europy oraz wielokrotnym zwycięzcą i medalistą mistrzostw Białorusi oraz turniejów międzynarodowych. W karierze stoczył ponad 280 walk, a dodatkowo posiada doświadczenie w boksie zawodowym oraz walkach na gołe pięści. To twardy, wszechstronny i doświadczony zawodnik, który dobrze odnajduje się w różnych formułach walki.',

    quote:
      'Prawdziwe doświadczenie pokazuje się wtedy, gdy zmienia się formuła walki.',

    stats: {
      ko: 'Brak danych',
      submissions: '0',
      fights: '280+'
    },

    titles: [
      'Mistrz Sportu Republiki Białorusi',
      'Medalista mistrzostw Europy'
    ],

    achievements: {
      boxing: [
        'Ponad 280 walk w karierze',
        'Medalista mistrzostw Europy',
        'Wielokrotny zwycięzca i medalista mistrzostw Białorusi',
        'Wielokrotny zwycięzca i medalista turniejów międzynarodowych',
        'Boks zawodowy: 2–0'
      ],
      bareKnuckle: [
        'Walki na gołe pięści: 3–2',
        'Doświadczenie w różnych formułach walki'
      ]
    },

    nationality: 'Republika Białorusi',
    age: '31 lat',

    gallery: [
    ],

    videos: [
      {
        title: 'Trening / highlights',
        url: 'https://www.youtube.com/embed/VIDEO_ID'
      }
    ]
  },

  {
    id: 4,
    name: 'Artur Felkner',
    nickname: 'Puncher',
    style: 'Puncher / Low Kick',

    record: '15–7–2',
    recordLabel: 'Rekord',

    height: null,
    reach: null,
    weight: null,

    experience: '20+ walk',
    image: placeholderImageAlt,

    shortStory:
      'Polski zawodnik o ofensywnym stylu walki, dużej determinacji i bogatym doświadczeniu zdobytym między innymi w Tajlandii.',

    longStory:
      'Artur Felkner to polski zawodnik specjalizujący się w ofensywnym stylu opartym na mocnym uderzeniu oraz technikach low kick. Posiada rekord 15–7–2 i ma za sobą ponad 20 walk stoczonych w Tajlandii. Występował w renomowanych organizacjach, takich jak Muay Hardcore, Super Champ oraz Rajadamnern World Series. Trenował i reprezentował Phuket Fight Club, mierząc się z rywalami wysokiego poziomu. Jest także mistrzem stadionu Sinbi Boxing Stadium. To zawodnik widowiskowy, twardy i zdeterminowany, który chętnie podejmuje walkę w ofensywie.',

    quote:
      'Walka zaczyna się wtedy, gdy narzucasz rywalowi własne tempo.',

    stats: {
      fights: '24+'
    },

    titles: [
      'Mistrz stadionu Sinbi Boxing Stadium'
    ],

    achievements: {
      muayThai: [
        'Ponad 20 walk w Tajlandii',
        'Występy w organizacji Muay Hardcore',
        'Występy w organizacji Super Champ',
        'Występy w Rajadamnern World Series',
        'Trenował i reprezentował Phuket Fight Club',
        'Doświadczenie w walkach z rywalami wysokiego poziomu',
        'Mistrz stadionu Sinbi Boxing Stadium'
      ]
    },

    nationality: 'Polska',
    age: '31 lat',

    gallery: [

    ],

    videos: [
      {
        title: 'Trening / highlights',
        url: 'https://www.youtube.com/embed/VIDEO_ID'
      }
    ]
  },

  // {
  //   id: 5,
  //   name: 'Ivan Akhmatov',

  //   image: ivanFighter1,


  //   gallery: [

  //   ],

  //   videos: [
  //     {
  //       title: 'Trening / highlights',
  //       url: 'https://www.youtube.com/embed/VIDEO_ID'
  //     }
  //   ]
  // },
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
    image: sergeyTrener,
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
