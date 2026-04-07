
import { Link } from 'react-router-dom';
import { fighters } from '../../data/siteData';
import SectionHeading from '../Layout/SectionHeading/SectionHeading';
import Tag from '../UI/Tag/Tag';
import './FightersGrid.scss';

function FightersGrid() {
  return (
    <section className="fighters-grid" id="fighters">
      <div className="container">
        <SectionHeading
          eyebrow="Top roster"
          title="Czterech zawodników, każdy z własnym archetypem i historią"
          description="Kliknięcie w kartę przenosi do pełnego profilu ze zdjęciami, video, bio i osiągnięciami."
        />

        <div className="fighters-grid__list">
          {fighters.map((fighter) => (
            <Link className="fighters-grid__card" key={fighter.id} to={`/fighters/${fighter.slug}`}>
              <div className="fighters-grid__media">
                <img src={fighter.image} alt={fighter.name} className="fighters-grid__image" />
                <span className="fighters-grid__index">0{fighter.id}</span>
              </div>
              <div className="fighters-grid__body">
                <div className="fighters-grid__meta">
                  <Tag>{fighter.style}</Tag>
                  <span className="fighters-grid__record">{fighter.record}</span>
                </div>
                <h3 className="fighters-grid__name">{fighter.name}</h3>
                <p className="fighters-grid__nickname">{fighter.nickname}</p>
                <p className="fighters-grid__story">{fighter.shortStory}</p>
                <div className="fighters-grid__stats">
                  <div>
                    <strong>{fighter.stats.ko}</strong>
                    <span>KO/TKO</span>
                  </div>
                  <div>
                    <strong>{fighter.stats.submissions}</strong>
                    <span>Poddania</span>
                  </div>
                  <div>
                    <strong>{fighter.stats.fights}</strong>
                    <span>Walki</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FightersGrid;
