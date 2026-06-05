import PageHero from '../components/PageHero';
import FighterProfiles from '../components/FighterProfiles';
import JoinPromotion from '../components/JoinPromotion';

function FightersPage() {
  return (
    <>
      <PageHero
        eyebrow="Zawodnicy"
        title="Promocja czterech charakterów zbudowana jak premium roster"
        description="Każdy profil możesz rozwinąć o sponsorów, historię kariery, statystyki, media i galerię zdjęć."
      />
      <FighterProfiles />
      <JoinPromotion />
    </>
  );
}

export default FightersPage;
