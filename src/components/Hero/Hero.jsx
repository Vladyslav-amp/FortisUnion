import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from '../UI/Button/Button';
import { fighters, events } from '../../data/siteData';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [showFightVideo, setShowFightVideo] = useState(false);
  const activeFighter = fighters[activeIndex];
  const navigate = useNavigate();

  const nextEvent = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return [...events]
      .filter((event) => parsePolishDate(event.date) >= today)
      .sort((a, b) => parsePolishDate(a.date) - parsePolishDate(b.date))[0];
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % fighters.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setShowFightVideo((current) => !current);
    }, 4500);

    return () => window.clearInterval(timer);
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

        {nextEvent && (
          <motion.button
            type="button"
            className="hero__next-fight"
            onClick={goToNextEvent}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
          >
            <div className="hero__next-fight-media">
              <img
                src={nextEvent.image}
                alt={nextEvent.fightCard || nextEvent.title}
              />

              {/* <span>{nextEvent.status}</span> */}
            </div>

            <div className="hero__next-fight-content">
              <span className="hero__next-fight-eyebrow">
                Następny pojedynek
              </span>

              <h2>{nextEvent.fightCard || nextEvent.title}</h2>

              {nextEvent.fightCard && (
                <strong>{nextEvent.title}</strong>
              )}

              <div className="hero__next-fight-divider" />

              <div className="hero__next-fight-meta">
                <span>
                  <FaCalendarAlt />
                  {nextEvent.date}
                </span>

                <span>
                  <FaMapMarkerAlt />
                  {nextEvent.location}
                </span>
              </div>

              <div className="hero__next-fight-divider" />

              <div className="hero__next-fight-cta">
                <span>Zobacz szczegóły</span>
                <FaArrowRight />
              </div>
            </div>
          </motion.button>
        )}
      </div>
    </section>
  );
}

export default Hero;