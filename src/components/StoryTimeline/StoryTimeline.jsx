import SectionHeading from '../Layout/SectionHeading/SectionHeading';
import { journeySteps } from '../../data/siteData';
import './StoryTimeline.scss';

function StoryTimeline() {
  return (
    <section className="story-timeline">
      <div className="container">
        <SectionHeading
          eyebrow="Narracja marki"
          title="Zbuduj stronę, która opowiada o drodze zawodników, nie tylko o rekordzie"
          description="Ta sekcja dobrze działa jako historia projektu, plan sezonu albo proces rozwoju zawodnika."
        />
        <div className="story-timeline__list">
          {journeySteps.map((step) => (
            <article className="story-timeline__item" key={step.year}>
              <div className="story-timeline__year">{step.year}</div>
              <h3 className="story-timeline__title">{step.title}</h3>
              <p className="story-timeline__text">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StoryTimeline;
