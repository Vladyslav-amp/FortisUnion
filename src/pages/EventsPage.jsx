import PageHero from '../components/PageHero/PageHero';
import EventCards from '../components/EventCards/EventCards';
import Newsletter from '../components/Newsletter/Newsletter';

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Turnieje"
        title="Sekcja eventowa pod PMMA, zgłoszenia, partnerów i fight week"
        description="Szablon nadaje się do gali, ligi, sezonu lub serii turniejów w różnych miastach."
      />
      <EventCards />
      <Newsletter />
    </>
  );
}

export default EventsPage;
