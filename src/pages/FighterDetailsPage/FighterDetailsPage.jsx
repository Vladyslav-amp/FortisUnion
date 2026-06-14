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
    <section className="fighter-details">
      <div className="container">
        <button
          type="button"
          className="fighter-details__back"
          onClick={() => navigate('/fighters')}
        >
          <HiOutlineChevronLeft />
          <span>Wróć do wszystkich zawodników</span>
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
                      <img src={item.src} alt={item.title} />
                    ) : (
                      <>
                        <div className="fighter-details__video-preview">
                          <FaPlay />
                        </div>

                        <strong>{item.title}</strong>
                      </>
                    )}
                  </button>
                ))}
              </div>
            )}

            {infoItems.length > 0 && (
              <div className="fighter-details__info-grid">
                {infoItems.map((item) => (
                  <div key={`${item.label}-${item.value}`}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            )}

            {fighter.titles?.length > 0 && (
              <div className="fighter-details__section">
                <h2>Tytuły i stopnie sportowe</h2>

                <ul>
                  {fighter.titles.map((title) => (
                    <li key={title}>{title}</li>
                  ))}
                </ul>
              </div>
            )}

            {fighter.achievements && (
              <div className="fighter-details__section">
                <h2>Najważniejsze osiągnięcia</h2>

                {Object.entries(fighter.achievements).map(([category, items]) => (
                  <div key={category}>
                    <h3>
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

                    <ul>
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {fighter.education && (
              <div className="fighter-details__section">
                <h2>Wykształcenie</h2>

                <p>
                  <strong>{fighter.education.university}</strong>
                  <br />
                  {fighter.education.faculty}
                  <br />
                  Rok ukończenia: {fighter.education.graduationYear}
                </p>
              </div>
            )}

            {hasValue(fighter.shortStory) && (
              <div className="fighter-details__section">
                <h2>O profilu</h2>
                <p>{fighter.shortStory}</p>
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
                <FaChevronLeft />
              </button>

              <button
                type="button"
                className="fighter-details__lightbox-arrow fighter-details__lightbox-arrow--right"
                onClick={showNextMedia}
                aria-label="Następne media"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          <div
            className="fighter-details__lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            {activeMedia.type === 'image' ? (
              <img src={activeMedia.src} alt={activeMedia.title} />
            ) : isLocalVideo(activeMedia.src) ? (
              <video src={activeMedia.src} controls autoPlay />
            ) : (
              <iframe
                src={activeMedia.src}
                title={activeMedia.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            <div className="fighter-details__lightbox-caption">
              <strong>{activeMedia.title}</strong>
              <span>
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