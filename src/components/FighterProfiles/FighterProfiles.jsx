
import { Link } from 'react-router-dom';
import { fighters } from '../../data/siteData';
import Button from '../UI/Button/Button';
import './FighterProfiles.scss';

function FighterProfiles() {
  return (
    <section className="fighter-profiles">
      <div className="container fighter-profiles__list">
        {fighters.map((fighter) => (
          <article className="fighter-profiles__card" key={fighter.id}>
            <img src={fighter.image} alt={fighter.name} className="fighter-profiles__image" />
            <div className="fighter-profiles__content">
              <div className="fighter-profiles__headline">
                <h2 className="fighter-profiles__name">{fighter.name}</h2>
                <span className="fighter-profiles__nickname">{fighter.nickname}</span>
              </div>
              <p className="fighter-profiles__story">{fighter.longStory}</p>
              <div className="fighter-profiles__info-grid">
                <div>
                  <strong>{fighter.record}</strong>
                  <span>Rekord</span>
                </div>
                <div>
                  <strong>{fighter.height}</strong>
                  <span>Wzrost</span>
                </div>
                <div>
                  <strong>{fighter.reach}</strong>
                  <span>Zasięg</span>
                </div>
                <div>
                  <strong>{fighter.style}</strong>
                  <span>Styl</span>
                </div>
              </div>
              <div className="fighter-profiles__actions">
                <Button href={`/fighters/${fighter.slug}`} label="Pełny profil" />
                <Link className="fighter-profiles__link" to={`/fighters/${fighter.slug}`}>Zobacz zdjęcia i video</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FighterProfiles;
