
import { Navigate, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero/PageHero';
import JoinPromotion from '../components/JoinPromotion/JoinPromotion';
import { getFighterBySlug, organization } from '../data/siteData';
import './FighterDetailsPage.scss';

function FighterDetailsPage() {
  const { slug } = useParams();
  const fighter = getFighterBySlug(slug);

  if (!fighter) {
    return <Navigate to="/fighters" replace />;
  }

  return (
    <>
      <PageHero
        eyebrow={`${organization.name} • profil zawodnika`}
        title={`${fighter.name} ${fighter.nickname}`}
        description="Pełna karta zawodnika z bio, osiągnięciami, galerią i sekcją wideo. Wstaw tu swoje prawdziwe materiały."
      />

      <section className="fighter-details">
        <div className="container fighter-details__hero">
          <div className="fighter-details__media">
            <img src={fighter.heroImage} alt={fighter.name} className="fighter-details__hero-image" />
          </div>
          <div className="fighter-details__content">
            <div className="fighter-details__eyebrow">{fighter.style}</div>
            <h2 className="fighter-details__name">{fighter.name}</h2>
            <p className="fighter-details__nickname">{fighter.nickname}</p>
            <p className="fighter-details__story">{fighter.longStory}</p>

            <div className="fighter-details__stats">
              <div><strong>{fighter.record}</strong><span>Rekord</span></div>
              <div><strong>{fighter.height}</strong><span>Wzrost</span></div>
              <div><strong>{fighter.reach}</strong><span>Zasięg</span></div>
              <div><strong>{fighter.weight}</strong><span>Waga</span></div>
              <div><strong>{fighter.hometown}</strong><span>Miasto</span></div>
              <div><strong>{fighter.stats.fights}</strong><span>Walki</span></div>
            </div>

            <blockquote className="fighter-details__quote">“{fighter.quote}”</blockquote>
          </div>
        </div>

        <div className="container fighter-details__grid">
          <article className="fighter-details__panel fighter-details__panel--achievements">
            <h3 className="fighter-details__panel-title">Osiągnięcia</h3>
            <ul className="fighter-details__list">
              {fighter.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="fighter-details__panel fighter-details__panel--socials">
            <h3 className="fighter-details__panel-title">Kanały i media</h3>
            <div className="fighter-details__socials">
              <div><span>Instagram</span><strong>{fighter.socials.instagram}</strong></div>
              <div><span>YouTube</span><strong>{fighter.socials.youtube}</strong></div>
            </div>
          </article>
        </div>

        <div className="container fighter-details__gallery-block">
          <h3 className="fighter-details__section-title">Galeria zdjęć</h3>
          <div className="fighter-details__gallery">
            {fighter.gallery.map((image, index) => (
              <img key={`${fighter.slug}-${index + 1}`} src={image} alt={`${fighter.name} ${index + 1}`} className="fighter-details__gallery-image" />
            ))}
          </div>
        </div>

        <div className="container fighter-details__video-block">
          <div className="fighter-details__video-copy">
            <h3 className="fighter-details__section-title">Video promo</h3>
            <p>{fighter.videoTitle}</p>
          </div>
          <div className="fighter-details__video-frame">
            <iframe
              src={fighter.videoEmbed}
              title={fighter.videoTitle}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <JoinPromotion />
    </>
  );
}

export default FighterDetailsPage;
