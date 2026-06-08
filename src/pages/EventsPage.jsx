import PageHero from '../components/PageHero';
import EventCards from '../components/EventCards';
import Contact from '../components/Contact/Contact';

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Turnieje"
        title="Sekcja eventowa pod PMMA, zgłoszenia, partnerów i fight week"
        description="Szablon nadaje się do gali, ligi, sezonu lub serii turniejów w różnych miastach."
      />
      <EventCards />
      <Contact />
    </>
  );
}

export default EventsPage;
