import { fighters } from '../../data/siteData';
import SectionHeading from '../Layout/SectionHeading';
import Tag from '../UI/Tag';
import './FightersGrid.scss';

function FightersGrid() {
  return (
    <section className="fighters-grid" id="fighters">
      <div className="container">
        <SectionHeading
          eyebrow="Zawodnicy"
          title="Cztery osobne marki. Każdy zawodnik ma swój styl, historię i potencjał medialny."
          description="To główna sekcja promocji. Podmień zdjęcia, rekordy, cytaty i biografie, a cały landing zacznie pracować pod twoich fighterów."
        />

        <div className="fighters-grid__list">
          {fighters.map((fighter) => (
            <article className="fighters-grid__card" key={fighter.id}>
              <div className="fighters-grid__media">
                <img src={fighter.image} alt={fighter.name} className="fighters-grid__image" />
                <span className="fighters-grid__index">0{fighter.id}</span>
                <div className="fighters-grid__overlay">
                  <span>{fighter.style}</span>
                  <strong>{fighter.record}</strong>
                </div>
              </div>
              <div className="fighters-grid__body">
                <div className="fighters-grid__meta">
                  <Tag>{fighter.nickname}</Tag>
                  <span className="fighters-grid__record">Rekord {fighter.record}</span>
                </div>
                <h3 className="fighters-grid__name">{fighter.name}</h3>
                <p className="fighters-grid__style">{fighter.style}</p>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FightersGrid;
