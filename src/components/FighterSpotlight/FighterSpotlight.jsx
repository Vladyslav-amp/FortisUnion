import { useNavigate } from 'react-router-dom';
import SectionHeading from '../Layout/SectionHeading/SectionHeading';
import Badge from '../UI/Badge/Badge';
import { fighters } from '../../data/siteData';
import './FighterSpotlight.scss';

const featuredFighter = fighters.find((fighter) => fighter.id === 1);

function FighterSpotlight() {
  const navigate = useNavigate();

  if (!featuredFighter) {
    return null;
  }

  const goToFighter = () => {
    navigate(`/fighters/${featuredFighter.id}`);
  };

  return (
    <section className="fighter-spotlight">
      <div className="container fighter-spotlight__container">
        <div className="fighter-spotlight__heading">Poznaj Trenera</div>

        <div
          className="fighter-spotlight__grid"
          onClick={goToFighter}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              goToFighter();
            }
          }}
        >
          <div className="fighter-spotlight__visual">
            <img
              src={featuredFighter.image}
              alt={featuredFighter.name}
              className="fighter-spotlight__image"
            />
          </div>

          <div className="fighter-spotlight__content">
            <SectionHeading
              title={featuredFighter.name}
              description={featuredFighter.longStory}
            />

            <blockquote className="fighter-spotlight__quote">
              “{featuredFighter.quote}”
            </blockquote>

            <div className="fighter-spotlight__badges">
              <Badge value={featuredFighter.experience} label="Doświadczenie" />
              <Badge value="20" label="Przygotowanych Zawodników" />
              <Badge value="100" label="Walk Pod Opieką" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FighterSpotlight;
