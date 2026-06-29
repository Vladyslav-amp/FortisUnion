import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Link } from 'react-router-dom';
import { fighters } from '../../data/siteData';
import SectionHeading from '../Layout/SectionHeading/SectionHeading';
import './FightersGrid.scss';

function FightersGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
  });

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const updateButtons = (api) => {
    setPrevDisabled(!api.canScrollPrev());
    setNextDisabled(!api.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;

    updateButtons(emblaApi);
    emblaApi.on('select', updateButtons);
    emblaApi.on('reInit', updateButtons);
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="fighters-grid" id="fighters">
      <div className="container fighters-grid__container">
        <SectionHeading
          eyebrow="Zawodnicy"
          title="Poznaj sportowców, którzy budują swoją przyszłość."
          description="Od pierwszych zwycięstw po największe wyzwania - pokazujemy ludzi stojących za wynikami."
        />

        <div className="fighters-grid__controls">
          <button
            className="fighters-grid__arrow"
            onClick={scrollPrev}
            disabled={prevDisabled}
            aria-label="Previous"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className="fighters-grid__arrow"
            onClick={scrollNext}
            disabled={nextDisabled}
            aria-label="Next"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="fighters-grid__viewport" ref={emblaRef}>
          <div className="fighters-grid__list">
            {fighters
              .filter((fighter) => fighter.id !== 1)
              .map((fighter) => (
                <div className="fighters-grid__slide" key={fighter.id}>
                  <Link
                    to={`/fighters/${fighter.id}`}
                    className="fighters-grid__card-link"
                  >
                    <article className="fighters-grid__card">
                      <div className="fighters-grid__media">
                        <img
                          src={fighter.image}
                          alt={fighter.name}
                          className="fighters-grid__image"
                          style={{
                            objectPosition:
                              fighter.imagePosition || 'center top',
                          }}
                        />
                      </div>

                      <div className="fighters-grid__body">
                        <h3 className="fighters-grid__name">
                          {fighter.name}
                        </h3>

                        <p className="fighters-grid__style">
                          {fighter.style}
                        </p>

                        <p className="fighters-grid__story">
                          {fighter.shortStory}
                        </p>

                        <div className="fighters-grid__stats">
                          <div className="fighters-grid__stat">
                            <strong className="fighters-grid__stat-value">
                              {fighter.age}
                            </strong>
                            <span className="fighters-grid__stat-label">
                              Wiek
                            </span>
                          </div>

                          <div className="fighters-grid__stat">
                            <strong className="fighters-grid__stat-value">
                              {fighter.stats.fights}
                            </strong>
                            <span className="fighters-grid__stat-label">
                              Walki
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FightersGrid;