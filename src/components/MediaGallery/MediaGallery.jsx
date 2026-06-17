import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import SectionHeading from '../Layout/SectionHeading/SectionHeading';
import { mediaGallery } from '../../data/siteData';
import './MediaGallery.scss';

function MediaGallery() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = mediaGallery.flatMap((item) =>
    item.videos.map((video) => ({
      ...video,
      groupTitle: item.title,
      text: item.text,
    }))
  );

  const closeModal = () => {
    setActiveVideo(null);
  };

  return (
    <section className="media-gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Media"
          title="Wideo, backstage i highlighty budują wartość promocji"
          description=""
        />

        <div className="media-gallery__grid">
          {videos.map((video) => (
            <button
              type="button"
              className="media-gallery__card"
              key={video.id}
              onClick={() => setActiveVideo(video)}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="media-gallery__video"
              >
                <source src={video.url} type="video/mp4" />
              </video>

              <div className="media-gallery__overlay">
                <span className="media-gallery__play">
                  <FaPlay className="media-gallery__play-icon" />
                </span>

                <h3 className="media-gallery__title">
                  {video.groupTitle}
                </h3>

                <p className="media-gallery__text">
                  {video.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="media-gallery__modal"
          onClick={closeModal}
        >
          <button
            type="button"
            className="media-gallery__close"
            onClick={closeModal}
            aria-label="Zamknij wideo"
          >
            <span className="media-gallery__close-text">×</span>
          </button>

          <div
            className="media-gallery__player"
            onClick={(event) => event.stopPropagation()}
          >
            <video
              controls
              autoPlay
              preload="metadata"
              className="media-gallery__player-video"
            >
              <source src={activeVideo.url} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default MediaGallery;
