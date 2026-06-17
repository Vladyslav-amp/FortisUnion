import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import SectionHeading from '../Layout/SectionHeading/SectionHeading';
import { events } from '../../data/siteData';
import './EventsPreview.scss';

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

function EventsPreview() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = parsePolishDate(a.date);
    const dateB = parsePolishDate(b.date);

    const aPast = dateA < today;
    const bPast = dateB < today;

    if (aPast !== bPast) {
      return aPast ? 1 : -1;
    }

    return dateA - dateB;
  });

  return (
    <section className="events-preview" id="events">
      <div className="container">
        <SectionHeading
          eyebrow="Fortis Union Events"
          title="Gale, turnieje i wydarzenia sportów walki"
          description="Poznaj nadchodzące wydarzenia, starty zawodników oraz projekty realizowane przez Fortis Union."
        />

        <div className="events-preview__list">
          {sortedEvents.map((event) => {
            const eventDate = parsePolishDate(event.date);
            const isPast = eventDate < today;

            return (
              <article
                className={`events-preview__card${isPast ? ' events-preview__card--past' : ''}`}
                key={event.id}
              >
                <div className="events-preview__image-wrap">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="events-preview__video-bg"
                  >
                    <source src={event.videos[0].url} type="video/mp4" />
                  </video>

                  <div className="events-preview__overlay">
                    <span className="events-preview__status">
                      {isPast ? 'Zakończone' : event.status}
                    </span>

                    <span className="events-preview__date">
                      <FaCalendarAlt className="events-preview__date-icon" />
                      <span className="events-preview__date-text">
                        {event.date}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="events-preview__content">
                  <span className="events-preview__eyebrow">
                    Reprezentanci Fortis Union
                  </span>

                  <h3 className="events-preview__title">
                    {event.title}
                  </h3>

                  <h2 className="events-preview__fight-card">
                    {event.fightCard}
                  </h2>

                  <p className="events-preview__location">
                    <FaMapMarkerAlt className="events-preview__location-icon" />
                    <span className="events-preview__location-text">
                      {event.location}
                    </span>
                  </p>

                  <p className="events-preview__copy">
                    {event.description}
                  </p>

                  <Link
                    to={`/events/${event.id}`}
                    className="events-preview__button"
                  >
                    Zobacz wydarzenie
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EventsPreview;
