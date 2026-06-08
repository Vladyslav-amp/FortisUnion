import { useNavigate, useParams } from 'react-router-dom';
import { fighters } from '../data/siteData';
import '../components/FighterProfiles/FighterProfiles.scss';

function FighterDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const fighter = fighters.find((fighter) => fighter.id === Number(id));

  if (!fighter) {
    return (
      <section className="fighter-profiles">
        <div className="container">
          <h1>Zawodnik nie istnieje</h1>
          <button type="button" onClick={() => navigate('/fighters')}>
            Wróć do zawodników
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="fighter-profiles">
      <div className="container fighter-profiles__list">
        <article className="fighter-profiles__card">
          <img
            src={fighter.image}
            alt={fighter.name}
            className="fighter-profiles__image"
          />

          <div className="fighter-profiles__content">
            <div className="fighter-profiles__headline">
              <h1 className="fighter-profiles__name">
                {fighter.name}
              </h1>

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
                <strong>{fighter.weight}</strong>
                <span>Waga</span>
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

            <button
              type="button"
              onClick={() => navigate('/fighters')}
              style={{ marginTop: '32px' }}
            >
              Wróć do wszystkich zawodników
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default FighterDetailsPage;