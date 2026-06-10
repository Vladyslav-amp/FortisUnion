import './AboutUs.scss';
import aboutImage from '../../../public/logo.png';

function AboutUs() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="section-heading__title">O nas</div>
        <div className="about-us__inner">
          <div className="about-us__image-wrap">
            <img
              className="about-us__image"
              src={aboutImage}
              alt="Fortis Union team"
            />
          </div>

          <div className="about-us__content">

            <h2 className="about-us__title">
              Budujemy rozpoznawalność zawodników, którzy chcą wejść poziom wyżej
            </h2>

            <p className="about-us__text">
              Fortis Union powstało z potrzeby połączenia sportu, promocji i
              profesjonalnego wizerunku. Widzieliśmy wielu ambitnych zawodników,
              którzy mieli charakter, historię i potencjał, ale brakowało im
              odpowiedniej ekspozycji.
            </p>

            <p className="about-us__text">
              Dlatego stworzyliśmy przestrzeń, która pomaga fighterom pokazać się
              szerzej — przed galą, turniejem, walką lub ważnym etapem kariery.
              Łączymy content, storytelling, social media i kontakty biznesowe,
              aby zawodnik był widoczny nie tylko w klatce lub ringu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;