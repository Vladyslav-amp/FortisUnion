import Hero from '../components/Hero/Hero';
import FightersGrid from '../components/FightersGrid/FightersGrid';
import FighterSpotlight from '../components/FighterSpotlight/FighterSpotlight';
import PromoHighlights from '../components/PromoHighlights/PromoHighlights';
import MediaGallery from '../components/MediaGallery';
import BlogPreview from '../components/BlogPreview/BlogPreview';
import Contact from '../components/Contact/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <PromoHighlights />
      <FightersGrid />
      <FighterSpotlight />
      <MediaGallery />
      <BlogPreview />
      <Contact />
    </>
  );
}

export default HomePage;
