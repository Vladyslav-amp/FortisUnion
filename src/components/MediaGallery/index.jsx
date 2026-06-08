import SectionHeading from '../Layout/SectionHeading/SectionHeading';
import { mediaGallery } from '../../data/siteData';
import './MediaGallery.scss';

function MediaGallery() {
  return (
    <section className="media-gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Media"
          title="Wideo, backstage i highlighty budują wartość promocji"
          description="Sekcja pod shorts, YouTube, backstage, foto relacje i partnerów medialnych."
        />
        <div className="media-gallery__grid">
          {mediaGallery.map((item) => (
            <article className="media-gallery__card" key={item.id}>
              <img src={item.image} alt={item.title} className="media-gallery__image" />
              <div className="media-gallery__overlay">
                <h3 className="media-gallery__title">{item.title}</h3>
                <p className="media-gallery__text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MediaGallery;
