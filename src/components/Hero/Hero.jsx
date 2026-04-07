
import { motion } from 'framer-motion';
import Button from '../UI/Button/Button';
import Tag from '../UI/Tag/Tag';
import { heroHighlights, organization } from '../../data/siteData';
import './Hero.scss';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <Tag>{organization.name} • {organization.city}</Tag>
          <h1 className="hero__title">Promuj zawodników jak marka premium, nie jak zwykły klub.</h1>
          <p className="hero__description">
            {organization.name} to nowoczesny szablon pod promocję czterech fighterów, turniejów PMMA,
            bloga, mediów i strony, która wygląda jak duża organizacja.
          </p>
          <div className="hero__actions">
            <Button href="#fighters" label="Poznaj zawodników" />
            <Button href="#events" label="Zobacz turnieje" variant="secondary" />
          </div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero__arena-card">
            <div className="hero__arena-label">Sezon 2026</div>
            <div className="hero__arena-title">FortisUnion — fight culture from Gdańsk</div>
            <div className="hero__arena-copy">
              Cztery osobowości. Cztery historie. Jedna organizacja, która buduje zasięg, emocje i eventy.
            </div>
            <div className="hero__stats-grid">
              {heroHighlights.map((item) => (
                <div className="hero__stat" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
