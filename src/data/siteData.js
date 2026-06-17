const sergeyTrener = '/fighters/trener.webp';

const fightersPromo = '/fortis_fighters.mp4';

const alekseyFighter1 = '/fighters/Aleksey/1.webp';
const alekseyFighter2 = '/fighters/Aleksey/2.webp';
const alekseyFighter3 = '/fighters/Aleksey/3.webp';
const alekseyFighter4 = '/fighters/Aleksey/4.webp';
const alekseyFighter5 = '/fighters/Aleksey/1.mp4';

const tsemurFighter1 = '/fighters/Tsemur/1.webp';

const ivanFighter1 = '/fighters/Ivan/1.webp';

const arturFighter1 = '/fighters/Artur/1.webp';
const arturEvent = '/fighters/Artur/event-main.webp';
const eventArtur = '/fighters/Artur/event.mp4';
const event1Artur = '/fighters/Artur/event1.mp4';
const event2Artur = '/fighters/Artur/event2.mp4';

const olegFighter1 = '/fighters/Oleg/1.webp';

const alexFighter1 = '/fighters/Alex/1.webp';

const yuryFighter1 = '/fighters/Yury/1.webp';

const logo = '/logo.png';


export const fighters = [
  {
    id: 1,
    name: 'Siergiej Szymański',
    nickname: 'Mistrz Muay Thai',
    style: 'Muay Thai',
    experience: '20+ lat',
    age: '45 lat',
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
      'Mistrz Sportu Republiki Białorusi',
      'Mistrz Sportu Republiki Białorusi klasy międzynarodowej',
      'Interkontynentalny mistrz świata zawodowców',
      'Mistrz Europy',
      '3-krotny mistrz Białorusi',
      'Od 2010 roku pracuje jako trener'
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
    name: 'Artur Felkner',
    style: 'Puncher / Low Kick',
    weight: '68 - 70 kg',

    image: arturFighter1,
    shortStory:
      'Polski zawodnik o ofensywnym stylu walki, dużej determinacji i bogatym doświadczeniu zdobytym między innymi w Tajlandii.',

    longStory:
      'Artur Felkner to polski zawodnik specjalizujący się w ofensywnym stylu opartym na mocnym uderzeniu oraz technikach low kick. Ma za sobą ponad 20 walk stoczonych w Tajlandii. Występował w renomowanych organizacjach, takich jak Muay Hardcore, Super Champ oraz Rajadamnern World Series. Trenował i reprezentował Phuket Fight Club, mierząc się z rywalami wysokiego poziomu. Jest także mistrzem stadionu Sinbi Boxing Stadium. To zawodnik widowiskowy, twardy i zdeterminowany, który chętnie podejmuje walkę w ofensywie.',

    quote:
      'Walka zaczyna się wtedy, gdy narzucasz rywalowi własne tempo.',

    stats: {
      fights: '25+'
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

    // gallery: [

    // ],

    // videos: [
    //   {

    //   }
    // ]
  },

  {
    id: 3,
    name: 'Tsemur Fatakhau',
    style: 'Boks',
    recordLabel: 'Walki zawodowe',
    record: '5',
    weight: '77 kg',
    image: tsemurFighter1,

    shortStory:
      'Mistrz Sportu Republiki Białorusi, medalista mistrzostw Europy oraz bardzo doświadczony zawodnik z dorobkiem ponad 280 walk.',

    longStory:
      'Tsemur Fatakhau to zawodnik z Republiki Białorusi specjalizujący się w boksie oraz walkach na gołe pięści. Posiada tytuł Mistrza Sportu Republiki Białorusi, jest medalistą mistrzostw Europy oraz wielokrotnym zwycięzcą i medalistą mistrzostw Białorusi oraz turniejów międzynarodowych. W karierze stoczył ponad 280 walk, a dodatkowo posiada doświadczenie w boksie zawodowym oraz walkach na gołe pięści. To twardy, wszechstronny i doświadczony zawodnik, który dobrze odnajduje się w różnych formułach walki.',

    quote:
      'Prawdziwe doświadczenie pokazuje się wtedy, gdy zmienia się formuła walki.',

    stats: {
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

    // gallery: [
    // ],

    // videos: [
    //   {
    //     title: 'Trening / highlights',
    //     url: 'https://www.youtube.com/embed/VIDEO_ID'
    //   }
    // ]
  },

  {
    id: 4,
    name: 'Oleh Lakutin',
    style: 'K-1 / Kickboxing',
    weight: 'do 90 kg',
    image: olegFighter1,

    shortStory:
      'Wszechstronny zawodnik z Ukrainy, posiadający doświadczenie w sportach uderzanych, chwytanych oraz przygotowaniu siłowym i wytrzymałościowym.',

    longStory:
      'Oleh Lakutin to zawodnik reprezentujący Ukrainę, specjalizujący się w formule K-1 i kickboxingu. Posiada doświadczenie treningowe zdobywane w boksie, K-1, judo oraz MMA. Jego przygotowanie opiera się zarówno na sportach uderzanych, jak i zapasach, dzięki czemu wypracował uniwersalną bazę zawodniczą. Przez lata rozwijał również przygotowanie siłowe, kondycyjne i wytrzymałościowe, uczestnicząc między innymi w zawodach oraz treningach długodystansowych.',

    quote:
      'Wszechstronność daje przewagę niezależnie od formuły walki.',

    titles: [
      'Doświadczenie treningowe w boksie, K-1, judo i MMA',
      'Praktyczna baza w dyscyplinach uderzanych i zapaśniczych',
      'Budowanie uniwersalnej bazy zawodniczej (uderzenia + zapasy)',
      'K-1: 4 zwycięstwa',
      'Wysoki poziom przygotowania siłowego i kondycyjnego',
      'Wieloletnie doświadczenie w treningu siłowym (powerlifting / kulturystyka)',
      'Doświadczenie w treningu wytrzymałościowym, udział w dystansach maratońskich'
    ],

    stats: {
      fights: '0'
    },

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

    nationality: 'Republika Ukraina',
    age: '29 lat',

    // gallery: [
    // ],

    // videos: [
    //   {

    //   }
    // ]
  },

  {
    id: 5,
    name: 'Aliaksandr Liatas',
    style: 'K-1 / Muay Thai',
    recordLabel: 'Walki zawodowe',
    record: '8',
    weight: '68–71 kg',
    image: alexFighter1,

    shortStory:
      '5-krotny mistrz Republiki Białorusi w kickboxingu, posiadający doświadczenie w walkach turniejowych oraz rywalizacji na poziomie krajowym.',

    longStory:
      'Aliaksandr Liatas to zawodnik z Republiki Białorusi specjalizujący się w formule K-1 oraz Muay Thai. W swojej karierze stoczył 8 walk, odnosząc 5 zwycięstw i ponosząc 3 porażki. Jest 5-krotnym mistrzem Republiki Białorusi w kickboxingu oraz uczestnikiem licznych walk i turniejów. Posiada doświadczenie startowe, dobrze rozwiniętą bazę techniczną oraz praktykę w sportach uderzanych. Regularnie przygotowywał się do rywalizacji sportowej na poziomie krajowym.',

    quote:
      'Technika i regularność budują przewagę, zanim zabrzmi pierwszy gong.',

    stats: {
      fights: '70+'
    },

    titles: [
      '5-krotny Mistrz Republiki Białorusi w kickboxingu',
      'Zawodnik z potwierdzonym doświadczeniem startowym',
      'Uczestnik walk i turniejów w formule kickboxingu',
      'Doświadczenie w przygotowaniu do rywalizacji sportowe',
      'Silna baza techniczna i praktyka w sportach uderzanych',
      '8 walk zawodowych i turniejowych'
    ],

    achievements: {
      kickboxing: [
        '5-krotny Mistrz Republiki Białorusi w kickboxingu',
        'Uczestnik walk i turniejów w formule kickboxingu',
        'Potwierdzone doświadczenie startowe'
      ],

      muayThai: [
        'Praktyka i doświadczenie w formule Muay Thai',
        'Silna baza techniczna w sportach uderzanych'
      ]
    },

    nationality: 'Republika Białorusi',
    age: '27 lat',

    // gallery: [
    // ],

    // videos: [
    //   {
    //     title: 'Walka / highlights',
    //     url: 'https://www.youtube.com/embed/VIDEO_ID'
    //   }
    // ]
  },

  {
    id: 6,
    name: 'Aliaksei Dziarnou',
    style: 'Boks',
    recordLabel: 'Walki zawodowe',
    record: '2',
    height: '173',
    weight: '75–80 kg',
    image: alekseyFighter2,

    shortStory:
      'Mistrz Sportu Republiki Białorusi, mistrz Republiki Białorusi oraz bardzo doświadczony zawodnik z dorobkiem 267 walk w karierze.',

    longStory:
      'Aliaksei Dziarnou to białoruski bokser specjalizujący się w kategorii wagowej 75–80 kg. Posiada tytuł Mistrza Sportu Republiki Białorusi oraz tytuł Mistrza Republiki Białorusi. W swojej karierze stoczył 267 walk, wielokrotnie zwyciężał w międzynarodowych turniejach, między innymi w Estonii, Litwie i Tadżykistanie, a także brał udział w mistrzostwach świata i Europy. To zawodnik bardzo doświadczony, wyróżniający się wysoką kulturą bokserską.',

    quote:
      'Boks to nie tylko siła, ale przede wszystkim technika, timing i doświadczenie.',

    stats: {
      fights: '267+'
    },

    titles: [
      'Mistrz Sportu Republiki Białorusi',
      'Mistrz Republiki Białorusi',
      'Wielokrotny zwycięzca turniejów międzynarodowych',
      'Uczestnik mistrzostw świata i Europy'
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
      alekseyFighter1,
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
    id: 7,
    name: 'Ivan Akhmatov',
    style: 'K-1 / Muay Thai',
    weight: '94 kg',
    image: ivanFighter1,

    shortStory:
      'Reprezentant Ukrainy oraz zawodnik pierwszego składu Fortis Union. Rozwija się w formułach K-1 i Muay Thai, regularnie uczestnicząc w przygotowaniach sportowych oraz budując doświadczenie potrzebne do rywalizacji na coraz wyższym poziomie.',

    longStory:
      'Reprezentant Fortis Union z Ukrainy. Na co dzień rozwija swoje umiejętności w formułach K-1 i Muay Thai, regularnie uczestnicząc w przygotowaniach sportowych. Charakteryzuje się dużą motywacją, zaangażowaniem oraz konsekwencją w treningu. Buduje doświadczenie ringowe i konsekwentnie pracuje nad dalszym rozwojem sportowym.',

    quote:
      'Każdy trening to kolejny krok do celu.',

    stats: {
      fights: '0',
    },

    nationality: 'Republika Ukraina',
    age: '28 lat',

    titles: [
      'Zawodnik pierwszego składu Fortis Union'
    ],

    achievements: {
      combatSports: [
        'Zawodnik pierwszego składu Fortis Union',
        'Profil sportowy w trakcie rozwoju',
        'Regularne przygotowania w formule K-1 / Muay Thai',
        'Ambitny zawodnik z dużą motywacją do startów',
        'Solidna baza treningowa i gotowość do dalszego rozwoju'
      ]
    },

    // gallery: [

    // ],

    // videos: [
    //   {

    //   }
    // ]
  },

  {
    id: 8,
    name: 'Yury Kryvulka',
    style: 'MMA',
    recordLabel: 'Walki zawodowe',
    record: '3',
    weight: '70 kg',

    image: yuryFighter1,

    shortStory:
      'Zawodnik MMA kategorii 70 kg oraz reprezentant pierwszego składu Fortis Union, rozwijający swoją karierę w sportach walki.',

    longStory:
      'Yury Kryvulka to zawodnik z Republiki Białorusi specjalizujący się w formule MMA. Rywalizuje w kategorii wagowej 70 kg i posiada doświadczenie zdobywane w walkach kontaktowych. Dodatkowo występował w walkach na gołe pięści, gdzie wypracował rekord 2 zwycięstw i 1 porażki. Jest reprezentantem pierwszego składu Fortis Union i konsekwentnie rozwija swój profil sportowy.',

    quote:
      'Każda walka to kolejny krok w rozwoju zawodnika.',

    titles: [
      'Reprezentant pierwszego składu Fortis Union'
    ],

    stats: {
      fights: '25+',
    },

    achievements: {
      mma: [
        'Zawodnik MMA kategorii 70 kg',
        'Doświadczenie w walkach kontaktowych',
        'Aktywny rozwój kariery sportowej'
      ],

      bareKnuckle: [
        'Walki na gołe pięści: 2 zwycięstwa'
      ]
    },

    nationality: 'Republika Białorusi',
    age: '32 lata',

    // gallery: [

    // ],

    // videos: [
    //   {
    //   }
    // ]
  }
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
    date: '20 czerwca 2026',
    dateISO: '2026-06-20',
    title: 'Strike King 9',
    fightCard: 'Mateusz Janik vs Artur Felker',
    location: 'Kraków, Synerise Arena',
    status: 'Potwierdzona walka',
    image: arturEvent,

    description:
      'Reprezentant Fortis Union Artur Felker zmierzy się z Mateuszem Janikiem w formule Muay Thai. Starcie dwóch doświadczonych zawodników zapowiada się jako jedno z najciekawszych zestawień wieczoru.',

    longDescription:
      `Podczas STRIKE KING 9 zobaczymy starcie dwóch zawodników, którzy mają bardzo konkretne cele. 
      
      Mateusz Janik wraca do ringu z ogromną motywacją, by udowodnić, że stać go na wielkie rzeczy i ponownie zaznaczyć swoją obecność na gali Strike King. 👊
      
      Artur Felkner ma już na swoim koncie efektowne zwycięstwo na gali Strike King i z pewnością będzie chciał potwierdzić, że świetnie czuje się na tej scenie.
     
      Dodatkowo walka odbędzie się w formule Muay Thai!
      Większa dynamika, wykorzystanie kolan i łokci oraz nieustanna presja sprawiają, że emocje sięgają najwyższego poziomu.`,

    // highlights: [
    //   'Muay Thai Rules',
    //   'Artur Felker reprezentuje Fortis Union',
    //   'Pełna relacja foto i video',
    //   'Kulisy przygotowań zawodnika',
    // ],

    // gallery: [
    //   arturFighter1,
    //   arturFighter1,
    //   arturFighter1
    // ],

    videos: [
      {
        title: 'Backstage',
        url: event1Artur
      },

      {
        title: 'Przed walką',
        url: event2Artur
      }
    ],
  }
];

export const mediaGallery = [
  {
    id: 1,
    // title: 'Fight camp diary',
    // text: 'Dziennik przygotowań i klimat wysokiego poziomu.',
    videos: [
      {
        id: 1,
        // title: 'Backstage',
        url: fightersPromo,
      },
    ],
  },
];

export const blogPosts = [
  // {
  //   id: 1,
  //   category: 'Analiza',
  //   date: '10 kwietnia 2026',
  //   title: 'Jak zbudować narrację zawodnika, żeby przyciągał sponsorów',
  //   excerpt: 'Przykładowy wpis o tym, jak opakować historię fightera, aby zwiększać wartość medialną i sprzedażową.',
  //   image: sergeyTrener,
  // }
];
