import { useEffect, useMemo, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import { HiOutlineChevronLeft } from 'react-icons/hi2';
import { useNavigate, useParams } from 'react-router-dom';
import { fighters } from '../../data/siteData';
import '../../components/FighterProfiles/FighterProfiles.scss';
import './FighterDetailsPage.scss';

const hasValue = (value) =>
  value !== undefined &&
  value !== null &&
  value !== '' &&
  value !== 'Brak danych' &&
  value !== '-' &&
  value !== 'N/A';

const isLocalVideo = (src) =>
  typeof src === 'string' && src.toLowerCase().endsWith('.mp4');

function FighterDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeMediaIndex, setActiveMediaIndex] = useState(null);

  const fighter = fighters.find((fighter) => fighter.id === Number(id));

  const mediaItems = useMemo(() => {
    if (!fighter) return [];

    const galleryItems =
      fighter.gallery?.map((image, index) => ({
        type: 'image',
        src: image,
        title: `${fighter.name} — zdjęcie ${index + 1}`,
      })) || [];

    const videoItems =
      fighter.videos?.map((video) => ({
        type: 'video',
        src: video.url,
        title: video.title,
      })) || [];

    return [...galleryItems, ...videoItems];
  }, [fighter]);

  const infoItems = useMemo(() => {
    if (!fighter) return [];

    return [
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
        label: 'Walki amatorskie',
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
  }, [fighter]);

  const activeMedia =
    activeMediaIndex !== null ? mediaItems[activeMediaIndex] : null;

  const closeLightbox = () => {
    setActiveMediaIndex(null);
  };

  const showPrevMedia = (event) => {
    event.stopPropagation();

    setActiveMediaIndex((currentIndex) => {
      if (currentIndex === null) return null;
      return currentIndex === 0 ? mediaItems.length - 1 : currentIndex - 1;
    });
  };

  const showNextMedia = (event) => {
    event.stopPropagation();

    setActiveMediaIndex((currentIndex) => {
      if (currentIndex === null) return null;
      return currentIndex === mediaItems.length - 1 ? 0 : currentIndex + 1;
    });
  };

  useEffect(() => {
    if (activeMediaIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === 'ArrowLeft') {
        setActiveMediaIndex((currentIndex) => {
          if (currentIndex === null) return null;
          return currentIndex === 0 ? mediaItems.length - 1 : currentIndex - 1;
        });
      }

      if (event.key === 'ArrowRight') {
        setActiveMediaIndex((currentIndex) => {
          if (currentIndex === null) return null;
          return currentIndex === mediaItems.length - 1 ? 0 : currentIndex + 1;
        });
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeMediaIndex, mediaItems.length]);

  if (!fighter) {
    return (
      <section className="fighter-details">
        <div className="container fighter-details__container">
          <h1 className="fighter-details__not-found-title">Zawodnik nie istnieje</h1>

          <button
            type="button"
            className="fighter-details__not-found-button"
            onClick={() => navigate('/fighters')}
          >
            Wróć do zawodników
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="fighter-details">
      <div className="container fighter-details__container">
        <button
          type="button"
          className="fighter-details__back"
          onClick={() => navigate('/fighters')}
        >
          <HiOutlineChevronLeft className="fighter-details__back-icon" />
          <span className="fighter-details__back-text">Wróć do wszystkich zawodników</span>
        </button>

        <article className="fighter-details__hero">
          <div className="fighter-details__image-wrap">
            <img
              src={fighter.image}
              alt={fighter.name}
              className="fighter-details__image"
            />

            {hasValue(fighter.style) && (
              <div className="fighter-details__badge">
                {fighter.style}
              </div>
            )}
          </div>

          <div className="fighter-details__content">
            <span className="fighter-details__eyebrow">
              Profil zawodnika / trenera
            </span>

            <h1 className="fighter-details__name">{fighter.name}</h1>

            {hasValue(fighter.nickname) && (
              <p className="fighter-details__nickname">
                „{fighter.nickname}”
              </p>
            )}

            {hasValue(fighter.longStory) && (
              <p className="fighter-details__story">
                {fighter.longStory}
              </p>
            )}

            {hasValue(fighter.quote) && (
              <blockquote className="fighter-details__quote">
                {fighter.quote}
              </blockquote>
            )}

            {mediaItems.length > 0 && (
              <div className="fighter-details__media-strip">
                {mediaItems.map((item, index) => (
                  <button
                    key={`${item.src}-${index}`}
                    type="button"
                    className={`fighter-details__media-item ${item.type === 'video'
                      ? 'fighter-details__media-item--video'
                      : ''
                      }`}
                    onClick={() => setActiveMediaIndex(index)}
                  >
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="fighter-details__media-image"
                      />
                    ) : (
                      <>
                        <div className="fighter-details__video-preview">
                          <FaPlay className="fighter-details__video-icon" />
                        </div>

                        <strong className="fighter-details__media-title">{item.title}</strong>
                      </>
                    )}
                  </button>
                ))}
              </div>
            )}

            {infoItems.length > 0 && (
              <div className="fighter-details__info-grid">
                {infoItems.map((item) => (
                  <div className="fighter-details__info-card" key={`${item.label}-${item.value}`}>
                    <strong className="fighter-details__info-value">{item.value}</strong>
                    <span className="fighter-details__info-label">{item.label}</span>
                  </div>
                ))}
              </div>
            )}

            {fighter.titles?.length > 0 && (
              <div className="fighter-details__section">
                <h2 className="fighter-details__section-title">Tytuły i stopnie sportowe</h2>

                <ul className="fighter-details__list">
                  {fighter.titles.map((title) => (
                    <li className="fighter-details__list-item" key={title}>{title}</li>
                  ))}
                </ul>
              </div>
            )}

            {fighter.achievements && (
              <div className="fighter-details__section">
                <h2 className="fighter-details__section-title">Najważniejsze osiągnięcia</h2>

                {Object.entries(fighter.achievements).map(([category, items]) => (
                  <div className="fighter-details__achievement" key={category}>
                    <h3 className="fighter-details__achievement-title">
                      {category === 'muayThai'
                        ? 'Muay Thai'
                        : category === 'kickboxing'
                          ? 'Kickboxing'
                          : category === 'boxing'
                            ? 'Boks'
                            : category === 'combatSports'
                              ? 'Sporty Walki'
                              : category === 'endurance'
                                ? 'Kondycja'
                                : category === 'bareKnuckle'
                                  ? 'Walki na gołe pięści'
                                  : category}
                    </h3>

                    <ul className="fighter-details__list">
                      {items.map((item) => (
                        <li className="fighter-details__list-item" key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {fighter.education && (
              <div className="fighter-details__section">
                <h2 className="fighter-details__section-title">Wykształcenie</h2>

                <p className="fighter-details__education">
                  <strong className="fighter-details__education-university">
                    {fighter.education.university}
                  </strong>
                  <br className="fighter-details__education-break" />
                  {fighter.education.faculty}
                  <br className="fighter-details__education-break" />
                  Rok ukończenia: {fighter.education.graduationYear}
                </p>
              </div>
            )}

            {hasValue(fighter.shortStory) && (
              <div className="fighter-details__section">
                <h2 className="fighter-details__section-title">O profilu</h2>
                <p className="fighter-details__section-text">{fighter.shortStory}</p>
              </div>
            )}
          </div>
        </article>
      </div>

      {activeMedia && (
        <div className="fighter-details__lightbox" onClick={closeLightbox}>
          <button
            type="button"
            className="fighter-details__lightbox-close"
            onClick={closeLightbox}
            aria-label="Zamknij podgląd"
          >
            ×
          </button>

          {mediaItems.length > 1 && (
            <>
              <button
                type="button"
                className="fighter-details__lightbox-arrow fighter-details__lightbox-arrow--left"
                onClick={showPrevMedia}
                aria-label="Poprzednie media"
              >
                <FaChevronLeft className="fighter-details__lightbox-arrow-icon" />
              </button>

              <button
                type="button"
                className="fighter-details__lightbox-arrow fighter-details__lightbox-arrow--right"
                onClick={showNextMedia}
                aria-label="Następne media"
              >
                <FaChevronRight className="fighter-details__lightbox-arrow-icon" />
              </button>
            </>
          )}

          <div
            className="fighter-details__lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            {activeMedia.type === 'image' ? (
              <img
                src={activeMedia.src}
                alt={activeMedia.title}
                className="fighter-details__lightbox-image"
              />
            ) : isLocalVideo(activeMedia.src) ? (
              <video
                src={activeMedia.src}
                className="fighter-details__lightbox-video"
                controls
                autoPlay
              />
            ) : (
              <iframe
                src={activeMedia.src}
                title={activeMedia.title}
                className="fighter-details__lightbox-frame"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            <div className="fighter-details__lightbox-caption">
              <strong className="fighter-details__lightbox-title">{activeMedia.title}</strong>
              <span className="fighter-details__lightbox-counter">
                {activeMediaIndex + 1} / {mediaItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FighterDetailsPage;
