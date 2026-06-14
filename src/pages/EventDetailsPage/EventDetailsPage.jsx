import { useEffect, useMemo, useState } from 'react';
import {
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPlay,
} from 'react-icons/fa';
import { HiOutlineChevronLeft } from 'react-icons/hi2';
import { useNavigate, useParams } from 'react-router-dom';
import { events } from '../../data/siteData';
import './EventDetailsPage.scss';

const isLocalVideo = (src) =>
  typeof src === 'string' && src.toLowerCase().endsWith('.mp4');

function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeMediaIndex, setActiveMediaIndex] = useState(null);

  const event = events.find((item) => item.id === Number(id));

  const mainVideo = event?.videos?.[0];
  const extraVideo = event?.videos?.[1];

  const mediaItems = useMemo(() => {
    if (!event) return [];

    const videoItems =
      event.videos?.map((video) => ({
        type: 'video',
        src: video.url,
        title: video.title,
      })) || [];

    const galleryItems =
      event.gallery?.map((image, index) => ({
        type: 'image',
        src: image,
        title: `${event.title} — zdjęcie ${index + 1}`,
      })) || [];

    return [...videoItems, ...galleryItems];
  }, [event]);

  const activeMedia =
    activeMediaIndex !== null ? mediaItems[activeMediaIndex] : null;

  const closeLightbox = () => {
    setActiveMediaIndex(null);
  };

  const showPrevMedia = (clickEvent) => {
    clickEvent.stopPropagation();

    setActiveMediaIndex((currentIndex) => {
      if (currentIndex === null) return null;
      return currentIndex === 0 ? mediaItems.length - 1 : currentIndex - 1;
    });
  };

  const showNextMedia = (clickEvent) => {
    clickEvent.stopPropagation();

    setActiveMediaIndex((currentIndex) => {
      if (currentIndex === null) return null;
      return currentIndex === mediaItems.length - 1 ? 0 : currentIndex + 1;
    });
  };

  useEffect(() => {
    if (activeMediaIndex === null) return undefined;

    const handleKeyDown = (keyboardEvent) => {
      if (keyboardEvent.key === 'Escape') {
        closeLightbox();
      }

      if (keyboardEvent.key === 'ArrowLeft') {
        setActiveMediaIndex((currentIndex) => {
          if (currentIndex === null) return null;
          return currentIndex === 0 ? mediaItems.length - 1 : currentIndex - 1;
        });
      }

      if (keyboardEvent.key === 'ArrowRight') {
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

  if (!event) {
    return (
      <main className="event-details">
        <div className="container">
          <h1>Wydarzenie nie istnieje</h1>

          <button
            type="button"
            className="event-details__back"
            onClick={() => navigate('/events')}
          >
            <HiOutlineChevronLeft />
            <span>Wróć do wydarzeń</span>
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="event-details">
      <div className="container">
        <button
          type="button"
          className="event-details__back"
          onClick={() => navigate('/events')}
        >
          <HiOutlineChevronLeft />
          <span>Wróć do wydarzeń</span>
        </button>

        <section className="event-details__hero">
          <div className="event-details__image-wrap">
            <img
              src={event.image}
              alt={event.title}
              className="event-details__image"
            />

            <div className="event-details__status">
              {event.status}
            </div>
          </div>

          <div className="event-details__content">
            <span className="event-details__eyebrow">
              Fortis Union Event
            </span>

            <h1 className="event-details__title">
              {event.title}
            </h1>

            <div className="event-details__meta">
              <span>
                <FaCalendarAlt />
                {event.date}
              </span>

              <span>
                <FaMapMarkerAlt />
                {event.location}
              </span>
            </div>

            <p className="event-details__lead">
              {event.description}
            </p>

            {event.longDescription && (
              <p className="event-details__text">
                {event.longDescription}
              </p>
            )}

            {event.highlights?.length > 0 && (
              <div className="event-details__section">
                <h2>Najważniejsze punkty wydarzenia</h2>

                <ul>
                  {event.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {mainVideo?.url && (
          <section className="event-details__video-section">
            <div className="event-details__video-wrap">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="event-details__main-video"
              >
                <source src={mainVideo.url} type="video/mp4" />
              </video>
            </div>

            <div className="event-details__video-content">
              <span>Video</span>

              <h2>{mainVideo.title || 'Przed walką'}</h2>

              <p>
                Materiał promocyjny związany z wydarzeniem, przygotowaniami
                zawodnika oraz nadchodzącym pojedynkiem.
              </p>

              <button
                type="button"
                className="event-details__video-button"
                onClick={() => {
                  const videoIndex = mediaItems.findIndex(
                    (item) => item.src === mainVideo.url
                  );

                  if (videoIndex >= 0) {
                    setActiveMediaIndex(videoIndex);
                  }
                }}
              >
                <FaPlay />
                Otwórz w pełnym ekranie
              </button>
            </div>
          </section>
        )}

        {extraVideo?.url && (
          <section className="event-details__video-section event-details__video-section--reverse">
            <div className="event-details__video-content">
              <span>Backstage</span>

              <h2>{extraVideo.title || 'Drugi materiał wideo'}</h2>

              <p>
                Dodatkowy materiał pokazujący kulisy, atmosferę wydarzenia lub
                przygotowania reprezentanta Fortis Union.
              </p>

              <button
                type="button"
                className="event-details__video-button"
                onClick={() => {
                  const videoIndex = mediaItems.findIndex(
                    (item) => item.src === extraVideo.url
                  );

                  if (videoIndex >= 0) {
                    setActiveMediaIndex(videoIndex);
                  }
                }}
              >
                <FaPlay />
                Otwórz w pełnym ekranie
              </button>
            </div>

            <div className="event-details__video-wrap">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="event-details__main-video"
              >
                <source src={extraVideo.url} type="video/mp4" />
              </video>
            </div>
          </section>
        )}

        {event.gallery?.length > 0 && (
          <section className="event-details__media-section">
            <div className="event-details__section-heading">
              <span>Galeria</span>
              <h2>Zdjęcia zawodnika</h2>
            </div>

            <div className="event-details__media-strip">
              {event.gallery.map((image, index) => {
                const imageIndex = mediaItems.findIndex(
                  (item) => item.type === 'image' && item.src === image
                );

                return (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    className="event-details__media-item"
                    onClick={() => setActiveMediaIndex(imageIndex)}
                  >
                    <img
                      src={image}
                      alt={`${event.title} — zdjęcie ${index + 1}`}
                    />
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </div>

      {activeMedia && (
        <div className="event-details__lightbox" onClick={closeLightbox}>
          <button
            type="button"
            className="event-details__lightbox-close"
            onClick={closeLightbox}
            aria-label="Zamknij podgląd"
          >
            ×
          </button>

          {mediaItems.length > 1 && (
            <>
              <button
                type="button"
                className="event-details__lightbox-arrow event-details__lightbox-arrow--left"
                onClick={showPrevMedia}
                aria-label="Poprzednie media"
              >
                <FaChevronLeft />
              </button>

              <button
                type="button"
                className="event-details__lightbox-arrow event-details__lightbox-arrow--right"
                onClick={showNextMedia}
                aria-label="Następne media"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          <div
            className="event-details__lightbox-content"
            onClick={(clickEvent) => clickEvent.stopPropagation()}
          >
            {activeMedia.type === 'image' ? (
              <img src={activeMedia.src} alt={activeMedia.title} />
            ) : isLocalVideo(activeMedia.src) ? (
              <video src={activeMedia.src} controls autoPlay playsInline />
            ) : (
              <iframe
                src={activeMedia.src}
                title={activeMedia.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            <div className="event-details__lightbox-caption">
              <strong>{activeMedia.title}</strong>
              <span>
                {activeMediaIndex + 1} / {mediaItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default EventDetailsPage;