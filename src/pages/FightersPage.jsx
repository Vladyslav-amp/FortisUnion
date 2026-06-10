import PageHero from '../components/PageHero/PageHero';
import FighterProfiles from '../components/FighterProfiles/FighterProfiles';

function FightersPage() {
  return (
    <>
      <PageHero
        eyebrow="Zawodnicy"
        title="Poznaj zawodników Fortis Union"
        description="Doświadczenie, osiągnięcia i charakter. Każdy profil zawiera historię kariery, rekordy, multimedia oraz najważniejsze sukcesy sportowe."
      />
      <FighterProfiles />
    </>
  );
}

export default FightersPage;
