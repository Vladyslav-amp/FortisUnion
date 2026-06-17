import { heroHighlights } from '../../data/siteData';
import './PromoHighlights.scss';

function PromoHighlights() {
  return (
    <section
      className="promo-highlights"
      aria-label="Najważniejsze elementy promocji"
    >
      <div className="container promo-highlights__inner">
        {heroHighlights.map((item, index) => (
          <article
            className="promo-highlights__card"
            key={item.label}
          >
            <span className="promo-highlights__index">
              0{index + 1}
            </span>

            <strong className="promo-highlights__value">
              {item.value}
            </strong>

            <p className="promo-highlights__label">
              {item.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PromoHighlights;