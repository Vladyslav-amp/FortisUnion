import './Partners.scss';

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
      <div className="container partners__header">
        <span className="partners__eyebrow">Partnerzy</span>

        <h2 className="partners__title">
          Marki i ludzie, którzy wspierają rozwój zawodników
        </h2>
      </div>

      <div className="partners__slider" aria-label="Lista partnerów">
        <div className="partners__track">
          {repeatedPartners.map((partner, index) => (
            <div className="partners__item" key={`${partner.name}-${index}`}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;