import { useNavigate } from 'react-router-dom';
import { fighters } from '../../data/siteData';
import './FighterProfiles.scss';

const hasValue = (value) =>
  value !== undefined &&
  value !== null &&
  value !== '' &&
  value !== 'Brak danych' &&
  value !== '-' &&
  value !== 'N/A';

function FighterProfiles() {
  const navigate = useNavigate();

  return (
    <section className="fighter-profiles" id="fighters">
      <div className="container fighter-profiles__list">
        {fighters.map((fighter) => {
          const infoItems = [
            hasValue(fighter.record) && {
              value: fighter.record,
              label: fighter.recordLabel || 'Rekord',
            },

            hasValue(fighter.recordDouble) && {
              value: fighter.recordDouble,
              label: fighter.recordDoubleLabel || 'Drugi rekord',
            },

            hasValue(fighter.stats?.fights) && {
              value: fighter.stats.fights,
              label: 'Walki',
            },

            hasValue(fighter.age) && {
              value: fighter.age,
              label: 'Wiek',
            },

            hasValue(fighter.height) && {
              value: fighter.height,
              label: 'Wzrost',
            },

            hasValue(fighter.weight) && {
              value: fighter.weight,
              label: 'Waga',
            },

            hasValue(fighter.reach) && {
              value: fighter.reach,
              label: 'Zasięg',
            },

            hasValue(fighter.experience) && {
              value: fighter.experience,
              label: 'Doświadczenie',
            },

            hasValue(fighter.style) && {
              value: fighter.style,
              label: 'Styl',
            },

            hasValue(fighter.citizenship || fighter.nationality) && {
              value: fighter.flag
                ? `${fighter.flag} ${fighter.citizenship || fighter.nationality}`
                : fighter.citizenship || fighter.nationality,
              label: 'Obywatelstwo',
            },
          ].filter(Boolean);

          return (
            <article
              className="fighter-profiles__card"
              key={fighter.id}
              onClick={() => navigate(`/fighters/${fighter.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  navigate(`/fighters/${fighter.id}`);
                }
              }}
            >
              <div className="fighter-profiles__image-wrap">
                <img
                  src={fighter.image}
                  alt={fighter.name}
                  className="fighter-profiles__image"
                />

                {hasValue(fighter.style) && (
                  <span className="fighter-profiles__style-badge">
                    {fighter.style}
                  </span>
                )}
              </div>

              <div className="fighter-profiles__content">
                <div className="fighter-profiles__headline">
                  <h2 className="fighter-profiles__name">
                    {fighter.name}
                  </h2>

                  {hasValue(fighter.nickname) && (
                    <span className="fighter-profiles__nickname">
                      {fighter.nickname}
                    </span>
                  )}
                </div>

                {hasValue(fighter.longStory) && (
                  <p className="fighter-profiles__story">
                    {fighter.longStory}
                  </p>
                )}

                {infoItems.length > 0 && (
                  <div className="fighter-profiles__info-grid">
                    {infoItems.map((item) => (
                      <div key={`${item.label}-${item.value}`}>
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FighterProfiles;