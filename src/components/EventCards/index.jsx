import { events } from '../../data/siteData';
import './EventCards.scss';

function EventCards() {
  return (
    <section className="event-cards">
      <div className="container event-cards__grid">
        {events.map((event) => (
          <article className="event-cards__card" key={event.id}>
            <div className="event-cards__date">{event.date}</div>
            <h2 className="event-cards__title">{event.title}</h2>
            <div className="event-cards__location">{event.location}</div>
            <p className="event-cards__description">{event.description}</p>
            <ul className="event-cards__bullets">
              {event.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EventCards;
