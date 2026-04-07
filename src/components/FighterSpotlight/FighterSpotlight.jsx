import SectionHeading from '../Layout/SectionHeading/SectionHeading';
import Badge from '../UI/Badge/Badge';
import { featuredFighter } from '../../data/siteData';
import './FighterSpotlight.scss';

function FighterSpotlight() {
  return (
    <section className="fighter-spotlight">
      <div className="container fighter-spotlight__grid">
        <div className="fighter-spotlight__visual">
          <img src={featuredFighter.image} alt={featuredFighter.name} className="fighter-spotlight__image" />
        </div>
        <div className="fighter-spotlight__content">
          <SectionHeading
            eyebrow="Spotlight"
            title={featuredFighter.name}
            description={featuredFighter.longStory}
          />
          <div className="fighter-spotlight__quote">“{featuredFighter.quote}”</div>
          <div className="fighter-spotlight__badges">
            <Badge value={featuredFighter.record} label="Rekord" />
            <Badge value={featuredFighter.reach} label="Zasięg" />
            <Badge value={featuredFighter.height} label="Wzrost" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FighterSpotlight;
