import { Link } from 'react-router-dom';
import { fighters } from '../../data/siteData';
import SectionHeading from '../Layout/SectionHeading/SectionHeading';
import './FightersGrid.scss';

function FightersGrid() {
  return (
    <section className="fighters-grid" id="fighters">
      <div className="container">
        <SectionHeading
          eyebrow="Zawodnicy"
          title="Poznaj sportowców, którzy budują swoją przyszłość."
          description="Od pierwszych zwycięstw po największe wyzwania - pokazujemy ludzi stojących za wynikami i pomagamy im budować rozpoznawalną markę."
        />

        <div className="fighters-grid__list">
          {fighters
            .filter((fighter) => fighter.id !== 1)
            .map((fighter) => (
              <Link
                key={fighter.id}
                to={`/fighters/${fighter.id}`}
                className="fighters-grid__card-link"
              >
                <article className="fighters-grid__card">
                  <div className="fighters-grid__media">
                    <img
                      src={fighter.image}
                      alt={fighter.name}
                      className="fighters-grid__image"
                      style={{
                        objectPosition: event.imagePosition || 'center top'
                      }}
                    />

                    {/* <span className="fighters-grid__index">
                      0{fighter.id}
                    </span> */}

                    {/* <div className="fighters-grid__overlay">
                      <strong>{fighter.record}</strong>
                    </div> */}
                  </div>

                  <div className="fighters-grid__body">
                    <h3 className="fighters-grid__name">
                      {fighter.name}
                    </h3>

                    <p className="fighters-grid__style">
                      {fighter.style}
                    </p>

                    <p className="fighters-grid__story">
                      {fighter.shortStory}
                    </p>

                    <div className="fighters-grid__stats">
                      <div>
                        <strong>{fighter.age}</strong>
                        <span>Wiek</span>
                      </div>

                      <div>
                        <strong>{fighter.stats.fights}</strong>
                        <span>Walki</span>
                      </div>

                      {/* <div>
                        <strong>{fighter.weight}</strong>
                        <span>Waga</span>
                      </div> */}

                    </div>
                  </div>
                </article>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

export default FightersGrid;