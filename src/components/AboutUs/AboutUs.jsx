import './AboutUs.scss';
import founderImage from '../../../public/about.webp';
import Artsemi from '/founder/Artsemi.webp';
import Aleh from '/founder/Aleh.webp';
import SectionHeading from '../Layout/SectionHeading/SectionHeading';

const founders = [
  {
    id: 1,
    name: 'Aleh Khamitsevich',
    role: 'Prezes zarządu Fortis Union',
    image: Aleh,
  },
  {
    id: 2,
    name: 'Artsemi Davydzenka',
    role: 'Współwłaściciel Fortis Union',
    image: Artsemi,
  },
  // {
  //   id: 3,
  //   name: 'Shadi',
  //   role: 'Dyrektor sportowy',
  //   image: founderImage,
  // },
];

function AboutUs() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        {/* <SectionHeading eyebrow="O Nas" /> */}

        <div className="about-us__hero">
          <div className="about-us__content">
            <h1 className="about-us__text-title">
              Kim jesteśmy
            </h1>

            <p className="about-us__text">
              <span className="about-us__text--gold">Fortis Union</span> to projekt sportowy skupiający zawodników, trenerów i
              partnerów związanych ze sportami walki.
            </p>

            <p className="about-us__text">
              Tworzymy środowisko, w którym talent, ciężka praca i charakter
              przekładają się na realny rozwój sportowy oraz budowę silnej
              marki.
            </p>

            <p className="about-us__text">
              Łączymy doświadczenie zdobywane na sali treningowej z nowoczesnym
              podejściem do promocji zawodników i współpracy biznesowej. Nasz
              zespół tworzą reprezentanci boksu, kickboxingu, Muay Thai oraz
              MMA.
            </p>

          </div>

          <div className="about-us__hero-image">
            <img src={founderImage} alt="Fortis Union MMA" />
          </div>
        </div>

        <div className="about-us__founders-heading">
          <span className="about-us__line"></span>

          <h2 className="about-us__founders-title">
            ZAŁOŻYCIELE
          </h2>

          <span className="about-us__line"></span>
        </div>

        <div className="about-us__founders">
          {founders.map(founder => (
            <div className="about-us__card" key={founder.id}>

              <img
                src={founder.image}
                alt={founder.name}
                className="about-us__card-image"
              />
              <div className="about-us__overlay">
                <h3>{founder.name}</h3>
                <p>{founder.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;