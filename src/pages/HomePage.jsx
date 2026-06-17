import Hero from '../components/Hero/Hero';
import FightersGrid from '../components/FightersGrid/FightersGrid';
import FighterSpotlight from '../components/FighterSpotlight/FighterSpotlight';
import PromoHighlights from '../components/PromoHighlights/PromoHighlights';
import MediaGallery from '../components/MediaGallery/MediaGallery';
// import BlogPreview from '../components/BlogPreview/BlogPreview';
import Contact from '../components/Contact/Contact';
import AboutUs from '../components/AboutUs/AboutUs';
import Partners from '../components/Partners/Partners';
import Event from '../components/EventsPreview/EventsPreview';

function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <FightersGrid />
      <MediaGallery />
      <FighterSpotlight />
      <PromoHighlights />
      <AboutUs />
      <Event />
      {/* <BlogPreview /> */}
      <Contact />
    </>
  );
}

export default HomePage;
