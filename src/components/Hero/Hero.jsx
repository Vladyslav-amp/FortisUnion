import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../UI/Button/Button';
import { fighters } from '../../data/siteData';
import './Hero.scss';

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFighter = fighters[activeIndex];
  const navigate = useNavigate();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % fighters.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const goToFighter = () => {
    navigate(`/fighters/${activeFighter.id}`);
  };

  return (
    <section className="hero" id="home">
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

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero__spotlight-card" aria-live="polite">
            <div className="hero__spotlight-top">
              <span>Fighter spotlight</span>
              <strong>0{activeFighter.id}</strong>
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                className="hero__featured-fighter"
                key={activeFighter.id}
                onClick={goToFighter}
                role="button"
                tabIndex={0}
                style={{ cursor: 'pointer' }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    goToFighter();
                  }
                }}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.38 }}
              >
                <img
                  src={activeFighter.image}
                  alt={activeFighter.name}
                  className="hero__featured-image"
                />

                <div className="hero__featured-overlay" />

                <div className="hero__featured-copy">
                  <span>{activeFighter.style}</span>
                  <h2>{activeFighter.name}</h2>
                  <strong>“{activeFighter.nickname}”</strong>
                  <p>{activeFighter.shortStory}</p>

                  <dl className="hero__featured-stats">
                    <div>
                      <dt>Rekord</dt>
                      <dd>{activeFighter.record}</dd>
                    </div>

                    <div>
                      <dt>Wzrost</dt>
                      <dd>{activeFighter.height}</dd>
                    </div>

                    <div>
                      <dt>Waga</dt>
                      <dd>{activeFighter.weight}</dd>
                    </div>

                    <div>
                      <dt>Styl</dt>
                      <dd>{activeFighter.style}</dd>
                    </div>
                  </dl>
                </div>
              </motion.article>
            </AnimatePresence>

            <div
              className="hero__fighter-tabs"
              aria-label="Wybór zawodnika w hero"
            >
              {fighters.map((fighter, index) => (
                <button
                  className={`hero__fighter-tab${
                    index === activeIndex ? ' hero__fighter-tab--active' : ''
                  }`}
                  type="button"
                  key={fighter.id}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={fighter.image} alt="" />
                  <span>{fighter.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;