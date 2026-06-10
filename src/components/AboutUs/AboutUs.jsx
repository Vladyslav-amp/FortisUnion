import './AboutUs.scss';
import aboutImage from '../../../public/logo.png';

const values = [
  ['Siła', 'charakter, odwaga i determinacja'],
  ['Dyscyplina', 'konsekwencja w codziennej pracy'],
  ['Jedność', 'drużyna i wspólny cel'],
  ['Profesjonalizm', 'wysoki standard działania'],
  ['Wizerunek', 'rozpoznawalna marka sportowa'],
  ['Rozwój', 'sportowy, medialny i biznesowy'],
];

function AboutUs() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="section-heading__title">O nas</div>

        <div className="about-us__hero">
          <div className="about-us__content">
            <span className="about-us__eyebrow">
              Kim jesteśmy
            </span>

            <h2 className="about-us__title">
              Fortis Union to projekt sportowy skupiający zawodników, trenerów i partnerów związanych ze sportami walki.
            </h2>

            <p className="about-us__lead">
              Tworzymy środowisko, w którym talent, ciężka praca i charakter przekładają się na realny rozwój sportowy oraz budowę silnej marki.
            </p>

            <p className="about-us__text">
              Łączymy doświadczenie zdobywane na sali treningowej z nowoczesnym podejściem do promocji zawodników i współpracy biznesowej. Nasz zespół tworzą reprezentanci boksu, kickboxingu, Muay Thai oraz MMA.
            </p>

            <p className="about-us__text">
              Projekt powstał z myślą o budowaniu czegoś więcej niż drużyny — tworzymy przestrzeń dla rozwoju sportowego, medialnego i partnerskiego.
            </p>

            <div className="about-us__mission">
              <h3>Misja</h3>

              <p>
                Budować silną społeczność sportów walki, wspierać rozwój zawodników oraz tworzyć wartościowe relacje z partnerami opartymi na autentyczności, ambicji i profesjonalizmie.
              </p>
            </div>
          </div>

          <div className="about-us__image-wrap">
            <img
              className="about-us__image"
              src={aboutImage}
              alt="Fortis Union"
            />
          </div>
        </div>

        <div className="about-us__values">
          <h3>Nasze wartości</h3>

          <div className="about-us__values-grid">
            {values.map(([title, text]) => (
              <div
                className="about-us__value"
                key={title}
              >
                <p>
                  <strong>{title}</strong>
                  {' '}
                  — {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;