import './Partners.scss';
import SectionHeading from '../Layout/SectionHeading/SectionHeading';

const partners = [
  { name: 'Partner 1', logo: '/logo.png' },
  { name: 'Partner 2', logo: '/logo.png' },
  { name: 'Partner 3', logo: '/logo.png' },
  { name: 'Partner 4', logo: '/logo.png' },
  { name: 'Partner 5', logo: '/logo.png' },
  { name: 'Partner 6', logo: '/logo.png' },
];

function Partners() {
  const repeatedPartners = [...partners, ...partners];

  return (
    <section className="partners" id="partners">
      <div className="container">
        <SectionHeading
          eyebrow="Partnerzy"
          title="Marki i ludzie, którzy wspierają rozwój zawodników."
        />

        <div className="partners__slider" aria-label="Lista partnerów">
          <div className="partners__track">
            {repeatedPartners.map((partner, index) => (
              <div className="partners__item" key={`${partner.name}-${index}`}>
                <img
                  className="partners__logo"
                  src={partner.logo}
                  alt={partner.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
