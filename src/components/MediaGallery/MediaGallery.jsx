import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
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
                  <FaPlay />
                </span>

                <h3 className="media-gallery__title">{video.groupTitle}</h3>
                <p className="media-gallery__text">{video.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="media-gallery__modal"
          onClick={() => setActiveVideo(null)}
        >
          <button
            type="button"
            className="media-gallery__close"
            onClick={() => setActiveVideo(null)}
          >
            ×
          </button>

          <div
            className="media-gallery__player"
            onClick={(e) => e.stopPropagation()}
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