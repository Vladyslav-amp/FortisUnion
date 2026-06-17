import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Button from '../UI/Button/Button';
import { events } from '../../data/siteData';
import './Hero.scss';

const parsePolishDate = (dateString) => {
  const months = {
    stycznia: 0,
    lutego: 1,
    marca: 2,
    kwietnia: 3,
    maja: 4,
    czerwca: 5,
    lipca: 6,
    sierpnia: 7,
    września: 8,
    pazdziernika: 9,
    października: 9,
    listopada: 10,
    grudnia: 11,
  };

  const [day, monthName, year] = dateString.split(' ');
  return new Date(Number(year), months[monthName], Number(day));
};

function Hero() {
  const [showEventCard, setShowEventCard] = useState(true);
  const navigate = useNavigate();

  const nextEvent = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return [...events]
      .filter((event) => parsePolishDate(event.date) >= today)
      .sort((a, b) => parsePolishDate(a.date) - parsePolishDate(b.date))[0];
  }, []);

  const goToNextEvent = () => {
    if (nextEvent) {
      navigate(`/events/${nextEvent.id}`);
    }
  };

  return (
    <section className="hero" id="home">
      <video
        ref={(el) => {
          if (el) el.playbackRate = 0.8;
        }}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/bg_hero.mp4" type="video/mp4" />
      </video>

      <div className="hero__overlay" />

      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Budujemy gwiazdy. Promujemy charakter.
          </h1>

          <p className="hero__description">
            Sport to coś więcej niż wyniki. To charakter, determinacja i
            historia stojąca za każdym sukcesem. Pokazujemy pełny potencjał
            zawodników, budując ich obecność w świecie sportu i biznesu.
          </p>

          <div className="hero__actions">
            <Button href="#fighters" label="Zobacz zawodników" />
          </div>
        </div>

        {nextEvent && showEventCard && (
          <motion.div
            role="button"
            tabIndex={0}
            className="hero__next-fight"
            onClick={goToNextEvent}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                goToNextEvent();
              }
            }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
          >
            <button
              type="button"
              className="hero__close-event"
              aria-label="Zamknij kartę wydarzenia"
              onClick={(event) => {
                event.stopPropagation();
                setShowEventCard(false);
              }}
            >
              <IoClose className="hero__close-event-icon" />
            </button>

            <div className="hero__next-fight-media">
              <img
                className="hero__next-fight-image"
                src={nextEvent.image}
                alt={nextEvent.fightCard || nextEvent.title}
              />
            </div>

            <div className="hero__next-fight-content">
              <span className="hero__next-fight-eyebrow">
                Następny pojedynek
              </span>

              <h2 className="hero__next-fight-title">
                {nextEvent.fightCard || nextEvent.title}
              </h2>

              {nextEvent.fightCard && (
                <strong className="hero__next-fight-name">
                  {nextEvent.title}
                </strong>
              )}

              <div className="hero__next-fight-divider" />

              <div className="hero__next-fight-meta">
                <span className="hero__next-fight-meta-item">
                  <FaCalendarAlt className="hero__next-fight-meta-icon" />
                  {nextEvent.date}
                </span>

                <span className="hero__next-fight-meta-item">
                  <FaMapMarkerAlt className="hero__next-fight-meta-icon" />
                  {nextEvent.location}
                </span>
              </div>

              <div className="hero__next-fight-divider" />

              <div className="hero__next-fight-cta">
                <span className="hero__next-fight-cta-text">
                  Zobacz szczegóły
                </span>
                <FaArrowRight className="hero__next-fight-cta-icon" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Hero;
