import PageHero from '../components/PageHero/PageHero';
import EventCards from '../components/EventCards/EventCards';
import Contact from '../components/Contact/Contact';

function EventsPage() {
  return (
    <>
      <PageHero
        title="Gale, turnieje i wydarzenia sportowe Fortis Union"
        description="Śledź nadchodzące wydarzenia, walki naszych zawodników, turnieje oraz projekty realizowane wspólnie z partnerami i organizacjami sportowymi."
      />
      <EventCards />
      <Contact />
    </>
  );
}

export default EventsPage;
