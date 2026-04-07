
import PageHero from '../components/PageHero/PageHero';
import FighterProfiles from '../components/FighterProfiles/FighterProfiles';
import JoinPromotion from '../components/JoinPromotion/JoinPromotion';

function FightersPage() {
  return (
    <>
      <PageHero
        eyebrow="Zawodnicy"
        title="FortisUnion promuje zawodników jak premium roster, a nie zwykłą listę kart"
        description="Każdy profil możesz rozwinąć o sponsorów, historię kariery, statystyki, galerię zdjęć i sekcję video."
      />
      <FighterProfiles />
      <JoinPromotion />
    </>
  );
}

export default FightersPage;
