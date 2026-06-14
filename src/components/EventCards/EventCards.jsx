import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaCamera,
  FaTrophy,
  FaArrowRight,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { events } from '../../data/siteData';
import './EventCards.scss';

const icons = [FaUsers, FaCamera, FaTrophy];

function EventCards() {
  return (
    <section className="event-cards">
      <div className="container">
        <div className="event-cards__grid">
          {events.map((event) => (
            <article className="event-cards__card" key={event.id}>
              <div className="event-cards__image-panel">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-cards__image"
                />

                <span className="event-cards__status">
                  {event.status}
                </span>
              </div>

              <div className="event-cards__content">
                <span className="event-cards__eyebrow">
                  Fortis Union Event
                </span>

                <h2 className="event-cards__title">
                  {event.title}
                </h2>

                <h2 className="event-cards__subtitle">
                  {event.fightCard}
                </h2>

                <div className="event-cards__meta">
                  <span>
                    <FaCalendarAlt />
                    {event.date}
                  </span>

                  <span>
                    <FaMapMarkerAlt />
                    {event.location}
                  </span>
                </div>

                <p className="event-cards__description">
                  {event.description}
                </p>

                {event.highlights?.length > 0 && (
                  <div className="event-cards__highlights">
                    <span className="event-cards__highlights-title">
                      Highlights
                    </span>

                    <ul>
                      {event.highlights.map((item, index) => {
                        const Icon = icons[index % icons.length];

                        return (
                          <li key={item}>
                            <div className="event-cards__highlight-icon">
                              <Icon />
                            </div>

                            <p>{item}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                <Link
                  to={`/events/${event.id}`}
                  className="event-cards__button"
                >
                  <span>Zobacz wydarzenie</span>

                  <FaArrowRight className="event-cards__button-arrow" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventCards;