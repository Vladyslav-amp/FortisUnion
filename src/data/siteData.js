const sergeyTrener = '/fighters/trener.png';

const alekseyFighter1 = '/fighters/Aleksey/1.jpg';
const alekseyFighter2 = '/fighters/Aleksey/2.jpg';
const alekseyFighter3 = '/fighters/Aleksey/3.jpg';
const alekseyFighter4 = '/fighters/Aleksey/4.jpg';
const alekseyFighter5 = '/fighters/Aleksey/1.mp4';

const tsemurFighter1 = '/fighters/Tsemur/1.jpg';

const ivanFighter1 = '/fighters/Ivan/1.webp';

const arturFighter1 = '/fighters/Artur/1.jpg';

const olegFighter1 = '/fighters/Oleg/1.webp';

const alexFighter1 = '/fighters/Alex/1.jpg';

const yuryFighter1 = '/fighters/Yury/1.jpg';

const logo = '/logo.png';
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
    height: '173',
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
      ko: '0',
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
      alekseyFighter2,
      alekseyFighter3,
      alekseyFighter4
    ],

    videos: [
      {
        title: 'Walka / highlights',
        url: 'https://www.youtube.com/embed/-YkXwtOu7zs?start=4844'
      },

      {
        title: 'Walka / highlights',
        url: '/fighters/Aleksey/1.mp4'
      },

      {
        title: 'Walka / highlights',
        url: '/fighters/Aleksey/2.mp4'
      },
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
      ko: '0',
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
    image: arturFighter1,

    shortStory:
      'Polski zawodnik o ofensywnym stylu walki, dużej determinacji i bogatym doświadczeniu zdobytym między innymi w Tajlandii.',

    longStory:
      'Artur Felkner to polski zawodnik specjalizujący się w ofensywnym stylu opartym na mocnym uderzeniu oraz technikach low kick. Posiada rekord 15–7–2 i ma za sobą ponad 20 walk stoczonych w Tajlandii. Występował w renomowanych organizacjach, takich jak Muay Hardcore, Super Champ oraz Rajadamnern World Series. Trenował i reprezentował Phuket Fight Club, mierząc się z rywalami wysokiego poziomu. Jest także mistrzem stadionu Sinbi Boxing Stadium. To zawodnik widowiskowy, twardy i zdeterminowany, który chętnie podejmuje walkę w ofensywie.',

    quote:
      'Walka zaczyna się wtedy, gdy narzucasz rywalowi własne tempo.',

    stats: {
      ko: '0',
      submissions: '0',
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

  {
    id: 5,
    name: 'Oleh Lakutin',
    nickname: 'Universal',

    style: 'K-1 / Kickboxing',

    record: 'Brak danych',

    height: null,
    reach: null,
    weight: 'do 90 kg',

    experience: 'Wieloletnie doświadczenie w sportach walki',
    image: olegFighter1,

    shortStory:
      'Wszechstronny zawodnik z Ukrainy, posiadający doświadczenie w sportach uderzanych, chwytanych oraz przygotowaniu siłowym i wytrzymałościowym.',

    longStory:
      'Oleh Lakutin to zawodnik reprezentujący Ukrainę, specjalizujący się w formule K-1 i kickboxingu. Posiada doświadczenie treningowe zdobywane w boksie, K-1, judo oraz MMA. Jego przygotowanie opiera się zarówno na sportach uderzanych, jak i zapasach, dzięki czemu wypracował uniwersalną bazę zawodniczą. Przez lata rozwijał również przygotowanie siłowe, kondycyjne i wytrzymałościowe, uczestnicząc między innymi w zawodach oraz treningach długodystansowych.',

    quote:
      'Wszechstronność daje przewagę niezależnie od formuły walki.',

    stats: {
      ko: '0',
      submissions: '0',
      fights: '0'
    },

    titles: [
      'Doświadczony zawodnik K-1 i kickboxingu',
      'Praktyk sportów uderzanych oraz chwytanych'
    ],

    achievements: {
      kickboxing: [
        'Doświadczenie treningowe w K-1',
        'Doświadczenie treningowe w kickboxingu',
        'Budowanie uniwersalnej bazy zawodniczej (uderzenia + zapasy)',
        'Wysoki poziom przygotowania siłowego i kondycyjnego'
      ],

      combatSports: [
        'Doświadczenie treningowe w boksie',
        'Doświadczenie treningowe w judo',
        'Doświadczenie treningowe w MMA',
        'Praktyczna baza w dyscyplinach uderzanych i zapaśniczych'
      ],

      endurance: [
        'Wieloletnie doświadczenie w treningu siłowym',
        'Doświadczenie w treningu wytrzymałościowym',
        'Udział w dystansach maratońskich'
      ]
    },

    nationality: 'Ukraina',
    flag: '🇺🇦',
    age: '29 lat',

    gallery: [
    ],

    videos: [
      {
        title: 'Trening K-1',
        url: 'https://www.youtube.com/embed/VIDEO_ID'
      }
    ]
  },

  {
    id: 6,
    name: 'Aliaksandr Liatas',
    nickname: 'Champion',

    style: 'K-1 / Muay Thai',

    record: '5-3',
    recordLabel: 'Rekord',

    height: null,
    reach: null,
    weight: '68–71 kg',

    experience: '8 walk zawodowych i turniejowych',
    image: alexFighter1,

    shortStory:
      '5-krotny mistrz Republiki Białorusi w kickboxingu, posiadający doświadczenie w walkach turniejowych oraz rywalizacji na poziomie krajowym.',

    longStory:
      'Aliaksandr Liatas to zawodnik z Republiki Białorusi specjalizujący się w formule K-1 oraz Muay Thai. W swojej karierze stoczył 8 walk, odnosząc 5 zwycięstw i ponosząc 3 porażki. Jest 5-krotnym mistrzem Republiki Białorusi w kickboxingu oraz uczestnikiem licznych walk i turniejów. Posiada doświadczenie startowe, dobrze rozwiniętą bazę techniczną oraz praktykę w sportach uderzanych. Regularnie przygotowywał się do rywalizacji sportowej na poziomie krajowym.',

    quote:
      'Technika i regularność budują przewagę, zanim zabrzmi pierwszy gong.',

    stats: {
      ko: '0',
      submissions: '0',
      fights: '8'
    },

    titles: [
      '5-krotny Mistrz Republiki Białorusi w kickboxingu'
    ],

    achievements: {
      kickboxing: [
        '5-krotny Mistrz Republiki Białorusi w kickboxingu',
        'Uczestnik walk i turniejów w formule kickboxingu',
        'Potwierdzone doświadczenie startowe',
        'Doświadczenie w przygotowaniu do rywalizacji sportowej'
      ],

      muayThai: [
        'Praktyka i doświadczenie w formule Muay Thai',
        'Silna baza techniczna w sportach uderzanych'
      ]
    },

    nationality: 'Białoruś',
    flag: '🇧🇾',
    age: '27 lat',

    gallery: [
    ],

    videos: [
      {
        title: 'Walka / highlights',
        url: 'https://www.youtube.com/embed/VIDEO_ID'
      }
    ]
  },

  {
    id: 7,
    name: 'Yury Kryvulka',
    nickname: null,

    style: 'MMA',

    record: 'Brak danych',

    recordDouble: '2-1',
    recordDoubleLabel: 'Gołe pięści',

    height: null,
    reach: null,
    weight: '70 kg',

    experience: 'Doświadczenie w walkach kontaktowych',
    image: yuryFighter1,

    shortStory:
      'Zawodnik MMA kategorii 70 kg oraz reprezentant pierwszego składu Fortis Union, rozwijający swoją karierę w sportach walki.',

    longStory:
      'Yury Kryvulka to zawodnik z Republiki Białorusi specjalizujący się w formule MMA. Rywalizuje w kategorii wagowej 70 kg i posiada doświadczenie zdobywane w walkach kontaktowych. Dodatkowo występował w walkach na gołe pięści, gdzie wypracował rekord 2 zwycięstw i 1 porażki. Jest reprezentantem pierwszego składu Fortis Union i konsekwentnie rozwija swój profil sportowy.',

    quote:
      'Każda walka to kolejny krok w rozwoju zawodnika.',

    stats: {
      ko: '0',
      submissions: '0',
      fights: '0'
    },

    titles: [
      'Reprezentant pierwszego składu Fortis Union'
    ],

    achievements: {
      mma: [
        'Zawodnik MMA kategorii 70 kg',
        'Doświadczenie w walkach kontaktowych',
        'Aktywny rozwój kariery sportowej'
      ],

      bareKnuckle: [
        'Rekord walk na gołe pięści: 2-1'
      ]
    },

    nationality: 'Białoruś',
    flag: '🇧🇾',
    age: '32 lata',

    gallery: [

    ],

    videos: [
      {
        title: 'MMA / Highlights',
        url: 'https://www.youtube.com/embed/VIDEO_ID'
      }
    ]
  }

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
  { id: 1, title: 'Fight camp diary', text: 'Dziennik przygotowań i klimat wysokiego poziomu.', image: logo },
  { id: 2, title: 'Open workout', text: 'Treści pod social i partnerów marki.', image: logo },
  { id: 3, title: 'Backstage stories', text: 'Materiały zakulisowe budujące przywiązanie fanów.', image: logo },
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
