import './AboutUs.scss';
import aboutImage from '../../../public/about.webp';

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
      <div className="container about-us__container">
        <div className="section-heading__title about-us__section-title">O nas</div>

        <div className="about-us__intro">
          <span className="about-us__eyebrow">Kim jesteśmy</span>

          <h2 className="about-us__title">
            Fortis Union to projekt sportowy skupiający zawodników, trenerów i
            partnerów związanych ze sportami walki.
          </h2>

          <div className="about-us__intro-grid">
            <div className="about-us__description">
              <p className="about-us__lead">
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

              <p className="about-us__text">
                Projekt powstał z myślą o budowaniu czegoś więcej niż drużyny —
                tworzymy przestrzeń dla rozwoju sportowego, medialnego i
                partnerskiego.
              </p>
            </div>

            <div className="about-us__mission">
              <h3 className="about-us__mission-title">Misja</h3>

              <p className="about-us__mission-text">
                Budować silną społeczność sportów walki, wspierać rozwój
                zawodników oraz tworzyć wartościowe relacje z partnerami opartymi
                na autentyczności, ambicji i profesjonalizmie.
              </p>
            </div>
          </div>
        </div>

        <div className="about-us__media-row">
          <div className="about-us__image-wrap">
            <img
              className="about-us__image"
              src={aboutImage}
              alt="Fortis Union"
            />
          </div>

          <div className="about-us__values">
            <h3 className="about-us__values-title">Nasze wartości</h3>

            <div className="about-us__values-grid">
              {values.map(([title, text]) => (
                <div className="about-us__value" key={title}>
                  <p className="about-us__value-text">
                    <strong className="about-us__value-title">{title}</strong>{' '}
                    - {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
