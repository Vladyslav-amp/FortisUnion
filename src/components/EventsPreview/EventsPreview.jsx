import SectionHeading from '../Layout/SectionHeading/SectionHeading';
import Button from '../UI/Button/Button';
import { events } from '../../data/siteData';
import './EventsPreview.scss';

function EventsPreview() {
  return (
    <section className="events-preview" id="events">
      <div className="container">
        <SectionHeading
          eyebrow="Turnieje PMMA"
          title="Twoja organizacja promuje gwiazdy i jednocześnie sprzedaje wydarzenia"
          description="Tutaj możesz wrzucić turnieje, fight card, lokalizacje, transmisje albo rejestrację zawodników."
        />
        <div className="events-preview__list">
          {events.map((event) => (
            <article className="events-preview__card" key={event.id}>
              <div className="events-preview__date">{event.date}</div>
              <h3 className="events-preview__title">{event.title}</h3>
              <p className="events-preview__location">{event.location}</p>
              <p className="events-preview__copy">{event.description}</p>
              <div className="events-preview__footer">
                <span className="events-preview__status">{event.status}</span>
                <Button href="#join" label="Zobacz szczegóły" variant="secondary" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsPreview;
