import { useNavigate } from 'react-router-dom';
import { fighters } from '../../data/siteData';
import './FighterProfiles.scss';

function FighterProfiles() {
  const navigate = useNavigate();

  return (
    <section className="fighter-profiles" id="fighters">
      <div className="container fighter-profiles__list">
        {fighters.map((fighter) => (
          <article
            className="fighter-profiles__card"
            key={fighter.id}
            onClick={() => navigate(`/fighters/${fighter.id}`)}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                navigate(`/fighters/${fighter.id}`);
              }
            }}
          >
            <img
              src={fighter.image}
              alt={fighter.name}
              className="fighter-profiles__image"
            />

            <div className="fighter-profiles__content">
              <div className="fighter-profiles__headline">
                <h2 className="fighter-profiles__name">
                  {fighter.name}
                </h2>

                <span className="fighter-profiles__nickname">
                  {fighter.nickname}
                </span>
              </div>

              <p className="fighter-profiles__story">
                {fighter.longStory}
              </p>

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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FighterProfiles;