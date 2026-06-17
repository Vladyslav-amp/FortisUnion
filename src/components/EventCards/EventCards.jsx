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
                  <span className="event-cards__meta-item">
                    <FaCalendarAlt className="event-cards__meta-icon" />
                    {event.date}
                  </span>

                  <span className="event-cards__meta-item">
                    <FaMapMarkerAlt className="event-cards__meta-icon" />
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

                    <ul className="event-cards__highlights-list">
                      {event.highlights.map((item, index) => {
                        const Icon = icons[index % icons.length];

                        return (
                          <li className="event-cards__highlight" key={item}>
                            <div className="event-cards__highlight-icon">
                              <Icon className="event-cards__highlight-svg" />
                            </div>

                            <p className="event-cards__highlight-text">{item}</p>
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
                  <span className="event-cards__button-text">
                    Zobacz wydarzenie
                  </span>

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
