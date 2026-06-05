import Hero from '../components/Hero/Hero';
import FightersGrid from '../components/FightersGrid';
import FighterSpotlight from '../components/FighterSpotlight';
import PromoHighlights from '../components/PromoHighlights';
import StatsStrip from '../components/StatsStrip';
import MediaGallery from '../components/MediaGallery';
import BlogPreview from '../components/BlogPreview';
import JoinPromotion from '../components/JoinPromotion';
import Newsletter from '../components/Newsletter';

function HomePage() {
  return (
    <>
      <Hero />
      <PromoHighlights />
      <StatsStrip />
      <FightersGrid />
      <FighterSpotlight />
      <MediaGallery />
      <BlogPreview />
      <JoinPromotion />
      <Newsletter />
    </>
  );
}

export default HomePage;
